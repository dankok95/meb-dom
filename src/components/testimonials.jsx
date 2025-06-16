import React from "react";
import { Helmet } from "react-helmet";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <Helmet>
        <title>Opinie klientów – Meb-Dom | Meble na wymiar</title>
        <meta
          name="description"
          content="Poznaj opinie naszych zadowolonych klientów. Sprawdź, co mówią o współpracy z Meb-Dom – meble na wymiar z gwarancją jakości."
        />
        <meta
          name="keywords"
          content="opinie klientów, Meb-Dom, meble na zamówienie, rekomendacje, meble na wymiar"
        />
        <meta property="og:title" content="Opinie klientów – Meb-Dom" />
        <meta
          property="og:description"
          content="Zobacz, co klienci mówią o naszych usługach stolarskich – jakość, terminowość i zadowolenie."
        />
      </Helmet>

      <div className="container">
        <div className="section-title text-center">
          <h2>Opinie klientów</h2>
          <p>
            Zadowolenie naszych klientów jest dla nas najważniejsze.
            <br />
            Przeczytaj, co mówią o naszej pracy – wybrane opinie pochodzą z serwisu Google.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
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
