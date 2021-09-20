class Summary extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="container text-center" id='summary'> 

                <h4>Cases Summary</h4>
                <div class='row'>
                        <div class="col" id='summary-province-confirmed'>
                            <h5>Confirmed</h5>
                            <h5>4188529</h5>
                        </div>
                        <div class="col" id='summary-province-death'>
                        <h5>Death</h5>
                            <h5>140323</h5>
                        </div>
                </div>
                <div class='row'>
                    <div class="col" id='summary-province-active'>
                    <h5>Active</h5>
                        <h5>${4188529 - 3983140 - 140323}</h5>
                    </div>
                    <div class="col" id='summary-province-recovered'>
                        <h5>Recovered</h5>
                        <h5>3983140</h5>
                    </div>
                </div>
            </div>
    `;
  }
}

customElements.define('case-summary', Summary);
