import React from "react";
import { Helmet } from "react-helmet";

export const Features = (props) => {
  const title = "Oferta - Stolarz Meb-Dom | Meble na wymiar do kuchni, łazienki i szafy";
  const description =
    "Specjalizujemy się w tworzeniu mebli na wymiar: kuchennych, łazienkowych, szaf i innych. Profesjonalne wykonanie i indywidualne podejście do każdego projektu.";

  return (
    <div id="features" className="text-center">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h1>Oferta</h1>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                {" "}
                  <i className={d.icon} aria-hidden="true"></i>
                  <h2>{d.title}</h2>
                  <p>{d.text}</p>
                </div>
              ))
            : "Ładowanie......"}
        </div>
      </div>
    </div>
  );
};
