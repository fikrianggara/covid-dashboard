class Map extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div id='mapid'>
        </div>
        `;
  }
}

customElements.define('map-canvas', Map);
