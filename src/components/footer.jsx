import React from "react";

// styles
import {
  Column,
  Footersection,
  Row,
  Footerinfo,
  Footerform,
  InoutField,
  Submitbtn,
  Checkbox,
  Checkmark,
  Quicklinks,
  Fotterbottom,
  Ftcontactseciton,
  Customefooter,
  Customrow,
  Customcolumn,
  Footermenu,
  Desktopftbottom,
  Footerrow,
  Fbcolumn1,
  Fbcolumn2,
  Fbcolumn3,
  Mobileftbottom,
} from "../../src/assets/style.jsx";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Footersection>
        <Customefooter>
          <Column className="col-md-7 col-12">
            <Footerinfo>
              <h2> Beratung anfragen </h2>
              <p>
                Wir melden uns bei Ihnen<span>!</span>
                <br /> Lassen Sie sich kostenlos und unverbindlich beraten.
              </p>
              <Footerform>
                <Customrow>
                  <Customcolumn className="col-md-8 col-12">
                    <Row className="customRow">
                      <Column className="col-lg-12 col-sm-6">
                        <InoutField>
                          <input type="text" placeholder="Vorname" />
                        </InoutField>
                      </Column>
                      <Column className="col-lg-12 col-sm-6">
                        <InoutField>
                          <input type="text" placeholder="Nachname" />
                        </InoutField>
                      </Column>
                    </Row>
                    <Row>
                      <Column className="col-12">
                        <InoutField className="mt-20">
                          <input type="text" placeholder="Telefon" />
                        </InoutField>
                      </Column>
                    </Row>
                  </Customcolumn>
                  <Submitbtn>Absenden</Submitbtn>
                </Customrow>
              </Footerform>
              <Checkbox>
                <label class="checkBox">
                  Ich akzeptiere die geltenden Datenschutzbestimmungen.
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </Checkbox>
            </Footerinfo>
          </Column>
          <Footermenu>
            <Quicklinks>
              <ul>
                <li> Home </li>
                <li> Über uns </li>
                <li> Datenschutz </li>
                <li> Impressum </li>
              </ul>
            </Quicklinks>
            <Ftcontactseciton>
              <h4>
                Wicker <span>&</span> Partners GmbH
              </h4>
              <p>Standort Hamburg </p>
              <h4>
                Hahntrapp 1 <br /> 20<span>4</span>57 Hamburg
              </h4>
              <h4>
                <span> +</span>
                <span>(</span> <span>4</span>9 <span>)</span> 173 97 68{" "}
                <span>4</span>09{" "}
              </h4>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path
                  d="M15.0014 10.75C13.8743 10.75 12.7933 11.1978 11.9962 11.9948C11.1992 12.7918 10.7514 13.8728 10.7514 15C10.7514 16.1272 11.1992 17.2082 11.9962 18.0052C12.7933 18.8022 13.8743 19.25 15.0014 19.25C16.1286 19.25 17.2096 18.8022 18.0066 18.0052C18.8037 17.2082 19.2514 16.1272 19.2514 15C19.2514 13.8728 18.8037 12.7918 18.0066 11.9948C17.2096 11.1978 16.1286 10.75 15.0014 10.75ZM15.0014 7.91668C16.88 7.91668 18.6817 8.66295 20.0101 9.99134C21.3385 11.3197 22.0848 13.1214 22.0848 15C22.0848 16.8786 21.3385 18.6803 20.0101 20.0087C18.6817 21.3371 16.88 22.0833 15.0014 22.0833C13.1228 22.0833 11.3211 21.3371 9.99275 20.0087C8.66437 18.6803 7.91809 16.8786 7.91809 15C7.91809 13.1214 8.66437 11.3197 9.99275 9.99134C11.3211 8.66295 13.1228 7.91668 15.0014 7.91668ZM24.2098 7.56251C24.2098 8.03216 24.0232 8.48258 23.6911 8.81468C23.359 9.14677 22.9086 9.33334 22.4389 9.33334C21.9693 9.33334 21.5189 9.14677 21.1868 8.81468C20.8547 8.48258 20.6681 8.03216 20.6681 7.56251C20.6681 7.09286 20.8547 6.64244 21.1868 6.31034C21.5189 5.97825 21.9693 5.79168 22.4389 5.79168C22.9086 5.79168 23.359 5.97825 23.6911 6.31034C24.0232 6.64244 24.2098 7.09286 24.2098 7.56251ZM15.0014 3.66668C11.4966 3.66668 10.9243 3.67659 9.29368 3.74884C8.18301 3.80126 7.43784 3.95001 6.74651 4.21918C6.16797 4.43159 5.64493 4.77205 5.21651 5.21509C4.7731 5.64349 4.43218 6.1665 4.21918 6.74509C3.95001 7.43926 3.80126 8.18301 3.75026 9.29226C3.67659 10.8563 3.66668 11.4031 3.66668 15C3.66668 18.5063 3.67659 19.0772 3.74884 20.7078C3.80126 21.817 3.95001 22.5636 4.21776 23.2535C4.45859 23.8698 4.74193 24.3132 5.21226 24.7835C5.68968 25.2595 6.13309 25.5443 6.74226 25.7794C7.44209 26.05 8.18726 26.2002 9.29226 26.2512C10.8563 26.3248 11.4031 26.3333 15 26.3333C18.5063 26.3333 19.0772 26.3234 20.7078 26.2512C21.8156 26.1988 22.5608 26.05 23.2535 25.7823C23.8315 25.5688 24.3543 25.2285 24.7835 24.7863C25.2609 24.3103 25.5457 23.8669 25.7808 23.2563C26.05 22.5593 26.2002 21.8142 26.2512 20.7063C26.3248 19.1438 26.3333 18.5955 26.3333 15C26.3333 11.4952 26.3234 10.9228 26.2512 9.29226C26.1988 8.18443 26.0486 7.43643 25.7808 6.74509C25.5673 6.16712 25.227 5.64432 24.7849 5.21509C24.3567 4.77146 23.8337 4.4305 23.2549 4.21776C22.5608 3.94859 21.8156 3.79984 20.7078 3.74884C19.1452 3.67518 18.5983 3.66668 15 3.66668M15 0.833344C18.8491 0.833344 19.3293 0.84751 20.8409 0.918343C22.3483 0.989177 23.3768 1.22576 24.2792 1.57709C25.2142 1.93693 26.0018 2.42426 26.7895 3.21051C27.5099 3.9187 28.0673 4.77534 28.4229 5.72084C28.7728 6.62326 29.0108 7.65176 29.0817 9.16051C29.1483 10.6707 29.1667 11.1509 29.1667 15C29.1667 18.8491 29.1525 19.3293 29.0817 20.8395C29.0108 22.3483 28.7728 23.3753 28.4229 24.2792C28.0683 25.2252 27.5107 26.082 26.7895 26.7895C26.0811 27.5096 25.2245 28.067 24.2792 28.4229C23.3768 28.7728 22.3483 29.0108 20.8409 29.0817C19.3293 29.1483 18.8491 29.1667 15 29.1667C11.1509 29.1667 10.6707 29.1525 9.15909 29.0817C7.65176 29.0108 6.62468 28.7728 5.72084 28.4229C4.77497 28.068 3.91817 27.5105 3.21051 26.7895C2.49004 26.0814 1.93262 25.2247 1.57709 24.2792C1.22576 23.3768 0.989177 22.3483 0.918343 20.8395C0.850343 19.3293 0.833344 18.8491 0.833344 15C0.833344 11.1509 0.84751 10.6707 0.918343 9.16051C0.989177 7.65176 1.22576 6.62468 1.57709 5.72084C1.93159 4.77476 2.48915 3.91788 3.21051 3.21051C3.91838 2.48975 4.77512 1.93229 5.72084 1.57709C6.62326 1.22576 7.65034 0.989177 9.15909 0.918343C10.6721 0.85176 11.1523 0.833344 15.0014 0.833344"
                  fill="#1E2941"
                />
              </svg>
            </Ftcontactseciton>
          </Footermenu>
        </Customefooter>
        <Desktopftbottom>
          <Fotterbottom>
            <Footerrow>
              <Fbcolumn1>
                {" "}
                <p> Alle Rechte vorbehalten. </p>
              </Fbcolumn1>
              <Fbcolumn2>
                <p>
                  © 202<span>4</span> Wicker <span> &</span> Partners GmbH{" "}
                </p>
              </Fbcolumn2>
              <Fbcolumn3 onClick={scrollToTop}>
                <p>
                  <span>nach oben</span>
                  <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
                    <path
                      d="M8 18.5L8 2M8 2L1 10M8 2L16 10"
                      stroke="#1D273E"
                      stroke-width="2"
                    />
                  </svg>
                </p>
              </Fbcolumn3>
            </Footerrow>
          </Fotterbottom>
        </Desktopftbottom>
        <Mobileftbottom>
          <Footerrow>
            <Fbcolumn1>
              <p> Alle Rechte vorbehalten. </p>
            </Fbcolumn1>
            <Fbcolumn3 onClick={scrollToTop}>
              <p>
                nach oben
                <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
                  <path
                    d="M8 18.5L8 2M8 2L1 10M8 2L16 10"
                    stroke="#1D273E"
                    stroke-width="2"
                  />
                </svg>{" "}
              </p>
            </Fbcolumn3>
          </Footerrow>
          <Fbcolumn2>
            <p>
              © 202<span>4</span> Wicker <span> &</span> Partners GmbH{" "}
            </p>
          </Fbcolumn2>
        </Mobileftbottom>
      </Footersection>
    </>
  );
};

export default Footer;
