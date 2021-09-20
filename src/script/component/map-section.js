class MapSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="card container" id='map-section-card'>
            <div class='row' id='map-section-title'>
                <h4>Indonesian Covid Distribution</h4>
            </div>
            <div class='row' id='graphs'>
                <div class='col'>
                    <custom-card id='map'>
                    </custom-card>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('map-section', MapSection);
