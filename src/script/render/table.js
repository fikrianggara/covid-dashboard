const createTable = () => {
  const container = document.createElement('div');
  container.classList.add('table-responsive');

  const table = document.createElement('table');
  table.setAttribute('id', 'data-table');
  table.classList.add('display', 'responsive', 'hover');
  table.innerHTML = `
        <thead>
            <tr>
                <th>Province Code</th>
                <th>Province</th>
                <th>Confirmed</th>
                <th>Death</th>
                <th>Active</th>
                <th>Recovered</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
  `;
  container.appendChild(table);

  return container;
};
const populateTable = (data) => {
  const baris = document.getElementById('data-table').children[1];
  data.forEach((item) => {
    const newRow = document.createElement('tr');
    if (item.attributes.Kode_Provi === 0) {
      return;
    }
    newRow.innerHTML = `
                <td>${item.attributes.Kode_Provi}</td>
                <td>${item.attributes.Provinsi}</td>
                <td>${item.attributes.Kasus_Posi}</td>
                <td>${item.attributes.Kasus_Meni}</td>
                <td>${item.attributes.Kasus_Posi - item.attributes.Kasus_Meni - item.attributes.Kasus_Semb}</td>
                <td>${item.attributes.Kasus_Semb}</td>
    `;
    baris.appendChild(newRow);
  });
};

export { createTable, populateTable };
