import React from "react";
import styled from "styled-components";

// images
import LogoImg from "../assets/images/logo.png";
import BindingbtnImg from "../assets/images/bindingBtn.png";
import Rightarrow from "../assets/images/right_arrowBtn.png";

// styles
import {
  Headerwrapper,
  Logowrapper,
  // Bindingbtn,
  DBindingwrapper,
  Bindingcontent,
} from "../../src/assets/style.jsx";

const header = () => {
  return (
    <>
      <Headerwrapper>
        <>
          <Logowrapper>
            <img src={LogoImg} alt="logo" />
          </Logowrapper>
          {/* <Bindingbtn>
            <img src={BindingbtnImg} alt="bindingImg" />
          </Bindingbtn> */}
          <DBindingwrapper>
            <Bindingcontent>
              <p>unverbindliche Beratung</p>
              <img src={Rightarrow} />
            </Bindingcontent>
          </DBindingwrapper>
        </>
      </Headerwrapper>
    </>
  );
};

// styled css start

export default header;
