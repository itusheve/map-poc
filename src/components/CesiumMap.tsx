import React, { useEffect, useRef, useState } from "react";
import {
  Viewer,
  Cartesian3,
  Color,
  UrlTemplateImageryProvider,
  GeoJsonDataSource,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const CesiumMap: React.FC = () => {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const [viewer, setViewer] = useState<typeof Viewer | null>(null);

  const regions = {
    north: {
      longitude: 35.2033,
      latitude: 33.095,
      altitude: 100000,
    },
    south: {
      longitude: 34.7913,
      latitude: 29.5581,
      altitude: 100000,
    },
    east: {
      longitude: 35.5735,
      latitude: 31.0461,
      altitude: 100000,
    },
    west: {
      longitude: 34.3289,
      latitude: 31.0461,
      altitude: 100000,
    },
  };

  useEffect(() => {
    if (!cesiumContainerRef.current) return;

    const newViewer = new Viewer(cesiumContainerRef.current, {
      terrainProvider: undefined,
      homeButton: true,
      sceneModePicker: false,
      timeline: false,
      animation: false,
      baseLayerPicker: false,
    });

    const imageryProvider = new UrlTemplateImageryProvider({
      url: "http://localhost:8080/{z}/{x}/{y}.png",
      minimumLevel: 0,
      maximumLevel: 15,
      tileWidth: 256,
      tileHeight: 256,
    });

    newViewer.imageryLayers.addImageryProvider(imageryProvider);

    newViewer.camera.setView({
      destination: Cartesian3.fromDegrees(34.8516, 31.0461, 1500000),
    });

    GeoJsonDataSource.load("/israel-borders.geojson", {
      stroke: Color.YELLOW.withAlpha(0.7),
      strokeWidth: 3,
      fill: Color.TRANSPARENT,
    })
      .then((dataSource) => {
        newViewer.dataSources.add(dataSource);
        newViewer.zoomTo(dataSource);
      })
      .catch((error) => {
        console.error("Error loading GeoJSON: ", error);
      });

    setViewer(newViewer);

    return () => {
      newViewer.destroy();
    };
  }, []);

  const flyToRegion = (regionKey: keyof typeof regions) => {
    if (viewer) {
      const { longitude, latitude, altitude } = regions[regionKey];
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(longitude, latitude, altitude),
        duration: 2.0,
      });
    }
  };

  return (
    <>
      <div>
        <select
          onChange={(e) => flyToRegion(e.target.value as keyof typeof regions)}
        >
          <option value="">Select Region</option>
          <option value="north">North of Israel</option>
          <option value="south">South of Israel</option>
          <option value="east">East of Israel</option>
          <option value="west">West of Israel</option>
        </select>
      </div>
      <div ref={cesiumContainerRef} style={{ width: "100%", height: "90vh" }} />
    </>
  );
};

export default CesiumMap;
