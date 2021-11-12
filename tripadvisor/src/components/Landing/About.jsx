import styles from './About.module.css'
import Tripadvisor_logoset_solid_green from '../../images/navbar/Tripadvisor_logoset_solid_green.svg'

export const About = () => {
  return (
    <>
      <div className={styles.main_abt}>
        <div className={styles.divider}>
          <div className={styles.first}>
            <h4 className={styles.fh2}>About Tripadvisor</h4>

            <h4 className={styles.childh4}>Explore</h4>
            <h4 className={styles.childh4}>Do Business With Us</h4>
            <h4 className={styles.childh4}>Get The App</h4>
            <h4 className={styles.childh4}>Tripadvisor Sites</h4>
          </div>

          <div className={styles.second}>
            <h4 className={styles.fh2}>Explore</h4>

            <h4 className={styles.childh4}>Write a review</h4>
            <h4 className={styles.childh4}>Add a Place</h4>
            <h4 className={styles.childh4}>Join </h4>
            <h4 className={styles.childh4}>Travellers' Choice</h4>
            <h4 className={styles.childh4}>GreenLeaders</h4>
            <h4 className={styles.childh4}>Help Centre</h4>
            <h4 className={styles.childh4}>Travel Articles</h4>
          </div>

          <div>
            <h4 className={styles.fh2}>Do Business With Us</h4>

            <h4 className={styles.childh4}>Owners & DMO/CVB</h4>
            <h4 className={styles.childh4}>Business Advantage</h4>
            <h4 className={styles.childh4}>Sponsored Placements</h4>
            <h4 className={styles.childh4}>Get The App</h4>
            <h4 className={styles.childh4}>iPhone App</h4>
            <h4 className={styles.childh4}>Android App</h4>
          </div>

          <div>
            <h4 className={styles.fh2}>Tripadvisor Sites</h4>

            <h4 className={styles.childh4}>
              Discover your dream destination with Jetsetter
            </h4>
            <h4 className={styles.childh4}>
              Book the best restaurants with TheFork
            </h4>
            <h4 className={styles.childh4}>
              Book tours and attraction tickets on Viator
            </h4>
            <h4 className={styles.childh4}>
              Read cruise reviews on Cruise Critic
            </h4>
            <h4 className={styles.childh4}>
              Get airline seating charts on Seat Guru
            </h4>
            <h4 className={styles.childh4}>Find vacation rentals on FlipKey</h4>
            <h4 className={styles.childh4}>
              Search for holiday rentals on Holiday Lettings
            </h4>
            <h4 className={styles.childh4}>
              Find a vacation home on Vacation Home Rentals
            </h4>
            <h4 className={styles.childh4}>
              Plan and book your next trip with Reco Trip Designers
            </h4>
          </div>
        </div>

        <div className={styles.sedivider}>
          <div className={styles.sefst}>
            <img
              className={styles.eTrnc}
              src={Tripadvisor_logoset_solid_green}
              alt="Logo"
            />
            <div className={styles.lftdiv}>
              © 2021 TripAdvisor LLC All rights reserved.
            </div>

            <div className={styles.fRtLq}>
              <span className={styles.dTqpp}>
                <span className={styles.djJRy}>
                  <a
                    class="bfQwA _G B- _S _T c G_ P0 ddFHE cnvzr bTBvn"
                    href="https://tripadvisor.mediaroom.com/us-terms-of-use"
                    rel="noopener"
                    target="_self"
                  >
                    <span className={styles.spanWb}>Terms of Use</span>
                  </a>
                </span>
                <span className={styles.djJRy}>
                  <a
                    class="bfQwA _G B- _S _T c G_ P0 ddFHE cnvzr bTBvn"
                    href="https://tripadvisor.mediaroom.com/us-privacy-policy"
                    rel="noopener"
                    target="_self"
                  >
                    <span className={styles.spanWb}>
                      Privacy and Cookies Statement
                    </span>
                  </a>
                </span>
                <span className={styles.djJRy}>
                  <a
                    href="https://tripadvisor.mediaroom.com/us-privacy-policy"
                  >
                    <span className={styles.spanWb}>Cookie consent</span>
                  </a>
                </span>
                <span className={styles.djJRy}>
                  <a
                    class="bfQwA _G B- _S _T c G_ P0 ddFHE cnvzr bTBvn"
                    href="/SiteIndex"
                    rel="noopener"
                    target="_self"
                  >
                    <span className={styles.spanWb}>Site Map</span>
                  </a>
                </span>
                <span className={styles.djJRy}>
                  <a
                    class="bfQwA _G B- _S _T c G_ P0 ddFHE cnvzr bTBvn"
                    href="/pages/serviceEN.html"
                    rel="noopener"
                    target="_self"
                  >
                    <span className={styles.spanWb}>How the site works</span>
                  </a>
                </span>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}
