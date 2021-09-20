class Search extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="card container" id='searchBar'>
    <div class="d-flex justify-content-center">
        <input class="form-control me-2" type="search" placeholder="ex: Jambi" aria-label="Search" id='province-input'>
        <button class="btn btn-outline-success" type="submit" id='search-button'>Search</button>
      </div>
    </div>   
      `;
  }
}

customElements.define('search-bar', Search);
