class CustomAlert extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert" id='custom-alert'>
Data ini berasal dari <a href="https://bnpb-inacovid19.hub.arcgis.com" class="alert-link">bnpb-inacovid19.hub.arcgis.com</a>. Terakhir diperbaharui pada 4 Februari 2021.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  }
}

customElements.define('custom-alert', CustomAlert);
