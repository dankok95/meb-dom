import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Opinie klientów</h2>
          <p>
            Zadowolenie naszych klientów jest dla nas najważniejsze.<br/>Przeczytaj, co mówią o naszej pracy – wybrane opinie pochodzą z serwisu Google.
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
