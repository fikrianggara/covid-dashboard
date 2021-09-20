/* eslint-disable no-undef */
import $ from 'jquery';
import { getData, getIndonesiaData } from './data.js';
import './component/alert.js';
import './component/navbar.js';
import './component/graph-section.js';
import './component/card.js';
import './component/graph/piechart.js';
import '../../node_modules/chart.js/dist/chart.js';
import './component/search.js';
import { renderPieChart, renderSummaryCase } from './render/piechart.js';
import './component/case_summary.js';
import './component/map-section.js';
import './component/map/map.js';
import createMap from './render/map.js';
import './component/table-section.js';
import { createTable, populateTable } from './render/table.js';
import './component/footer.js';

window.$ = $;

const init = async () => {
  window.getData = getData;
  window.getIndonesiaData = getIndonesiaData;
  try {
    window.data = await getData();
    window.IndonesiaData = await getIndonesiaData();
  } catch (e) {
    document.getElementsByTagName('custom-alert')[0].remove();
    const errmessage = document.createElement('custom-alert');
    document.getElementsByTagName('main')[0].insertBefore(errmessage,
      document.getElementsByTagName('main')[0].firstChild);
    document.getElementById('custom-alert').innerHTML = `${e} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
  }

  const clarification = document.createElement('custom-alert');
  document.getElementsByTagName('main')[0].appendChild(clarification);

  const navbar = document.createElement('custom-navbar');
  document.getElementsByTagName('header')[0].appendChild(navbar);

  const searchBar = document.createElement('search-bar');
  document.getElementsByTagName('main')[0].appendChild(searchBar);

  const graphSection = document.createElement('graph-section');
  document.getElementsByTagName('main')[0].appendChild(graphSection);

  const summary = document.createElement('case-summary');
  const graph1 = document.getElementById('graph1');
  graph1.firstElementChild.firstElementChild.appendChild(summary);

  const graph2 = document.getElementById('graph2');
  const piechart = document.createElement('pie-chart');

  graph2.firstElementChild.firstElementChild.appendChild(piechart);
  renderPieChart();
  renderSummaryCase();

  const mapSection = document.createElement('map-section');
  document.getElementsByTagName('main')[0].appendChild(mapSection);

  const map = document.createElement('map-canvas');
  const mapId = document.getElementById('map');

  mapId.firstElementChild.firstElementChild.appendChild(map);
  createMap(data);

  const tableSection = document.createElement('table-section');
  document.getElementsByTagName('main')[0].appendChild(tableSection);
  const datatable = document.getElementById('datatable');
  datatable.firstElementChild.firstElementChild.appendChild(createTable());
  populateTable(data);
  $('#data-table').DataTable();

  const footerSection = document.createElement('footer-section');
  document.getElementsByTagName('footer')[0].appendChild(footerSection);

  const searchButton = $('#search-button');
  searchButton.on('click', async () => {
    const searchValue = $('#province-input').val();
    try {
      const searchResult = await getData(searchValue);
      renderPieChart(searchResult);
      renderSummaryCase(searchResult);
      if (searchResult.length !== 0) {
        document.getElementById('provinsi').innerText = searchResult[0].attributes.Provinsi.toString();
      } else {
        document.getElementById('provinsi').innerText = 'Indonesia';
      }
    } catch (e) {
      document.getElementsByTagName('custom-alert')[0].remove();
      const errmessage = document.createElement('custom-alert');
      document.getElementsByTagName('main')[0].insertBefore(errmessage,
        document.getElementsByTagName('main')[0].firstChild);
      document.getElementById('custom-alert').innerHTML = `${e} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
    }
  });
};

export default init;
