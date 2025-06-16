import React from "react";
import { Helmet } from "react-helmet";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <Helmet>
        <title>Zespół stolarzy Meb-Dom – Poznaj naszych fachowców</title>
        <meta
          name="description"
          content="Poznaj nasz zespół – doświadczeni stolarze, którzy tworzą meble na wymiar z pasją i precyzją. Meb-Dom to ludzie, którym możesz zaufać."
        />
        <meta
          name="keywords"
          content="stolarz, zespół stolarzy, fachowcy meble na wymiar, Meb-Dom, rzemieślnicy"
        />
        <meta property="og:title" content="Zespół Meb-Dom" />
        <meta property="og:description" content="Za każdym projektem stoją doświadczeni stolarze – poznaj naszą ekipę." />
      </Helmet>

      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Poznaj nasz zespół</h2>
          <p>
            Za każdą realizacją stoją ludzie z pasją, doświadczeniem i zaangażowaniem. Sprawdź, kto tworzy Meb-Dom.
          </p>
        </div>
        <div id="row" className="row-team">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img src={d.img} alt={`Zdjęcie ${d.name}`} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : "Ładowanie..."}
        </div>
      </div>
    </div>
  );
};
