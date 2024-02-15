import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/common-style.css";

import { Customserviceslider } from "../assets/style";

const serviceowlslider = () => {
  const options = {
    loop: true,
    center: false,
    margin: 20,
    autoplay: true,
    dots: false,
    singleItem: true,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'></div>",
      "<div class='nav-btn next-slide'></div>",
    ],
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 1.5,
      },
      992: {
        items: 1.5,
      },
    }
  };
  return (
    <Customserviceslider>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item serviceitem">
          <h3>01</h3>
          <div className="">
            <h5> ANALYSE</h5>
            <p>
              In der ersten Phase f<span>ü</span>hren wir eine umfassende Bedarfsanalyse
              durch, um die individuellen W<span>ü</span>nsche und Ziele zu definieren.
            </p>
          </div>
        </div>
        <div class="item serviceitem">
          <h3>02</h3>
          <div className="">
            <h5>
              {" "}
              PLANUNG & KONZIPIERUNG
            </h5>
            <p>
              Durch die sorgf<span>ä</span>ltige Datenaufnahme ermitteln wir den IST
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
              Wicker <span> & </span> Partner <span>ü</span>bernimmt die administrative
              Koordination des gesamten Prozesses, einschlie<span>ß</span>lich Finanzierung
              und Notartermin f<span>ü</span>r einen reibungslosen Ablauf.
            </p>
          </div>
        </div>
      </OwlCarousel>
    </Customserviceslider>
  );
};

export default serviceowlslider;
