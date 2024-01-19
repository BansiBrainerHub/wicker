import styled from "styled-components";

// images

import BindingbtnImg from "../assets/images/bindingBtn.png";
import Arrow1 from "../assets/images/arrow1.png";

export const MainIndexpage = styled.div``;

export const Headerwrapper = styled.div`
  position: relative;
  padding-left: 85px;
  padding-right: 85px;
  padding-top: 64px;
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
  // max-width: 325px;
  // width: 100%;
  // height: 325px;
  // border-radius: 100%;
  // background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 0px;
  padding-top: 80px;
  transition: 0.4s all ease-in-out;
  background: url(${BindingbtnImg});
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
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
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
  }
`;
export const Bannerleftcontent = styled.div`
  max-width: 188px;
  width: 100%;
  margin-right: 30px;

  p {
    font-size: 20px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
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
  }
`;

// about css start

export const Containerfluid = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 110px;
`;

export const Aboutwrapper = styled.div`
  margin-top: 120px;
`;

export const Aboutheading = styled.div`
  margin-right: 150px;
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
`;

export const Companylogo = styled.div`
  margin-left: 85px;
  img {
    max-width: 188px;
    width: 100%;
  }
`;

export const Copanyblogcontent = styled.div`
  p {
    font-size: 25px;
    color: #111725;
    font-family: "visbycf", sans-serif;
  }
  p:first-child {
    margin-bottom: 40px;
  }
`;
export const Borderline = styled.div`
  margin-top: 88px;
  margin-bottom: 128px;
`;

export const Teamsection = styled.div``;
export const TeamColumn = styled.div``;

export const Teamcard = styled.div`
  img {
    width: 100%;
  }
`;

export const Teamcardcontent = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  h4 {
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 47px;
    font-weight: 400;
    font-family: "visbycf", sans-serif;
  }
  h3 {
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 8px;
    font-family: "visbycf", sans-serif;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
      font-weight: 400;
    }
  }
`;

export const Teamdiscription = styled.div`
  padding-left: 60px;
  p {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 32px;
    font-family: "visbycf", sans-serif;
    span {
      font-family: "Helvetica", sans-serif;
    }
  }
`;

export const Slidersection = styled.div`
  background-color: #111725;
  margin-top: 110px;
  padding-top: 203px;
  padding-bottom: 300px;
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
  }
  p {
    font-size: 23px;
    line-height: 29px;
    margin-bottom: 15px;
    color: #828282;
    font-family: "visbycf", sans-serif;
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

  p {
    color: #fff;
    font-size: 25px;
    font-family: "visbycf", sans-serif;
  }
  img {
    width: 40px;
    display: block;
    margin: 0 0 0 auto;
  }
`;
export const Bindingcontent = styled.div`
  max-width: 190px;
`;

// footer css start

export const Footersection = styled.div`
  margin-left: 40px;
  margin-right: 40px;
`;

export const Footerinfo = styled.div`
  margin-left: 30px;
  h2 {
    font-size: 30px;
    line-height: 24px;
    margin-bottom: 22px;
    font-family: "visbycf", sans-serif;
    font-weight: 600;
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
  }
`;

export const Footerform = styled.div`
  max-width: 600px;
  width: 100%;
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
  }
  ::placeholder {
    color: #b8b8b8;
    font-family: "visbycf", sans-serif;
  }
`;

export const Telephone = styled.div`
  display: flex;
  margin-top: 30px;
`;
export const Submitbtn = styled.div`
  background: #1e2941;
  color: #fff;
  margin-left: 15px;
  border-radius: 8px;
  max-width: 112px;
  width: 100%;
  text-align: center;
  line-height: 54px;
  cursor: pointer;
  font-family: "open-sans", sans-serif;
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
    left: 1px;
    top: 1px;
    width: 4px;
    height: 4px;
    border: solid #1e2940;
    border-width: 2px;
    background: #1e2940;
  }
`;

export const Quicklinks = styled.div`
  max-width: 200px;
  width: 100%;
  margin: 0 0 0 auto;
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
  }
  img {
    width: 16px;
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
  .owl-next {
    span {
      background: #000;
      color: #fff;
      padding: 8px 16px;
      border-radius: 4px;
    }
  }
  // .owl-nav {
  //   display: block;
  //   margin-top: 50px;
  //   clear: both;
  //   text-align: right;
  // }
  .owl-nav {
    display: block;
    margin-top: 50px;
    clear: both;
    text-align: right;
    .nav-btn {
      background-repeat: no-repeat;
      width: 16px;
      height: 15px;
      &.prev-slide {
        background: url(${Arrow1});
        transform: scale(-1);
      }
      &.next-slide {
        background: url(${Arrow1});
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
  .owl-nav {
    display: inline-block;
    margin-top: 50px;
    margin-left: 40px;
    span {
      color: #fff;
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
    }
    p {
      color: #fff;
      font-size: 20px;
      line-height: 27px;
      font-family: "HelveticaNeue", sans-serif;
      color: #fff;
    }
  }
`;
