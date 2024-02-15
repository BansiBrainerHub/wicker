import React, { useState } from "react";
import Select from "react-dropdown-select";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';


// styles
import {
  Customemodal,
  Checkbox,
  Customemodalrow,
  Customemodalgroup,
  Customemodalgroup1,
  Contactmodalwrapper,
  Modalbtn,
} from "../assets/style.jsx";

const ContactModal = ({ openFirst, handleModalClose }) => {
  const options = [
    {
      value: 1,
      label: "8:00-11:00 Uhr",
    },
    {
      value: 2,
      label: "11:00-15:00 Uhr",
    },
  ];
  return (
    <>
      <Contactmodalwrapper>
        <Modal open={openFirst} onClose={handleModalClose} center>
          <Customemodal>
            <h2>KONTAKT</h2>
            <Customemodalrow>
              <Customemodalgroup>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Vor-und Nachname"
                ></input>
              </Customemodalgroup>
              <Customemodalgroup>
                <p>
                  {" "}
                  Deine Erreichbarkeit{" "}
                  
                  <a
                      data-tooltip-id="my-tooltip" data-trigger="hover"
                      data-tooltip-content="Wähle ein Zeitfenster, in dem wir Dich erreichen Können."
                      data-tooltip-place="top"
                    >
                    <span>
                    {" "}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M9.99984 1.6665C8.35166 1.6665 6.7405 2.15525 5.37009 3.07092C3.99968 3.9866 2.93158 5.28809 2.30084 6.81081C1.67011 8.33353 1.50509 10.0091 1.82663 11.6256C2.14817 13.2421 2.94185 14.727 4.10728 15.8924C5.27272 17.0578 6.75758 17.8515 8.37409 18.173C9.9906 18.4946 11.6662 18.3296 13.1889 17.6988C14.7116 17.0681 16.0131 16 16.9288 14.6296C17.8444 13.2592 18.3332 11.648 18.3332 9.99984C18.3332 8.90549 18.1176 7.82186 17.6988 6.81081C17.28 5.79976 16.6662 4.8811 15.8924 4.10728C15.1186 3.33346 14.1999 2.71963 13.1889 2.30084C12.1778 1.88205 11.0942 1.6665 9.99984 1.6665ZM10.8332 13.3332C10.8332 13.5542 10.7454 13.7661 10.5891 13.9224C10.4328 14.0787 10.2209 14.1665 9.99984 14.1665C9.77883 14.1665 9.56687 14.0787 9.41058 13.9224C9.2543 13.7661 9.16651 13.5542 9.16651 13.3332V9.1665C9.16651 8.94549 9.2543 8.73353 9.41058 8.57725C9.56687 8.42097 9.77883 8.33317 9.99984 8.33317C10.2209 8.33317 10.4328 8.42097 10.5891 8.57725C10.7454 8.73353 10.8332 8.94549 10.8332 9.1665V13.3332ZM9.99984 7.49984C9.83502 7.49984 9.67391 7.45096 9.53686 7.3594C9.39982 7.26783 9.29301 7.13768 9.22994 6.98541C9.16687 6.83314 9.15036 6.66558 9.18252 6.50393C9.21467 6.34228 9.29404 6.19379 9.41058 6.07725C9.52713 5.96071 9.67561 5.88134 9.83727 5.84918C9.99892 5.81703 10.1665 5.83353 10.3187 5.8966C10.471 5.95968 10.6012 6.06649 10.6927 6.20353C10.7843 6.34057 10.8332 6.50169 10.8332 6.6665C10.8332 6.88752 10.7454 7.09948 10.5891 7.25576C10.4328 7.41204 10.2209 7.49984 9.99984 7.49984Z"
                        fill="#808080"
                      />
                    </svg>{" "}
                  </span>
                  </a>  
                  <Tooltip id="my-tooltip" className="custom-tooltip"/>    
                </p>
              </Customemodalgroup>
            </Customemodalrow>
            <Customemodalrow>
              <Customemodalgroup>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefonnummer"
                ></input>
              </Customemodalgroup>
              <Customemodalgroup className="form-group">
                <Select options={options} className="custom-dropdown" />
              </Customemodalgroup>
            </Customemodalrow>
            <Customemodalrow>
              <Customemodalgroup1>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ihre Mailadresse"
                ></input>
              </Customemodalgroup1>
            </Customemodalrow>
            <Customemodalrow>
              <Customemodalgroup1>
                <textarea
                  className="text_control"
                  rows="5"
                  cols="50"
                  placeholder="Nachricht"
                ></textarea>
              </Customemodalgroup1>
            </Customemodalrow>
            <Customemodalrow>
              <Customemodalgroup1>
                <div className="modalcheckbox">
                  <Checkbox>
                    <label class="checkBox">
                      Ich stimme einer Kontaltaufnahme durch Wicker & Partner zu
                      und bin damit einverstanden, dass meine Daten nur für
                      diesen Zweck weltergeleltet werden.
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </Checkbox>
                </div>
              </Customemodalgroup1>
            </Customemodalrow>
            <Customemodalrow>
              <Customemodalgroup1>
                <div className="modalcheckbox">
                  <Checkbox>
                    <label class="checkBox">
                      Ich habe die AGB und Datensechutzbestimmungen gelesen und
                      akzeptlert.
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </Checkbox>
                </div>
              </Customemodalgroup1>
            </Customemodalrow>
            <Modalbtn>Absenden</Modalbtn>
          </Customemodal>
        </Modal>
      </Contactmodalwrapper>
    </>
  );
};

export default ContactModal;
