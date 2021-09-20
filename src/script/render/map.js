/* eslint-disable no-undef */
import L from 'leaflet';

let mymap;
const totalCase = 3989060;

function addPoint(data) {
  let x;
  let y;
  const obj = data;
  obj.forEach((item) => {
    if (item.attributes.Provinsi.toLowerCase() === 'indonesia') {
      return;
    }
    x = item.geometry.y;
    y = item.geometry.x;
    let radius = 30;
    if (window.innerWidth < 700) {
      radius = 15;
    }
    const circle = L.circleMarker([x, y], {
      color: 'red',
      fillColor: '#F87A7A',
      fillOpacity: (item.attributes.Kasus_Posi / totalCase) * 100,
      radius,
    }).addTo(mymap);
    circle.bindPopup(`
                    <table class='table'>
                        <tbody>
                            <tr>
                                <th>Provinsi</th>
                                <td>${item.attributes.Provinsi}</td>
                            </tr>
                            <tr>
                                <th>Terkonfirmasi</th>
                                <td>${item.attributes.Kasus_Posi}</td>
                            </tr>
                            <tr>
                                <th>Meninggal</th>
                                <td>${item.attributes.Kasus_Meni}</td>
                            </tr>
                            <tr>
                                <th>Sembuh</th>
                                <td>${item.attributes.Kasus_Semb}</td>
                            </tr>
                        </tbody>
                    </table>
                    `);
  });
  return obj;
}

const createMap = (data) => {
  let zoom = 5;
  if (window.innerWidth < 700) {
    zoom = 4;
  }
  mymap = L.map('mapid').setView([-1.7893, 118.9213], zoom, L.CRS.EPSG4326);
  L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    minZoom: 0,
    maxZoom: 22,
    subdomains: 'abcd',
    accessToken: 'gErD6A4aSDafF8Zg9EFMbQT7jli9qeZSbtpyEu1sdgcOkigY2wcZqeeeGcsNtbgE',
  }).addTo(mymap);
  addPoint(data);
};

export default createMap;
