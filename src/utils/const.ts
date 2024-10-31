import { CheckListSVG } from "../components/Icons/CheckListSVG";
import { HomeSVG } from "../components/Icons/HomeSVG";

export const regions = {
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
  } as const;


export const REGIONS_ARRAY = [
    {
        key: "north",
        longitude: 35.2033,
        latitude: 33.095,
        altitude: 100000,
    },
    {
        key: "south",
        longitude: 34.7913,
        latitude: 29.5581,
        altitude: 100000,
    },
    {
        key: "east",
        longitude: 35.5735,
        latitude: 31.0461,
        altitude: 100000,
    },
    {
        key: "west",
        longitude: 34.3289,
        latitude: 31.0461,
        altitude: 100000,
    }
] as const;


export const FILTER_LIST = [
  {
      key: 'threats',
      value: 'Threats'
  },
  {
      key: 'sense',
      value: 'sense'
  },
  {
      key: 'Interruption reports',
      value: 'Interruption reports'
  },
  {
      key: 'North Region',
      value: 'North Region'
  },
  {
      key: 'South Region',
      value: 'South Region'
  },
  {
      key: 'West Region',
      value: 'West Region'
  },
  {
      key: 'East Region',
      value: 'East Region'
  },

  {
      key: 'Jerusalem Region',
      value: 'Jerusalem Region'
  },
  {
      key: 'Tel Aviv Region',
      value: 'Tel Aviv Region'
  },
  {
      key: 'Haifa Region',
      value: 'Haifa Region'
  },

] as const;


export const MENU_LIST = [
    {
        icon: 'Home',
        title: 'Home',
        component: HomeSVG,
        path: '/'
    },
    {
        icon: 'CheckList',
        title: 'Tools Eligibility',
        component: CheckListSVG,
        path: '/tools-eligibility'
    }
] as const


export const DATE_FORMAT = 'DD/MM/YYYY' as const;
export const TIME_FORMAT = 'HH:mm' as const;