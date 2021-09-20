import './card.js';

const provinsi = 'Indonesia';
class GraphSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="card container" id='graph-section-card'>
            <div class='row' id='graph-section-title'>
                <h4>Provincial Case Proportion Chart</h4>
                <h5 id='provinsi'>${provinsi}</h5>
            </div>
            <div class='row' id='graphs'>
                <div class='col'>
                    <custom-card id='graph1'>
                    </custom-card>
                </div>
                <div class='col'>
                    <custom-card id='graph2'>
                    </custom-card>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('graph-section', GraphSection);
