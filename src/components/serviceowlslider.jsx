import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/common-style.css";

import Arrow1 from "../assets/images/arrow1.png";

import { Customserviceslider } from "../assets/style";

const serviceowlslider = () => {
  const options = {
    loop: true,
    center: false,
    margin: 20,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    singleItem: true,
    nav: true,
    navText: [
      "<img src='../assets/images/arrow1.png' />",
      "<img src='../assets/images/arrow1.png' />",
    ],
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 1.5,
      },
      1000: {
        items: 1.5,
      },
    },
  };
  return (
    <div className="">
      <Customserviceslider>
        <OwlCarousel className="owl-theme" {...options}>
          <div class="item serviceitem">
            <h3>01</h3>
            <div className="">
              <h5> ANALYSE</h5>
              <p>
                In der ersten Phase führen wir eine umfassende Bedarfsanalyse
                durch, um die individuellen Wünsche und Ziele zu definieren.
              </p>
            </div>
          </div>
          <div class="item serviceitem">
            <h3>02</h3>
            <div className="">
              <h5>
                {" "}
                PLANUNG <span> & </span> KONZIPIERUNG
              </h5>
              <p>
                Durch die sorgfältige Datenaufnahme ermitteln wir den IST
                <span>-</span>Zustand und identifizieren die spezifischen
                Anforderungen.
              </p>
            </div>
          </div>
          <div class="item serviceitem">
            <h3>03</h3>
            <div className="">
              <h5> AUSWAHL </h5>
              <p>
                Auf Basis der analysierten Daten filtern wir aus unserem
                deutschlandweiten Portfolio die passende Immobilie heraus.
              </p>
            </div>
          </div>
          <div class="item serviceitem">
            <h3>04</h3>
            <div className="">
              <h5> UMSETZUNG </h5>
              <p>
                Wicker <span> & </span> Partner übernimmt die administrative
                Koordination des gesamten Prozesses, einschließlich Finanzierung
                und Notartermin für einen reibungslosen Ablauf.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </Customserviceslider>
    </div>
  );
};

export default serviceowlslider;
