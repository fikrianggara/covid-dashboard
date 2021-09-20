class CustomCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
            </div>
        </div>
        `;
  }
}

customElements.define('custom-card', CustomCard);

export default CustomCard;
