import React from "react";
import { Helmet } from "react-helmet";
import { Image } from "./image";

export const Gallery = (props) => {
  const title = "Nasze realizacje - Meble na wymiar Meb-Dom | Galeria projektów";
  const description =
    "Zobacz nasze realizacje mebli na wymiar – kuchnie, łazienki, szafy i inne projekty stworzone z pasją i precyzją.";

  return (
    <div id="portfolio" className="text-center">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container">
        <div className="section-title">
          <h1>Nasze realizacje</h1>
          <p>
            Każdy projekt to historia – Twoje potrzeby, nasza wiedza i wspólny cel: piękne i trwałe wnętrze.
            <br />
            Obejrzyj naszą galerię.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      alt={d.title || "Realizacja mebli na wymiar"}
                    />
                  </div>
                ))
              : "Ładowanie......"}
          </div>
        </div>
      </div>
    </div>
  );
};
