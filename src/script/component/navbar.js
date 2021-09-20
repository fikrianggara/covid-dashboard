class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container" id="navbar-container">
                    
                        <div>
                        <a class="navbar-brand h1" href="#">Indonesian Covid-19 Tracker</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#table-section-card">Provincial Case Table</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#map-section-card">Indonesia's Covid Distribution</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#graph-section-card">Indonesia's Province Data</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
        `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
