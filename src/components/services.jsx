import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
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
                  {" "}
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
