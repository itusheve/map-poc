import { useEffect, useRef, useState } from "react";
import {
  Viewer,
  Cartesian3,
  Color,
  UrlTemplateImageryProvider,
  GeoJsonDataSource,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { REGIONS_ARRAY } from "../../utils/const";
import { TopRightActionRow } from "../../components/TopRightActionRow";
import { TopLeftAlertMenu } from "./components/TopLeftAlertMenu";
import { DoubleArrowDown } from "../../components/Icons/DoubleArrowDown";
import { OpenArrowsSvg } from "../../components/Icons/OpenArrowsSvg";

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
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", // https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png
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
      <div className="h-[6dvh] w-[100dvw] flex justify-between items-center px-2 bg-primary text-primary-foreground">
        <div className="flex gap-4 ">
          <TreeLinesHamburgerSVG />
          <div>
            Mozart
          </div>
        </div>
        <div>
          Operational env
        </div>
      </div>
      <div className=" relative ">
        <div ref={cesiumContainerRef} className="w-[100dvw] h-[94dvh]" />
        <div className=" absolute top-12 right-2">
          <TopRightActionRow flyToRegion={flyToRegion} />
        </div>
        <div className="absolute top-12 left-2">
          <TopLeftAlertMenu />
        </div>
        <div className="absolute bottom-4 right-2 w-[73vw]">
          <GnatAndPMButtonMenu />
        </div>
      </div>
    </>
  );
}

export function GnatAndPMButtonMenu() {
  const [isGnatOpen, setIsGnatOpen] = useState(false)
  return <div>
    <div className="flex justify-between">
      <button className="p-2 bg-primary text-primary-foreground flex gap-2">
        <DoubleArrowDown className={`transition-all ${isGnatOpen ? 'rotate-180' : ''}`} onClick={() => setIsGnatOpen(!isGnatOpen)}/>
        <div>
          gant
        </div>
        <OpenArrowsSvg />
      </button>
      <button className="p-2 bg-primary text-primary-foreground ">
        new PM
      </button>
    </div>
    {isGnatOpen && <GnatDetails />}
  </div>
}
export function GnatDetails() {
  return (
    <div className="bg-secondary text-primary-foreground pt-2 pb-1 ">
      {/* First Grid */}
      <div className="grid w-full text-[7px] rounded" style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
        {TimeList(4).map((time) => (
          <div key={time} className="w-full grid place-items-center">
            {time.includes(':15') || time.includes(':45') ? (
              <div>|</div>
            ) : (
              <div>{time.includes(':00') ? time.split(':')[0] : time.split(':')[0] + '.5'}</div>
            )}
          </div>
        ))}
      </div>

      {/* Second Grid with Span Columns */}
      <div className="grid w-full text-[7px] rounded" style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
        {/* Span from column 2 to column 6 */}
        <div className="col-span-5 border" style={{ gridColumnStart: 2, gridColumnEnd: 7 }}>
          2 to 6 action
        </div>

        {/* Span from column 8 to column 14 */}
        <div className="col-span-7 border" style={{ gridColumnStart: 8, gridColumnEnd: 14 }}>
          8 to 14 action
        </div>

        {/* Span from column 15 to column 25 */}
        <div className="col-span-11 border" style={{ gridColumnStart: 15, gridColumnEnd: 26 }}>
          15 to 25 action
        </div>
      </div>


      {/* Second Grid with Span Columns */}
      <div className="grid w-full text-[7px] rounded pt-2" style={{ gridTemplateColumns: 'repeat(48, minmax(0, 1fr))' }}>
        {/* Span from column 2 to column 6 */}
        <div className="col-span-5 border" style={{ gridColumnStart: 3, gridColumnEnd: 9 }}>
          3 to 9 action
        </div>

        {/* Span from column 8 to column 14 */}
        <div className="col-span-7 border" style={{ gridColumnStart: 12, gridColumnEnd: 20 }}>
          12 to 20 action
        </div>

        {/* Span from column 15 to column 25 */}
        <div className="col-span-11 border" style={{ gridColumnStart: 25, gridColumnEnd: 40 }}>
          25 to 40 action
        </div>
      </div>

    </div>
  );
}


import moment from 'moment'
import { TreeLinesHamburgerSVG } from "../../components/Icons/TreeLinesHamburgerSVG";
export function TimeList(steps: number) : string[] {
  let timeList: string[] = []
  let time = moment().subtract('hours', 6);
  // round to the nearest 15 minutes 0 15 30 45
  time = time.startOf('hour').add('minutes', Math.ceil(time.minutes() / 15) * 15)
  for (let i = 0; i < steps * 12 ; i++) {
    timeList.push(time.format('HH:mm'))
    time = time.add('minutes', 60 / steps)
  }
  return timeList
}