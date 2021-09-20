class TableSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="card container" id='table-section-card'>
            <div class='row' id='table-section-title'>
                <h4>Provincial Table</h4>
            </div>
            <div class='row' id='dt'>
                <div class='col'>
                    <custom-card id='datatable'>
                    </custom-card>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('table-section', TableSection);
