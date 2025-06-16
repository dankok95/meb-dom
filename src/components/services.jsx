import React from "react";
import { Helmet } from "react-helmet";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <Helmet>
        <title>Usługi stolarskie na wymiar | Meb-Dom</title>
        <meta
          name="description"
          content="Oferujemy meble na wymiar: kuchnie, szafy, łazienki i więcej. Kompleksowe usługi od projektu po montaż. Zaufaj doświadczeniu stolarzy z Meb-Dom."
        />
        <meta
          name="keywords"
          content="meble na wymiar, usługi stolarskie, kuchnie na wymiar, szafy na wymiar, Meb-Dom"
        />
        <meta property="og:title" content="Usługi stolarskie - Meb-Dom" />
        <meta property="og:description" content="Tworzymy meble dopasowane do Twoich potrzeb – od projektu po montaż." />
      </Helmet>

      <div className="container">
        <div className="section-title">
          <h2>NASZE USŁUGI</h2>
          <p>
            Tworzymy meble, które nie tylko wyglądają doskonale, ale są też maksymalnie funkcjonalne. Oferujemy kompleksowe rozwiązania od projektu po montaż — w Twoim stylu, pod Twoje wnętrze.
          </p>
        </div>
        <div className="row service-wrapper">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "Ładowanie..."}
        </div>
      </div>
    </div>
  );
};
