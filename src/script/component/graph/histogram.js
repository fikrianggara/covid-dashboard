class BarChart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <canvas id="barChart" width="400" height="400"></canvas>
        `;
  }
}

customElements.define('bar-chart', BarChart);
