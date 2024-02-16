import React, { useState } from "react";
import ContactModal from "../../components/contactmodal";
import Header from "../../components/header";
import OwlCarouselSlider from "../../components/owlcarouselslider";
import Faqaccordian from "../../components/accordian";
import "../../assets/common-style.css";
import Footer from "../../components/footer";
import Serviceowlslider from "../../components/serviceowlslider";

// styles
import {
  MainIndexpage,
  Container,
  Row,
  Column,
  Bannerheading,
  Topbannerimg,
  Bannerleftcontent,
  Bannerrightcontent,
  Headerbanner,
  Aboutwrapper,
  Aboutheading,
  Innovationbanner,
  Innovationcontent,
  Companyblog,
  Companylogo,
  Copanyblogcontent,
  Borderline,
  Teamsection,
  Teamcard,
  Teamcardcontent,
  Teamdiscription,
  Slidersection,
  Quotesection,
  Faqwrapper,
  Faqheader,
  Bindingwrapper,
  Bindingcontent,
  Containerfluid,
  Mobileview,
  Desktopview,
  MobilebannerContent,
} from "../../assets/style";

// images
import headerbnnerImg from "../../assets/images/topBanner-img.png";
import logoimage from "../../assets/images/wpi2.svg";
import Teamimg01 from "../../assets/images/team-img-01.png";
import Teamimg02 from "../../assets/images/team-img-02.png";
import QuoteImg from "../../assets/images/quoteImg.png";
import Rightarrow from "../../assets/images/right_arrowBtn.png";

const Home = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const handleModalClose = () => {
    setOpenFirst(false);
  };

  return (
    <>
      <Header />
      <MainIndexpage>
        {/* banner section start  */}
        <Headerbanner>
          <Container>
            <Bannerheading>
              <h2>
                Generationen verbinden, Verm<span>ö</span>gen gestalten{" "}
              </h2>
            </Bannerheading>
            <Desktopview>
              <Row className="banner_alignment">
                <Column>
                  <Bannerleftcontent>
                    <p>
                      Wicker <span>&</span> Partner <span>-</span> Seit zwei
                      Generationen <strong> Ihr Partner </strong> im
                      nachhaltigen Aufbau von Privatverm<span>ö</span>gen durch innovative
                      Immobilienl<span>ö</span>sungen.
                    </p>
                  </Bannerleftcontent>
                </Column>
                <Column>
                  <Topbannerimg>
                    <img src={headerbnnerImg} />
                  </Topbannerimg>
                </Column>
                <Column>
                  <Bannerrightcontent>
                    <p>Mit Immobilien Werte schaffen.</p>
                  </Bannerrightcontent>
                </Column>
              </Row>
            </Desktopview>
            <Mobileview>
              <Topbannerimg>
                <img src={headerbnnerImg} />
              </Topbannerimg>
              <MobilebannerContent>
                <Row className="justif_content">
                  <Column className="full_width">
                    <Bannerleftcontent>
                      <p>
                        Wicker <span>&</span> Partner <span>-</span> Seit zwei
                        Generationen <strong> Ihr Partner </strong> im
                        nachhaltigen Aufbau von Privatvermögen durch innovative
                        Immobilienlösungen.
                      </p>
                    </Bannerleftcontent>
                  </Column>
                  <Column>
                    <Bannerrightcontent>
                      <p>Mit Immobilien Werte schaffen.</p>
                    </Bannerrightcontent>
                  </Column>
                </Row>
              </MobilebannerContent>
            </Mobileview>
          </Container>
        </Headerbanner>
        {/* banner section end  */}
        {/* about section start  */}
        <Aboutwrapper>
          <Containerfluid>
            <Row className="align-item-center">
              <Column className="col-md-6 col-12">
                <Aboutheading>
                  <h3> Ablauf </h3>
                  <p>
                    Mit mehr als 50 Jahren Erfahrung im Aufbau von
                    Privatverm<span>ö</span>gen durch Immobilien, bietet der famili<span>ä</span>re
                    Betrieb Wicker <span className="spec-char">&</span> Partner individuelle L<span>ö</span>sungen.
                  </p>
                  <p>
                    Nach einer gr<span>ü</span>ndlichen Finanzanalyse erfolgt die Auswahl der
                    Objekte und eine umfassende Risikobewertung.
                  </p>
                  <p>
                    Lassen Sie sich gerne unverbindlich und individuell von uns
                    beraten.
                  </p>
                  <a href="#"> Beratung </a>
                </Aboutheading>
              </Column>
              <Column className="col-md-6 col-12">
                <Serviceowlslider />
              </Column>
            </Row>
          </Containerfluid>
        </Aboutwrapper>
        {/* about section end  */}
        {/* partner innovation section start  */}
        <Innovationbanner className="innovation_bg">
          <Container>
            <Innovationcontent>
              <p> Tradition trifft Innovation </p>
              <h3>
                Wicker <span className="spec-char"> & </span> Partner - Ihr Weg zum
                nachhaltigen Verm<span>ö</span>gensaufbau durch intelligente und individuelle
                Immobilienl<span>ö</span>sungen.
              </h3>
              <a href="#"> Beratung </a>
            </Innovationcontent>
          </Container>
        </Innovationbanner>
        {/* partner innovation section end  */}
        {/* company blog section start  */}
        <Companyblog>
          <Container>
            <Row className="align-item-center no-wrape">
              <Column className=" blog_img ">
                <Companylogo>
                  <img src={logoimage} />
                </Companylogo>
              </Column>
              <Column className="blog_content">
                <Copanyblogcontent>
                  <p>
                    In einer Welt, die st<span>ä</span>ndigen Ver<span>ä</span>nderungen unterworfen ist,
                    bleiben wir unserer Tradition treu, w<span>ä</span>hrend wir gleichzeitig
                    innovativ auf neue Herausforderungen reagieren.
                  </p>
                  <p>
                    Mit einem klaren Blick f<span>ü</span>r Chancen und einem festen
                    Engagement f<span>ü</span>r Qualit<span>ä</span>t setzen wir Ma<span>ß</span>st<span>ä</span>be im Aufbau von
                    Privatverm<span>ö</span>gen durch Immobilieninvestitionen.
                  </p>
                </Copanyblogcontent>
              </Column>
            </Row>
            <Row>
              <Column className="col-12">
                <Borderline>
                  <hr />
                </Borderline>
              </Column>
            </Row>
          </Container>
        </Companyblog>
        {/* company blog section end  */}
        <Teamsection>
          <Container>
            <Row style={{justifyContent:"space-evenly"}}>
              <Column className="col-md-7 col-12">
                <Row>
                  <Column className="w-50">
                    <Teamcard>
                      <img src={Teamimg01} alt="team image" />
                      <Teamcardcontent>
                        <h4> GESCH<span>Ä</span>FTSF<span>Ü</span>HRER </h4>
                        <h3> Raphael Wicker </h3>
                        <p>
                          Raphael Wicker, unser gesch<span>ä</span>ftsf<span>ü</span>hrender Partner der
                          zweiten Generation, Master in Immobilienwirtschaft.
                        </p>
                        <p>
                          Seine fundierte Expertise und innovative
                          Herangehensweise pr<span>ä</span>gen maßgeblich den Erfolg von
                          Wicker <span className="spec-char">&</span> Partner im nachhaltigen Aufbau
                          von Privatverm<span>ö</span>gen durch intelligente
                          Immobilienl<span>ö</span>sungen.
                        </p>
                      </Teamcardcontent>
                    </Teamcard>
                  </Column>
                  <Column className="w-50">
                    <Teamcard>
                      <img src={Teamimg02} alt="team image" />
                      <Teamcardcontent>
                        <h4> LEITUNG NORD </h4>
                        <h3> Nele Engfer </h3>
                        <p>
                          Nele Engfer verk<span>ö</span>rpert das Herzst<span>ü</span>ck unserer
                          Unternehmensphilosophie: Professionalit<span>ä</span>t, Integrit<span>ä</span>t
                          und eine unersch<span>ü</span>tterliche Hingabe f<span>ü</span>r Ihre
                          finanziellen Ziele. Mit jahrelanger Erfahrung im
                          Bereich Kapitalanlagen und einem tiefen Verst<span>ä</span>ndnis
                          f<span>ü</span>r den Immobilienmarkt leitet Nele das Team Nord mit
                          einer beeindruckenden Vision und einem unfehlbaren
                          Engagement.
                        </p>
                      </Teamcardcontent>
                    </Teamcard>
                  </Column>
                </Row>
              </Column>
              <Column className="col-md-5 col-12">
                <Teamdiscription>
                  <p>
                    Wicker <span className="spec-char"> & </span> Partner, als famili<span>ä</span>res Unternehmen
                    mit mehr als zwei Generationen Erfahrung im Aufbau von
                    Privatverm<span>ö</span>gen durch Immobilien, bieten wir unseren Kunden
                    umfassende L<span>ö</span>sungen.
                  </p>
                  <p>
                    Unser tiefes Verst<span>ä</span>ndnis f<span>ü</span>r den Immobilienmarkt und unsere
                    langfristige Vision f<span>ü</span>r Erfolg erm<span>ö</span>glichen es uns, gemeinsam
                    mit unseren Kunden maßgeschneiderte Strategien zu
                    entwickeln.
                  </p>
                  <p>
                    Wir legen gro<span>ß</span>en Wert auf pers<span>ö</span>nliche Betreuung und setzen
                    dabei h<span>ö</span>chsten Fokus auf Transparenz und Integrit<span>ä</span>t. Unsere
                    Expertise erstreckt sich <span>ü</span>ber s<span>ä</span>mtliche Facetten der
                    Immobilienbranche von der Auswahl vielversprechender
                    Investitionsobjekte <span>ü</span>ber die effektive Verwaltung von
                    Bestandsimmobilien bis hin zur Entwicklung zukunftsweisender
                    Projekte.
                  </p>
                  <p>
                    Durch unsere ganzheitlichen L<span>ö</span>sungsans<span>ä</span>tze schaffen wir
                    nicht nur Werte, sondern bauen auch nachhaltige
                    Verm<span>ö</span>gensportfolios auf.
                  </p>
                  <p>
                    Unsere famili<span>ä</span>re Pr<span>ä</span>gung spiegelt sich in einem engen
                    Zusammenhalt und einer starken Kundenbindung wider. Die
                    Werte, die <span>ü</span>ber Generationen hinweg gepflegt wurden,
                    manifestieren sich in unserem ethischen Gesch<span>ä</span>ftsansatz und
                    unserem Streben nach Exzellenz.
                  </p>
                </Teamdiscription>
              </Column>
            </Row>
          </Container>
        </Teamsection>
        <Slidersection>
          <Container>
            <Row style={{justifyContent:"center"}}>
              <Column>
                <Quotesection>
                  <img src={QuoteImg} />
                  <p>
                    Durch die pr<span>ä</span>zise Auswahl vielversprechender
                    Investitionsobjekte und eine durchdachte Umsetzung haben wir
                    nicht nur Werte geschaffen, sondern auch den Erfolg unserer
                    Mandanten ma<span>ß</span>geblich beeinflusst.{" "}
                  </p>
                </Quotesection>
              </Column>
            </Row>
          </Container>
          <OwlCarouselSlider />
        </Slidersection>
        <Faqwrapper>
          <Faqheader>
            <h2>
              Warum Wicker <span>&</span> Partner?
            </h2>
            <p>
              Unser Team von Experten arbeitet kontinuierlich daran, innovative
              L<span>ö</span>sungen zu finden und die Erwartungen unserer Mandanten zu <span>ü</span>bertreffen. Unsere Erfolge sind das Ergebnis einer engen
              Zusammenarbeit mit unseren Mandanten, transparenten Kommunikation
              und dem Streben nach h<span>ö</span>chster Qualit<span>ä</span>t in jedem Schritt des
              Projektzyklus.
            </p>
            <p>Diese Fragen besch<span>ä</span>ftigen unsere Mandanten:</p>
          </Faqheader>
          <Faqaccordian />
        </Faqwrapper>
        <Bindingwrapper onClick={() => setOpenFirst(true)}>
          <Bindingcontent className="ver2">
            {/* <p>unverbindliche Beratung</p> */}
            <p>unverbindliche Beratung</p>
            <img src={Rightarrow} />
          </Bindingcontent>
        </Bindingwrapper>

        <Footer />
      </MainIndexpage>
      {openFirst && (
        <ContactModal
          openFirst={openFirst}
          handleModalClose={handleModalClose}
        />
      )}
    </>
  );
};

// const MainIndexpage = styled.div``;

export default Home;
