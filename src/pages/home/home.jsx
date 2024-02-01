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
import logoimage from "../../assets/images/wpi2.png";
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
                      nachhaltigen Aufbau von Privatvermögen durch innovative
                      Immobilienlösungen.
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
                    Privatvermögen durch Immobilien, bietet der familiäre
                    Betrieb Wicker <span>&</span> Partner individuelle Lösungen.
                  </p>
                  <p>
                    Nach einer gründlichen Finanzanalyse erfolgt die Auswahl der
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
                Wicker <span> & </span> Partner <span> - </span> Ihr Weg zum
                nachhaltigen Vermögensaufbau durch intelligente und individuelle
                Immobilienlösungen.
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
                    In einer Welt, die ständigen Veränderungen unterworfen ist,
                    bleiben wir unserer Tradition treu, während wir gleichzeitig
                    innovativ auf neue Herausforderungen reagieren.
                  </p>
                  <p>
                    Mit einem klaren Blick für Chancen und einem festen
                    Engagement für Qualität setzen wir Maßstäbe im Aufbau von
                    Privatvermögen durch Immobilieninvestitionen.
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
            <Row>
              <Column className="col-md-7 col-12">
                <Row>
                  <Column className="col-md-6 col-12 teaminnerColumn_01">
                    <Teamcard>
                      <img src={Teamimg01} alt="team image" />
                      <Teamcardcontent>
                        <h4> GESCHÄFTSFÜHRER </h4>
                        <h3> Raphael Wicker </h3>
                        <p>
                          Raphael Wicker, unser geschäftsführender Partner der
                          zweiten Generation, Master in Immobilienwirtschaft.
                        </p>
                        <p>
                          Seine fundierte Expertise und innovative
                          Herangehensweise prägen maßgeblich den Erfolg von
                          Wicker <span>&</span> Partner im nachhaltigen Aufbau
                          von Privatvermögen durch intelligente
                          Immobilienlösungen.
                        </p>
                      </Teamcardcontent>
                    </Teamcard>
                  </Column>
                  <Column className="col-md-6 col-12  teaminnerColumn_02">
                    <Teamcard>
                      <img src={Teamimg02} alt="team image" />
                      <Teamcardcontent>
                        <h4> LEITUNG NORD </h4>
                        <h3> Nele Engfer </h3>
                        <p>
                          Nele Engfer verkörpert das Herzstück unserer
                          Unternehmensphilosophie: Professionalität, Integrität
                          und eine unerschütterliche Hingabe für Ihre
                          finanziellen Ziele. Mit jahrelanger Erfahrung im
                          Bereich Kapitalanlagen und einem tiefen Verständnis
                          für den Immobilienmarkt leitet Nele das Team Nord mit
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
                    Wicker <span> & </span> Partner, als familiäres Unternehmen
                    mit mehr als zwei Generationen Erfahrung im Aufbau von
                    Privatvermögen durch Immobilien, bieten wir unseren Kunden
                    umfassende Lösungen.
                  </p>
                  <p>
                    Unser tiefes Verständnis für den Immobilienmarkt und unsere
                    langfristige Vision für Erfolg ermöglichen es uns, gemeinsam
                    mit unseren Kunden maßgeschneiderte Strategien zu
                    entwickeln.
                  </p>
                  <p>
                    Wir legen großen Wert auf persönliche Betreuung und setzen
                    dabei höchsten Fokus auf Transparenz und Integrität. Unsere
                    Expertise erstreckt sich über sämtliche Facetten der
                    Immobilienbranche von der Auswahl vielversprechender
                    Investitionsobjekte über die effektive Verwaltung von
                    Bestandsimmobilien bis hin zur Entwicklung zukunftsweisender
                    Projekte.
                  </p>
                  <p>
                    Durch unsere ganzheitlichen Lösungsansätze schaffen wir
                    nicht nur Werte, sondern bauen auch nachhaltige
                    Vermögensportfolios auf.
                  </p>
                  <p>
                    Unsere familiäre Prägung spiegelt sich in einem engen
                    Zusammenhalt und einer starken Kundenbindung wider. Die
                    Werte, die über Generationen hinweg gepflegt wurden,
                    manifestieren sich in unserem ethischen Geschäftsansatz und
                    unserem Streben nach Exzellenz.
                  </p>
                </Teamdiscription>
              </Column>
            </Row>
          </Container>
        </Teamsection>
        <Slidersection>
          <Container>
            <Row>
              <Column>
                <Quotesection>
                  <img src={QuoteImg} />
                  <p>
                    Durch die präzise Auswahl vielversprechender
                    Investitionsobjekte und eine durchdachte Umsetzung haben wir
                    nicht nur Werte geschaffen, sondern auch den Erfolg unserer
                    Mandanten maßgeblich beeinflusst.{" "}
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
              Lösungen zu finden und die Erwartungen unserer Mandanten zu
              übertreffen. Unsere Erfolge sind das Ergebnis einer engen
              Zusammenarbeit mit unseren Mandanten, transparenten Kommunikation
              und dem Streben nach höchster Qualität in jedem Schritt des
              Projektzyklus.
            </p>
            <p>Diese Fragen beschäftigen unsere Mandanten:</p>
          </Faqheader>
          <Faqaccordian />
        </Faqwrapper>
        <Bindingwrapper onClick={() => setOpenFirst(true)}>
          <Bindingcontent>
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
