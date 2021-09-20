/* eslint-disable eqeqeq */
import { getIndonesiaData } from '../data';

/* eslint-disable no-undef */
const renderPieChart = async (datas = []) => {
  document.getElementById('pieChart').remove();
  const newChart = document.createElement('canvas');
  newChart.setAttribute('id', 'pieChart');
  document.getElementsByTagName('pie-chart')[0].appendChild(newChart);
  let usedData = {};
  if (datas.length == 0) {
    usedData = await getIndonesiaData();
  } else {
    datas.forEach((item) => {
      usedData.death = item.attributes.Kasus_Meni;
      usedData.recovered = item.attributes.Kasus_Semb;
      usedData.confirmed = item.attributes.Kasus_Posi;
    });
  }
  const { confirmed } = usedData;
  const deathPercentage = Math.round((usedData.death / confirmed) * 100 * 100) / 100;
  const recoveredPercentage = Math.round((usedData.recovered / confirmed) * 100 * 100) / 100;
  const activePercentage = Math.round(
    ((confirmed - usedData.death - usedData.recovered) / confirmed) * 100 * 100,
  ) / 100;
  const data = {
    labels: [
      `Death (${deathPercentage}%)`, // meninggal
      `Confirmed (${confirmed})`, // konfirmasi
      `Recovered (${recoveredPercentage}%)`,
      `active (${activePercentage}%)`, // sembuh
    ],
    datasets: [{
      label: 'Proporsi Kasus',
      data: [usedData.death,
        usedData.confirmed,
        usedData.recovered,
        usedData.confirmed - usedData.death - usedData.recovered],
      backgroundColor: [
        'rgb(248, 122, 122)',
        'rgb(79, 113, 236)',
        'rgb(124, 248, 122)',
        'rgb(248, 235, 122)',
      ],
      hoverOffset: 4,
    }],
  };
  const config = {
    type: 'doughnut',
    data,
  };
  const graph = document.getElementById('pieChart').getContext('2d');
  const myChart = new Chart(graph, config);
  myChart.resize(400, 400);
};

const renderSummaryCase = async (datas = []) => {
  let usedData = {};
  if (datas.length == 0) {
    usedData = await getIndonesiaData();
  } else {
    datas.forEach((item) => {
      usedData.death = item.attributes.Kasus_Meni;
      usedData.recovered = item.attributes.Kasus_Semb;
      usedData.confirmed = item.attributes.Kasus_Posi;
    });
  }
  const confirmedDOM = document.getElementById('summary-province-confirmed').children[1];
  const deathDOM = document.getElementById('summary-province-death').children[1];
  const recoveredDOM = document.getElementById('summary-province-recovered').children[1];
  const activeDOM = document.getElementById('summary-province-active').children[1];

  confirmedDOM.innerText = usedData.confirmed.toString();
  deathDOM.innerText = usedData.death.toString();
  recoveredDOM.innerText = usedData.recovered.toString();
  activeDOM.innerText = (usedData.confirmed - usedData.death - usedData.recovered).toString();
};

export { renderPieChart, renderSummaryCase };
