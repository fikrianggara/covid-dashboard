/* eslint-disable import/no-extraneous-dependencies */
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'datatables.net-dt/css/jquery.dataTables.css';
// import 'datatables.net/js/jquery.dataTables.js';
// import 'datatables.net-dt';
import 'datatables.net';
import 'leaflet';
import './styles/style.css';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet.js';
import init from './script/main.js';

document.addEventListener('DOMContentLoaded', init);
