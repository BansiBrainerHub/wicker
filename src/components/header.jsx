import React, { useState } from "react";
import ContactModal from "./contactmodal.jsx";
// images
import LogoImg from "../assets/images/logo.svg";
import Rightarrow from "../assets/images/right_arrowBtn.png";

// styles
import {
  Headerwrapper,
  Logowrapper,
  DBindingwrapper,
  DBindingcontent,
} from "../assets/style.jsx";

const Header = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const handleModalClose = () => {
    setOpenFirst(false);
  };
  return (
    <>
      <Headerwrapper>
        <Logowrapper>
          <img src={LogoImg} alt="logo" />
        </Logowrapper>
        <DBindingwrapper onClick={() => setOpenFirst(true)}>
          <DBindingcontent>
            <p>unverbindliche Beratung</p>
            {/* <p>
              non<span>-</span>binding advice
            </p> */}
            <img src={Rightarrow} />
          </DBindingcontent>
        </DBindingwrapper>
        {openFirst && (
          <ContactModal
            openFirst={openFirst}
            handleModalClose={handleModalClose}
          />
        )}
      </Headerwrapper>
    </>
  );
};

// styled css start

export default Header;
