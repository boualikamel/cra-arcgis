import MapView from "esri/views/MapView";
import Search from "esri/widgets/Search";
import Basemap from "esri/Basemap"
import WebTileLayer from "esri/layers/WebTileLayer"
import Map from "esri/Map"

const noop = () => {};

const defaultBasemap = new Basemap({
  baseLayers: [new WebTileLayer({
      urlTemplate: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{level}/{row}/{col}.png"
  })],
  title: "blablabalb",
  id: "streets",
  thumbnailUrl: "https://stamen-tiles.a.ssl.fastly.net/terrain/10/177/410.png"
});


export const view = new MapView({
  container: "mapDiv", // Reference to the map div 
  map: new Map({
      basemap: defaultBasemap
  }), // Reference to the map object created before the scene
  zoom: 6, // Sets zoom level based on level of detail (LOD)            
  center: [3.262939, 36.618283], // Sets center point of view using longitude,latitude
  ui: {
      components: ["zoom", "compass"]
  }

});

export const search = new Search({ view });
view.ui.add(search, "top-right");

export const initialize = (container) => {
  view.container = container;
  view
    .when()
    .then(_ => {
      console.log("Map and View and Search are ready");
    })
    .catch(noop);
  return () => {
    view.container = null;
  };
};
