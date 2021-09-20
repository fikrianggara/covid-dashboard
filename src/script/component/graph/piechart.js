class PieChart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <canvas id="pieChart" height=400 width=400></canvas>
        `;
  }
}

customElements.define('pie-chart', PieChart);
