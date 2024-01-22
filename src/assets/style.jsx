import styled from "styled-components";

// images

import BindingbtnImg from "../assets/images/bindingBtn.png";
import Arrow1 from "../assets/images/arrow1.png";
import Arrow2 from "../assets/images/arrow2.png";
import ArrowBG from "../assets/images/arrow-bg.png";

export const Media = {
  xxl: "@media(max-width:1600px)",
  xl: "@media(max-width:1440px)",
  lg: "@media(max-width:1200px)",
  md: "@media(max-width:992px)",
  sm: "@media(max-width:768px)",
  ss: "@media(max-width:640px)",
  xs: "@media(max-width:480px)",
  xxs: "@media(max-width:404px)",
};

export const MainIndexpage = styled.div`
margin-bottom:20px;
`;

export const Headerwrapper = styled.div` 
  position: relative;
  padding-left: 85px;
  padding-right: 85px;
  padding-top: 64px;
  ${Media.md} {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  // padding-left: 85px;
  // padding-right: 85px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const DBindingwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 0px;
  padding-top: 80px;
  transition: 0.4s all ease-in-out;
  background: url(${BindingbtnImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 42px;
  padding-top: 82px;
  ${Media.ss} {
    padding: 32px;
    padding-top: 32px;
  }
  p {
    color: #fff;
    font-size: 25px;
    font-weight: 300;
  }
  img {
    width: 40px;
    display: block;
    margin: 0 0 0 auto;
  }
  &:hover {
    transform: scale(1.05);
    transition: 0.4s all ease-in-out;
    cursor: pointer;
  }
`;
export const Logowrapper = styled.div`
  width: 140px;
`;

export const Bindingbtn = styled.div`
  position: absolute;
  right: 0;
  max-width: 320px;
  width: 100%;
  top: 0;
  z-index: 9;
`;

// banner css start

export const Headerbanner = styled.div`
  margin-top: 40px;
  ${Media.sm} {
    margin-top: 80px;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
  ${Media.sm} {
    flex-wrap: wrap;
  }
`;
export const Column = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

export const Topbannerimg = styled.div`
  max-width: 660px;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
  ${Media.lg} {
    max-width: 500px;
  }
  ${Media.md} {
    max-width: 400px;
  }
  ${Media.sm} {
    max-width: 100%;
  }
`;
export const Bannerheading = styled.div`
  position: relative;
  margin-bottom: -32px;
  h2 {
    font-size: 90px;
    line-height: 88px;
    font-weight: 500;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "visbycf", sans-serif;
    ${Media.lg} {
      font-size: 68px;
    line-height: 78px;
    }
    ${Media.md} {
      font-size: 48px;
    line-height: 48px;
    }
    ${Media.sm} {
      font-size: 36px;
    line-height: 48px;
    }
    ${Media.ss} {
      font-size: 32px;
    line-height: 35px;
    }
  }
  ${Media.lg} {
    margin-left:90px;
    margin-right:90px;
    margin-bottom: -18px;
  }
  ${Media.sm} {
    max-width: 500px;
    margin: 0 auto -20px;
  }
  ${Media.ss} {
    max-width: 500px;
    margin: 0 auto -16px;
  }
  

`;
export const Desktopview = styled.div`
${Media.sm} {
 display:none;
}
`;
export const Mobileview = styled.div`
display:none;
${Media.sm} {
 display:block;
 padding-left: 30px;
    padding-right: 30px;
    max-width: 700px;
    margin: 0 auto;
}
${Media.ss} {
  padding-left: 15px;
     padding-right: 15px;
 }
`;

export const MobilebannerContent = styled.div`
max-width:700px;
margin:20px auto 0;
.justif_content {
  justify-content:space-between;
  align-items: center;
}
`;


export const Bannerleftcontent = styled.div`
  max-width: 188px;
  width: 100%;
  margin-right: 30px;
  ${Media.lg} {
    margin-right: 20px;
  }
  ${Media.md} {
    margin-right: -19px;
  }
  ${Media.sm} {
    margin-right: 0px;
  }

  p {
    font-size: 20px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
    }
    ${Media.lg} {
      font-size: 18px;
      max-width: 150px;
    }
    ${Media.md} {
      font-size: 16px;
    }
  }
  
`;
export const Bannerrightcontent = styled.div`
  max-width: 145px;
  width: 100%;
  margin-left: 70px;
  p {
    font-size: 20px;
    font-family: "visbycf", sans-serif;
    ${Media.lg} {
      font-size: 18px;
      
    }
    ${Media.md} {
      font-size: 16px;
    }
  }
  ${Media.lg} {
    margin-left: 40px;
  }
  ${Media.md} {
    margin-left: -19px;
  }
  ${Media.sm} {
    margin-left: 0px;
  }
`;

// about css start

export const Containerfluid = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 110px;
  ${Media.lg} {
    margin-left: 70px;
  }
  ${Media.md} {
    margin-left: 50px;
  }
  ${Media.sm} {
    margin-left: 30px;
  }
`;

export const Aboutwrapper = styled.div`
  margin-top: 120px;
`;

export const Aboutheading = styled.div`
  margin-right: 150px;
  ${Media.lg} {
    margin-right: 100px;
  }
  ${Media.md} {
    margin-right: 65px;
  }
  ${Media.sm} {
    margin-right: 25px;
  }
  h3 {
    font-size: 64px;
    font-weight: 400;
    margin-bottom: 30px;
    font-family: "visbycf", sans-serif;
  }
  p {
    font-size: 23px;
    line-height: 29px;
    color: #828282;
    font-weight: 400;
    margin-bottom: 40px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
    }
    ${Media.md} {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }
  a {
    background-color: #111725;
    color: #fff;
    text-decoration: none;
    font-size: 19px;
    max-width: 176px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: center;
    font-family: "visbycf", sans-serif;
  }
`;

// innovation css start

export const Innovationbanner = styled.div`
  margin-top: 120px;
`;
export const Innovationcontent = styled.div`
  text-align: center;
  p {
    font-size: 40px;
    color: #fff;
    margin-bottom: 5px;
    font-family: "visbycf", sans-serif;
    ${Media.lg} {
      font-size: 30px;
    }
    ${Media.lg} {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 40px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 40px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 500;
    }
    ${Media.lg} {
      font-size: 30px;
    }
    ${Media.md} {
      font-size: 24px;
    }
  }
  a {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    font-size: 19px;
    max-width: 176px;
    height: 50px;
    line-height: 50px;
    width: 100%;
    text-align: center;
    font-family: "visbycf", sans-serif;
  }
`;

export const Companyblog = styled.div`
  margin-top: 150px;
  margin-bottom: 88px;
  .blog_img {
    flex: 0 0 40%;
    max-width: 40%;
    ${Media.md} {
      flex: 0 0 30%;
    max-width: 30%;
    }
    ${Media.sm} {
      flex: 0 0 40%;
    max-width: 40%;
    }
  }
  .blog_content {
    flex: 0 0 60%;
    max-width: 60%;
    ${Media.md} {
      flex: 0 0 70%;
    max-width: 70%;
    }
    ${Media.sm} {
      flex: 0 0 60%;
    max-width: 60%;
    }
  }


  ${Media.md} {
    margin-top: 88px;
  margin-bottom: 0px;
  }
  ${Media.sm} {
    margin-left:30px;
    margin-right:30px;
  }
`;

export const Companylogo = styled.div`
  margin-left: 85px;
  ${Media.md} {
    margin-left: 60px;
  }
  ${Media.sm} {
    margin-left: 0px;
  }
  img {
    max-width: 188px;
    width: 100%;
    ${Media.md} {
      max-width: 116px;
    }
    
  }
`;

export const Copanyblogcontent = styled.div`

${Media.md} {
  margin-right:40px;
}
${Media.sm} {
  margin-right:0px;
}

  p {
    font-size: 25px;
    color: #111725;
    font-family: "visbycf", sans-serif;
    ${Media.md} {
      font-size: 18px;
    }
  }
  p:first-child {
    margin-bottom: 40px;
  }
`;
export const Borderline = styled.div`
  margin-top: 88px;
  margin-bottom: 128px;
  max-width:1200px;
  margin-left:auto;
  margin-right:auto;
  ${Media.md} {
    max-width:850px;
    margin:89px auto;
  }
`;

export const Teamsection = styled.div`
${Media.md} {
  margin-left:50px;
  margin-right:50px;
}

${Media.sm} {
  margin-left:30px;
  margin-right:30px;
}
`;
export const TeamColumn = styled.div``;

export const Teamcard = styled.div`
  img {
    width: 100%;
  }
  ${Media.sm} {
    margin-bottom:30px;
  }
`;

export const Teamcardcontent = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  ${Media.md} {
      padding-left: 0px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 47px;
    font-weight: 400;
    font-family: "visbycf", sans-serif;
    ${Media.md} {
      font-size: 16px;
  }
  }
  h3 {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 8px;
    font-family: "visbycf", sans-serif;
    font-weight: 400;
    ${Media.md} {
      font-size: 24px;
  }
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 400;
    }
    ${Media.md} {
      font-size: 12px;
  }
  }
`;

export const Teamdiscription = styled.div`
  padding-left: 60px;
  ${Media.md} {
    padding-left: 0px;
    // margin-right:55px;
    margin-left:-15px;
  }
  ${Media.sm} {
    margin-right:0px;
    margin-left:0px;
  }
  p {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 32px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
    }
    ${Media.md} {
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 30px;
    }
  }
`;

export const Slidersection = styled.div`
  background-color: #111725;
  margin-top: 110px;
  padding-top: 203px;
  padding-bottom: 300px;
  ${Media.sm} {
    padding-top: 100px;
    margin-top: 40px;
  }
`;

export const Quotesection = styled.div`
  max-width: 850px;
  margin-left: 40px;
  img {
    display: inline;
    width: 50px;
    margin-right: 30px;
    margin-left: 60px;
  }
  p {
    color: #fff;
    font-size: 24px;
    display: inline;
    line-height: 48px;
    font-family: "visbycf", sans-serif;
    ${Media.sm} {
     font-size:20px;
     line-height:32px;
    }
  }

`;

export const Owlslider = styled.div``;

export const Faqwrapper = styled.div`
  margin-left: 52px;
  margin-right: 52px;
  position: relative;
  margin-top: -130px;
  background: #fff;
  padding: 50px 60px;
  border-radius: 20px;
  ${Media.sm} {
    padding: 36px 20px 80px;
    margin-left: 40px;
  margin-right: 40px;
   }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgb(0 0 0 / 3%);
    z-index: 1;
    border-radius: 20px;
  }
`;

export const Faqheader = styled.div`
  position: relative;
  z-index: 9;
  h2 {
    font-size: 64px;
    line-height: 98px;
    font-family: "visbycf", sans-serif;
    font-weight: 400;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 300;
    }
    ${Media.md} {
      font-size: 51px;
    }
    ${Media.md} {
      font-size: 28px;
    }
  }
  p {
    font-size: 23px;
    line-height: 29px;
    margin-bottom: 15px;
    color: #828282;
    font-family: "visbycf", sans-serif;
    ${Media.md} {
      font-size: 16px;
    }
    ${Media.sm} {
      font-size: 11px;
      line-height:14px;
    }
  }
  :last-child {
    margin-bottom: 50px;
  }
`;

export const Bindingwrapper = styled.div`
  max-width: 325px;
  width: 100%;
  height: 325px;
  border-radius: 100%;
  background-color: #000;
  margin: 0 0 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  ${Media.md} {
    max-width: 225px;
  height: 225px;
  }

  p {
    color: #fff;
    font-size: 25px;
    font-family: "visbycf", sans-serif;
    ${Media.md} {
      font-size: 20px;
    }
  }
  img {
    width: 40px;
    display: block;
    margin: 0 0 0 auto;
  }
`;
export const Bindingcontent = styled.div`
  max-width: 190px;
  ${Media.md} {
    max-width: 150px;
    padding-top:20px;
  }
`;

// footer css start


export const Footersection = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  ${Media.md} {
    margin-left: 30px;
  margin-right: 30px;
  }

`;

export const Footerinfo = styled.div`
  margin-left: 30px;
  ${Media.lg} {
    margin-left: 0px;
  }
  h2 {
    font-size: 30px;
    line-height: 24px;
    margin-bottom: 22px;
    font-family: "visbycf", sans-serif;
    font-weight: 600;
    ${Media.md} {
      font-size: 24px;
    }
  }
  p {
    font-size: 21px;
    line-height: 24px;
    margin-bottom: 25px;
    color: #828282;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
    }
    ${Media.md} {
      font-size: 14px;
    }
  }
`;


export const Customefooter = styled.div`
display: flex;
  align-items: end;
  justify-content: space-between;
  ${Media.sm} {
    display:block;
  }

`;
export const Customrow = styled.div`
display: flex;
align-items: end;
${Media.sm} {
  flex-wrap:wrap;
}
`;
export const Customcolumn = styled.div`
`;
export const Footermenu  = styled.div`
  max-width: 520px;
    width: 100%;
    display: flex;
    justify-content: center;
    ${Media.lg} {
      justify-content: flex-end;
    }
    ${Media.sm} {
      max-width: 100%;
      justify-content: space-between;
      margin-top:40px;
      padding-left:15px;
      padding-right:15px;
    }
`;
export const Quicklinks = styled.div`
  max-width: 200px;
  width: 100%;
  margin-right:15px;
  ${Media.lg} {
    max-width: 120px;
  }
  ul {
    padding: 0px;
    margin: 0px;
    list-style-type: none;

    li {
      font-size: 17px;
      font-weight: 600;
      margin-bottom: 16px;
      font-family: "visbycf", sans-serif;
    }
  }
`;


export const Footerform = styled.div`
  max-width: 550px;
  width: 100%;
  ${Media.lg} {
    max-width: 100%;
    width:100%;
  }
`;

export const InoutField = styled.div`
  input {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #d7d7d7;
    padding: 12px;
    height: 54px;
    font-size: 19px;
    outline: 1px solid #d7d7d7;
    color: #111725;
    font-family: "visbycf", sans-serif;
    ${Media.sm} {
      margin-bottom:15px;
    }
  }
  ::placeholder {
    color: #b8b8b8;
    font-family: "visbycf", sans-serif;
  }
`;

export const Submitbtn = styled.div`
  background: #1e2941;
  color: #fff;
  border-radius: 8px;
  max-width: 112px;
  width: 100%;
  margin-left:10px;
  text-align: center;
  line-height: 54px;
  cursor: pointer;
  font-family: "open-sans", sans-serif;
  ${Media.sm} {
    margin-left:0px;
    max-width: 100%;
  }
`;

export const Checkbox = styled.div`
  .checkBox {
    display: block;
    position: relative;
    padding-left: 20px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-top: 30px;
    color: #8e8e8e;
    font-family: "visbycf", sans-serif;
  }

  .checkBox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 12px;
    width: 12px;
    background-color: #fff;
    border: 1px solid #1e2940;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkBox input:checked ~ .checkmark:after {
    display: block;
  }

  .checkBox .checkmark:after {
    left: 2px;
    top: 2px;
    width: 4px;
    height: 4px;
    border: solid #1e2940;
    border-width: 2px;
    background: #1e2940;
  }
`;



export const Fotterbottom = styled.div`
  margin-top: 90px;
  p {
    font-size: 17px;
    font-weight: 600;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 500;
    }
    ${Media.md} {
      font-size: 14px;
    }
  }
  .text-right {
    text-align: right;
  }
`;
export const Ftcontactseciton = styled.div`
  h4 {
    font-size: 17px;
    margin-bottom: 25px;
    font-weight: 600;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 500;
    }
  }
  img {
    width: 28px;
  }
`;
export const Desktopftbottom = styled.div`
${Media.sm} {
display:none;
}
`;
export const Footerrow = styled.div`
display:flex;
justify-content: space-between;
${Media.sm} {
  margin-top:20px;
  display:flex;
justify-content: space-between;
align-item:center;
  
  }
`;
export const Fbcolumn1 = styled.div``;
export const Fbcolumn2 = styled.div`
${Media.sm} {
  text-align: center;
  margin-top:15px;
  }`;
export const Fbcolumn3 = styled.div`
`;
export const Mobileftbottom = styled.div`
display:none;
${Media.sm} {
  display:block;
  }

`;


// accordian css

export const Customaccordian = styled.div`
  position: relative;
  z-index: 9;
  .accordion__panel {
    padding: 20px 0px;
    p {
      margin-bottom: 24px;
      color: #000;
      font-size: 20px;
      font-weight: 200;
    }
  }
  .accordion__button {
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    font-size: 30px;
    line-height: 48px;
    font-family: "visbycf", sans-serif;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
    &:before {
      display: inline-block;
      content: "";
      height: 16px;
      width: 16px;
      border-right: 2px solid #111725;
      border-bottom: none;
      transform: rotate(90deg);
      position: absolute;
      margin-right: 0px;
      right: 7px;
      z-index: 9;
      top: 40%;
    }
    &:after {
      display: inline-block;
      content: "";
      height: 16px;
      width: 16px;
      border-bottom: 2px solid #111725;
      transform: rotate(90deg);
      position: absolute;
      right: 0px;
      top: 48%;
      z-index: 9;
    }
    ${Media.md} {
      font-size: 20px;
    }
    ${Media.md} {
      font-size: 12px;
    }
  }
  .accordion {
    border: none;
  }
  .accordion__item {
    border-bottom: 2px solid #111725;
  }
  .accordion__button[aria-expanded="true"],
  .accordion__button[aria-selected="true"] {
    &:before {
      transform: rotate(90deg);
    }
  }
  .accordion__button[aria-expanded="true"],
  .accordion__button[aria-selected="true"] {
    &:after {
      display: none;
    }
  }
`;

// service slider css start

export const Customserviceslider = styled.div`
${Media.sm} {
  margin-top:100px;
}

  h5 {
    font-size: 31px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 31px;
    margin-top: 24px;
    color: #bdbdbd;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 400;
    }
    ${Media.md} {
      font-size: 24px;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
    color: #bdbdbd;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 400;
    }
    ${Media.md} {
      font-size: 14px;
    }
  }
  h3 {
    font-size: 90px;
    font-weight: 400;
    position: relative;
    color: #bdbdbd;
    font-family: "Helvetica", sans-serif;
    background-color: #fff;
    display: inline-block;
    padding-right: 25px;
  }
  .item {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 55px;
      width: 100%;
      height: 3px;
      background-color: #bdbdbd;
    }
  }
  .owl-item {
    &.active + .active {
      opacity: 0.3;
    }
  }

  .owl-next {
    span {
      background: #000;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
    }
    &.disabled {
      opacity: 0;
    }
  }
  .owl-prev {
    &.disabled {
      opacity: 0;
    }
  }
  .owl-carousel {
    .owl-nav {
      display: block;
      margin-top: 50px;
      clear: both;
      text-align: right;
      .nav-btn {
        background-repeat: no-repeat;
        width: 18px;
        height: 15px;
        &.prev-slide {
          background: url(${Arrow1});
          transform: scale(-1);
        }
        &.next-slide {
          background: url(${Arrow1});
        }
      }
      
      button {
        background-color: #000 !important;
        padding: 10px !important;
        &:hover {
          background: #000 !important;
        }
      }
    }
  }
  .active {
    .serviceitem {
      h5 {
        color: #111725;
      }
      h3 {
        color: #111725;
      }
      p {
        color: #111725;
      }
    }
  }
`;

// owlslide css start
export const Customowlslide = styled.div`
  margin-top: 240px;
  ${Media.md} {
    margin-top:80px;
    margin-left:50px;
  }
  ${Media.sm} {
    margin-left:40px;
  }
  .owl-prev {
    &.disabled {
      opacity: 0.6;
      .nav-btn {
        &:before {
          display: none;
        }
      }
    }
  }
  .owl-next {
    &.disabled {
      opacity: 0.6;
      .nav-btn {
        &:before {
          display: none;
        }
      }
    }
  }

  .owl-nav {
    margin-top: 50px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    gap: 56px;
    button {
      &:hover {
        background: transparent !important;
      }
    }
    span {
      color: #fff;
    }
    .nav-btn {
      background-repeat: no-repeat;
      width: 24px;
      height: 22px;
      position: relative;
      &.prev-slide {
        background: url(${Arrow2});
        transform: scale(-1);
        &:before {
          content: "";
          width: 78px;
          height: 39px;
          position: absolute;
          left: calc(50% - 38px);
          top: auto;
          bottom: 0;
          transform: scale(-1);
          background: url(${ArrowBG});
        }
      }
      &.next-slide {
        background: url(${Arrow2});
        &:before {
          content: "";
          width: 78px;
          height: 39px;
          position: absolute;
          left: calc(50% - 38px);
          top: 0;
          background: url(${ArrowBG});
        }
      }
    }
  }
  .slider_Content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    h4 {
      color: #fff;
      font-size: 28px;
      line-height: 57px;
      font-weight: 400;
      font-family: "Helvetica", sans-serif;
      ${Media.md} {
        font-size: 20px;
      }
    }
    p {
      color: #fff;
      font-size: 20px;
      line-height: 27px;
      font-family: "HelveticaNeue", sans-serif;
      color: #fff;
      ${Media.md} {
        font-size: 16px;
      }
    }
  }
`;

// custome mdoal css

export const Contactmodalwrapper = styled.div`
margin-left:20px;
margin-right:20px;
`;

export const Customemodal = styled.div`
h2 {
  margin-bottom:20px;
}

`;
export const Customemodalrow = styled.div`
display: flex;
margin-left: -15px;
margin-right: -15px;
align-items: center;
`;
export const Customemodalgroup = styled.div`
width: 50%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  .form-control {
    width: 100%;
  border: 1px solid #D9D9D9;
  height: 45px;
  padding: 0px 15px;
  box-sizing: border-box;
  }
 
  .css-wmy1p7-ReactDropdownSelect {
    border: 1px solid #D9D9D9 !important;
    height: 45px !important;
    padding: 0px 15px;
  }
  p {
    margin-top: 0px;
  margin-bottom: 0px;
  }
  .w-100 {
    width:100%;
    }
`;
export const Customemodalgroup1 = styled.div`
width:100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  .form-control {
    width: 100%;
  border: 1px solid #D9D9D9;
  height: 45px;
  padding: 0px 15px;
  box-sizing: border-box;
  }
  .text_control {
    width: 100%;
    border: 1px solid #D9D9D9;
    padding: 15px;
    box-sizing: border-box;
  }
  .modalcheckbox {
    margin-left:30px;
    margin-right:30px;
  }
  
  .checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 14px;
    width: 14px;
    background-color: #fff;
    border: 1px solid #1e2940;
  }
  .checkBox {
    margin-top: 10px;
    margin-bottom: 0px;
    color: #000;
    font-size: 10px;
    .checkmark:after {
      left: 3px;
    top: 1px;
    width: 4px;
    height: 6px;
    border: solid #1e2940;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    background: inherit;
    }
  }
`;
export const Modalbtn = styled.div`
background: #1e2941;
color: #fff;
border-radius: 8px;
max-width: 112px;
width: 100%;
margin:0 auto;
text-align: center;
line-height: 54px;
cursor: pointer;
font-family: "open-sans",sans-serif;

`;

