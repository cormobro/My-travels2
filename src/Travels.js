import React from "react";
import Travel from "./Travel";
// src/Travels.js
const travels = [
  {
    destination:
      "Bangkok",
    country: "Thailand",
    image:
      "https://www.connections.be/~/media/images/connections/vliegtickets/asia/bangkok/bangkokstreets.jpg",
    distance: "3000 Km"
  },
  {
    destination: "London",
    country: "England",
    image:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/london-organisations/tower-bridge-exhibition/tower-bridge-homepage-image.jpg?mw=1920&hash=E19E0136A57855A8ED61B4E66EA72F1646CA8DAC",
    distance: "300 Km"
  },
  {
    destination: "Brussels",
    country: "Belgium",
    image:
      "https://s3-eu-west-1.amazonaws.com/brussels-images/content/gallery/visit/article/10-top-spots-for-photographers-in-brussels/ten-top-spots-for-photographers-in-brussels-main_sq_640.jpg",
    distance: "0 Km"
  },
  {
    destination:
      "Paris",
    country: "France",
    image:
      "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/node_7886/dossier-paris-patrimoine-%7C-780x340-%7C-%C2%A9-fotolia/160387-4-fre-FR/Dossier-Paris-Patrimoine-%7C-780x340-%7C-%C2%A9-Fotolia.jpg",
    distance: "300 Km"
  },
  {
    destination: "Berlin",
    country: "Germany",
    image: "https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/Panorama_Mitte_von_SenelderPlatz_CSW4698_c_Scholvien_150_OCV_DL_PPT.jpg?h=9a8b5fd2&itok=4EU8v0xh",
    distance: "300 Km"
  },
  {
    destination: "Barcelona",
    country: "Spain",
    image: "https://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/cataluna/barcelona-000037111798-istock.jpg_369272544.jpg",
    distance: "1100 Km"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
  <Travel destination={travel.destination} image={travel.image} country={travel.country}  distance={travel.distance} />
)
    )}
  </div>
);

export default Travels;
