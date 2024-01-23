import React, { useState } from "react";
import ContactModal from "./contactmodal.jsx";
// images
import LogoImg from "../assets/images/logo.png";
import Rightarrow from "../assets/images/right_arrowBtn.png";

// styles
import {
  Headerwrapper,
  Logowrapper,
  DBindingwrapper,
  Bindingcontent,
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
          <Bindingcontent>
            <p>unverbindliche Beratung</p>
            <img src={Rightarrow} />
          </Bindingcontent>
        </DBindingwrapper>
        {
          openFirst && <ContactModal openFirst={openFirst} handleModalClose={handleModalClose}/>
        }
        
      </Headerwrapper>
    </>
  );
};

// styled css start

export default Header;
