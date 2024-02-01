import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Customaccordian } from "../assets/style";

const Accordian = () => {
  return (
    <>
      <Customaccordian>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Wie verdiene ich mit der Immobilie Geld? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Die Wohnung generiert Einnahmen indem sie vermietet wird und der
                Mieter monatlich seine Miete überweist. Alle Immobilien werden
                bei Wicker & Partner bereits im vermieteten Zustand an den neuen
                Eigentümer übergeben. Das bedeutet die monatlichen Einkünfte
                durch die Mietzahlungen sind hier sichergestellt.
              </p>
              <p>
                Zudem wird sich der Wert deiner Immobilie im Laufe der kommenden
                Jahre steigern. Das liegt zum einen an der präzisen Auswahl der
                Standorte die wir im Vornherein treffen. Attraktive Standorte
                ziehen die Menschen an und so wird deine Immobilie begehrter.
                Zum anderen sorgt die Inflation dafür, das solide Investments
                wie Immobilien Ihren Wert anhand der Inflation erhöhen.
              </p>
              <p>
                Zuletzt kannst du die Kosten welche für dich durch deine
                Kapitalanlage entstehen steuerlich geltend machen. Diese Kosten
                für bspw. Zinsen für deinen Kredit an der Wohnung gibst du in
                deiner Steuererklärung an und minderst so dein zu versteuerndes
                Einkommen. Im Normalfall führt dies zu einer Steuerrückzahlung.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Welche Kosten entstehen? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Beim Immobilienkauf entstehen neben dem Kaufpreis auch
                zusätzliche Kosten, die als Kaufnebenkosten bekannt sind.
              </p>
              <p>
                Diese umfassen typischerweise die Grunderwerbsteuer, deren Höhe
                je nach Bundesland variiert (3,5%-6,5%), sowie die Ausgaben für
                den Notar, der die Kaufurkunde erstellt und die
                Eigentumsübertragung im Grundbuch festhält – ein Dokument, das
                den neuen Eigentümer offiziell bestätigt.
              </p>
              <p>
                In manchen Fällen trägt der Käufer auch teilweise oder
                vollständig die Maklerprovision. Wicker & Partner als Vermittler
                wird vom Verkäufer vergütet, das bedeutet für den Käufer fällt
                keine zusätzliche Vermittlungsprovision an.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Welche Risiken gibt es? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Zu den wesentlichen Risiken für Vermieter zählen primär
                ausbleibende Mietzahlungen seitens der Mieter. Unzuverlässiges
                Verhalten bezüglich der Mietzahlungen kann erhebliche
                finanzielle Belastungen für den Vermieter verursachen.
              </p>
              <p>
                Des Weiteren stellen Schäden an der Wohnung oder dem Gebäude ein
                bedeutsames Risiko dar, das potenziell zu Mietminderungen oder
                sogar zur Unbewohnbarkeit der Immobilie führen kann.
              </p>
              <p>
                Alle von Wicker & Partner angebotenen Wohnungen sind mit einer
                professionellen Mietverwaltung ausgestattet. Diese übernimmt
                nicht nur die Kommunikation mit den Mietern, sondern agiert auch
                proaktiv bei Mieterwechseln, um Leerstände zu vermeiden und eine
                kontinuierliche Mietzahlung zu gewährleisten.
              </p>
              <p>
                Zusätzlich bieten wir unsere Objekte mit einem Mietpool an.
                Dieser sichert kontinuierliche Mieteinnahmen, unabhängig davon,
                ob die Wohnung vermietet ist oder leer steht.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Welche Immobilien kommen in Frage? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Grundlegend sind ausreichende finanzielle Mittel oder
                Finanzierung durch eine Bank der Grundstein eines
                Immobilieninvestments. Dies prüfen wir immer in einem
                persönlichen Gespräch mit unseren Mandanten, da das von Mandant
                zu Mandant unterschiedlich ist.
              </p>
              <p>
                Wir ermitteln zusammen die Bonität unserer Mandanten mit
                Bewertung von Einkommen, Ausgaben und Kreditgeschichte. Es ist
                von Vorteil wenn du zum Kauf eine gewisse Summe an Eigenkapital
                mitbringst. Man spricht hier von ca. 10% auf den Kaufpreis. Dies
                ist nicht immer nötig und wird auch wieder in jedem Fall einzeln
                betrachtet.
              </p>
              <p>
                Zuletzt müssen wir zur einwandfreien Identifikation relevante,
                rechtliche Dokumente wie Ausweis und Einkommensnachweise von dir
                anfordern.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Welche Voraussetzungen müssen gegeben sein? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Bei der Auswahl der angebotenen Immobilien stehen vermietete
                Wohnungen in Mehrfamilienhäusern oder ganze Mehrfachobjekte zur
                Verfügung. Die Auswahl der Objekte erfolgt von uns
                standortbezogen. Das bedeutet wir wählen Immobilien an Orten aus
                wo in den kommenden Jahren noch mit einer steigenden Nachfrage
                zu rechnen ist. Diese Orte gibt es Deutschlandweit.
              </p>
              <p>
                Von Neubauten über sanierte Altbauten bis hin zu gepflegten
                Objekten, die so gestaltet sind, dass in den kommenden Jahren
                keine umfangreichen Investitionen am Objekt nötig sind haben wir
                alles im Portfolio. Zusätzlich wird eine professionelle
                Mietverwaltung geboten, die sich um die dauerhafte Vermietung
                und die Kommunikation mit dem Mieter kümmert.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <p> Wer ist für die Instandhaltung der Immobilie zuständig? </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Es gibt eine Hausverwaltung die sich um sämtliche Belange rund
                um die Immobilie kümmert. Bei der jährlich stattfindenden
                Eigentümerversammlung, zu der du als Eigentümer eingeladen
                wirst, berichtet die Verwaltung von den anstehenden Themen wie
                bspw. notwendige Renovierungen, geplante Investitionen und den
                aktuellen Stand der Immobilie.
              </p>
              <p>
                Hier kannst du zu jedem Thema deine Stimme abgeben. Gerne
                übernimmt aber auch der Hausverwalter diesen Aufwand für dich.
                Statte ihn hierzu mit einer Vollmacht aus und er vertritt deine
                Interessen, ohne, dass du hierfür anwesend sein musst.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </Customaccordian>
    </>
  );
};

export default Accordian;
