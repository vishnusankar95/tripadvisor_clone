// import './home.css';
// import './App.css';
// import FirstPage from './home';

import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import './Slider.css'

import lasvegas from '../../images/Destinations/lasvegas.jpg'
import cancun from '../../images/Destinations/cancun.jpg'
import london from '../../images/Destinations/london.jpg'
import maui from '../../images/Destinations/maui.jpg'
import newyork from '../../images/Destinations/newyork.jpg'
import orlando from '../../images/Destinations/orlando.jpg'
import punta from '../../images/Destinations/punta.jpg'
import sedona from '../../images/Destinations/sedona.jpg'
import yellowstone from '../../images/Destinations/yellowstone.jpg'
import yosemite from '../../images/Destinations/yosemite.jpg'

const breakPoints = [
  // { width: 1, itemsToShow: 4 },
  { width: 550, itemsToShow: 4,itemsToScroll: 4, pagination: false  },
  // { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  // { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
  // { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false },
]

function Destination() {
  return (
    <div className="main">
      {/* <FirstPage /> */}
      <div className="sliderwrpaer">
        <div className="corosel_Destination rec.rec-arrow:hover">
          <h2 className="browsH2_Destination">Destinations travellers love</h2>

          <Carousel breakPoints={breakPoints} pagination={false}>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={yellowstone} alt="Appartment" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Yellowstone <br/> National Park, WY
                </h4>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={sedona} alt="Resort" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Sedona, AZ
                </h4>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={punta} alt="Villas" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Punta Cana, <br/> Dominican <br/> Republic
                </h4>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={lasvegas} alt="Cabins" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Las Vegas, NV
                </h4>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={yosemite} alt="Cottages" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Yosemite National<br/>Park, CA
                </h4>
              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={newyork} alt="Hotels" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                New York City, NY
                </h4>

              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img
                  className="browsimg"
                  src={london}
                  alt="Serviced_appartment"
                />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                London, UK
                </h4>

              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={cancun} alt="Holidayhomes" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Cancun, Mexico
                </h4>

              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={maui} alt="Holidayhomes" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Maui, HI
                </h4>

              </div>
            </Item>

            <Item>
              <div className="divimg">
                <img className="browsimg" src={orlando} alt="Holidayhomes" />
              </div>
              <div className="diver">
                
                <h4 className="subhead_Destination">
                Orlando, FL
                </h4>

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
export { Destination }
