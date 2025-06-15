import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nasze realizacje</h2>
          <p>
            Każdy projekt to historia – Twoje potrzeby, nasza wiedza i wspólny cel: piękne i trwałe wnętrze.<br />
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
