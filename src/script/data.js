/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-plusplus */
const beautifyData = (response, provinceName = null) => {
  const data = [];
  let tempData = {};
  const obj = response.features;

  if (provinceName == null) {
    obj.forEach((item) => {
      tempData.attributes = item.attributes;
      tempData.geometry = item.geometry;
      data.push(tempData);
      tempData = {};
    });
    return data;
  } if (provinceName.toLowerCase() === 'indonesia') {
    return data;
  }
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].attributes.Provinsi.toLowerCase() === provinceName.toLowerCase()) {
      tempData.attributes = obj[i].attributes;
      tempData.geometry = obj[i].geometry;
      data.push(tempData);
      break;
    }
  }

  return new Promise((resolve, reject) => {
    if (data.length !== 0) {
      resolve(data);
    } else {
      reject('Data tidak ditemukan. Masukkan nama provinsi yang benar');
    }
  });
};

const getData = async (provinceName = null) => {
  const responseData = await fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=82.109%2C-17.552%2C157.519%2C12.820&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelContains&outSR=4326&f=json')
    .then((response) => response.json());

  if (provinceName == null) {
    return beautifyData(responseData, null);
  }
  return beautifyData(responseData, provinceName);
};

const beautifyIndonesia = (response) => {
  const data = {
    confirmed: 0, recovered: 0, death: 0, active: 0,
  };
  const obj = response.features;
  obj.forEach((item) => {
    data.confirmed += item.attributes.Kasus_Posi;
    data.recovered += item.attributes.Kasus_Semb;
    data.death += item.attributes.Kasus_Meni;
    data.active += data.confirmed - data.recovered - data.death;
  });
  return data;
};

const getIndonesiaData = async () => {
  const responseData = await fetch('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&geometry=82.109%2C-17.552%2C157.519%2C12.820&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelContains&outSR=4326&f=json')
    .then((response) => response.json());
  return beautifyIndonesia(responseData);
};

export { getData, getIndonesiaData };
