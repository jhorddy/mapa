//cambiar cordenadas.
let map = L.map("map").setView([-8.6077355, -74.397688], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document
  .getElementById("select-location")
  .addEventListener("change", function (e) {
    let coords = e.target.value.split(",");
    map.flyTo(coords, 12);
  });

// Agregar mapa base
var carto_light = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  { attribution: "©OpenStreetMap, ©CartoDB", subdomains: "abcd", maxZoom: 24 }
);

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light, {
  toggleDisplay: true,
  minimized: false,
  position: "bottomleft",
}).addTo(map);

// Agregar escala
new L.control.scale({ imperial: false }).addTo(map);

// Agregar coordenadas para dibujar una polilinea
var coord_camino = [
  [-5.0348769, -78.671777, 9],
  [-9.0260256, -77.9947609, 9],
  [-13.9924866, -75.5850955],
  [-16.4040513, -71.559654, 14],
  [-13.1630324, -74.2424344],
  [-7.1606286, -78.5864319],
  [-12.0039337, -77.2001195],
  [-13.5019252, -72.0403725],
  [-12.7827868, -75.0576963],
  [-9.8911272, -76.6222275],
  [-14.0837403, -75.8282245],
  [-11.5283198, -75.5163981, 9],
  [-7.7936249, -79.0405974, 9],
  [-6.7059217, -79.9154994, 15],
  [-11.9936306, -77.1208951],
  [-3.7600915, -73.3627961],
  [-11.5547174, -72.984918],
  [-17.1910824, -71.0121789],
  [-10.3116897, -76.5262034],
  [-5.1971674, -80.7356578],
  [-15.8439601, -70.0440565],
  [-11.9836191, -77.1197739],
  [-18.0247961, -70.3065454],
  [-3.5633071, -80.4911337]
];

var camino = L.polyline(coord_camino, {
    color: 'red'
}).addTo(map);

// Agregar un marcador central
var marker_cerro = L.circleMarker(L.latLng(-11.9936306,-77.1208951), {
    radius: 6,
    fillColor: "#ff0000",
    color: "blue",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6,
}).addTo(map); 



        


