// import './home.css';
// import './App.css';
// import FirstPage from './home';

import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import './Slider.css'

import casamaria from '../../images/coolplus/casamaria.jpg'
import faena from '../../images/coolplus/faena.jpg'
import faimontkia from '../../images/coolplus/faimontkia.jpg'
import fairmount from '../../images/coolplus/fairmount.jpg'
import meritage from '../../images/coolplus/meritage.jpg'
import portola from '../../images/coolplus/portola.jpg'
import thewilliam from '../../images/coolplus/thewilliam.jpg'
import wailiya from '../../images/coolplus/wailiya.jpg'

const breakPoints = [
  // { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 4,itemsToScroll: 1, pagination: false  },
  // { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  // { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  // { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false },
]

function Mightlike() {
  return (
    <div className="main">
      {/* <FirstPage /> */}
      <div className="sliderwrpaer">
        <div className="corosel rec.rec-arrow:hover">
          <h2 className="browsH2">You might like these </h2>
          <p className="pstyle">Where Tripadvisor Plus members are staying and saving</p>

          <Carousel breakPoints={breakPoints} pagination={false}>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={faena} alt="Appartment" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                Faena Hotel Miami Beach
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">1,833</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $500/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={faimontkia} alt="Resort" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                Fairmont Kea Lani, Maui
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">5,848</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $598/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={fairmount} alt="Villas" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                Fairmont Austin
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">3,430</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $225/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={meritage} alt="Cabins" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                The Meritage Resort and Spa
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">2,583</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $262/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={portola} alt="Cottages" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                Portola Hotel & Spa at Monterey Bay
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">3,757</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $219/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={casamaria} alt="Hotels" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                  Casa Marina Key West, A Waldorf <br/> Astoria Resort
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">9,475</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $225/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img
                  className="browsimg"
                  src={thewilliam}
                  alt="Serviced_appartment"
                />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                The William Vale
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">1,364</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $324/night</div>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={wailiya} alt="Holidayhomes" />
              </div>
              <div className="diver">
                
                <h4 className="subhead">
                Grand Wailea
                </h4>
                <div
                  class="RTVWf o W f u w dYMOQ"
                  aria-label="4.0 of 5 bubbles. 9,475 reviews"
                >
                  <svg
                    class="RWYkj d H0"
                    viewBox="0 0 128 24"
                    width="68"
                    height="12"
                    aria-label=""
                    title=""
                  >
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform=""
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(26 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(52 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z"
                      transform="translate(78 0)"
                    ></path>
                    <path
                      d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12zm0 2a9.983 9.983 0 019.995 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"
                      transform="translate(104 0)"
                    ></path>
                  </svg>
                  <span class="WlYyy diXIH bGusc bQCoY">
                    <span class="cfIVb">8,387</span>
                  </span>
                </div>
                <div class="WlYyy cPsXC dTqpp">from $570/night</div>
              </div>
            </Item>
          </Carousel>
        </div>

        <div></div>
      </div>
    </div>
  )
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export { Mightlike }
