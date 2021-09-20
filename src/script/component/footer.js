class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class='container-fluid' id='footer'>
                <h6>created by fikri septrian anggara</h6>
            </div>
        `;
  }
}

customElements.define('footer-section', Footer);
