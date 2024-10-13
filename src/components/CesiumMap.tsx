import { useEffect, useRef, useState } from "react";
import {
  Viewer,
  Cartesian3,
  Color,
  UrlTemplateImageryProvider,
  GeoJsonDataSource,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { REGIONS_ARRAY } from "../utils/const";

export function CesiumMap() {
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const [viewer, setViewer] = useState<Viewer | null>(null);



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

  const flyToRegion = (index: number) => {
    if (viewer) {
      const region = REGIONS_ARRAY[index];
      viewer.camera.flyTo({
        destination: Cartesian3.fromDegrees(region.longitude, region.latitude, region.altitude),
        duration: 2.0,
      });
    }
  };

  return (
    <>        
        {/* <select
          onChange={(e) => flyToRegion(parseInt(e.target.value))}
        >
          {REGIONS_ARRAY.map((region, index) => <option key={region.key} value={index}>{region.key}</option>)}
        </select> */}
      <div>
        <div ref={cesiumContainerRef} className="w-[100dvw] h-[100dvh]"  />
      </div>
    </>
  );
}

// export default CesiumMap;
// export function

