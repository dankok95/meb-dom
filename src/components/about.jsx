import React from "react";
import { Helmet } from "react-helmet";

export const About = (props) => {
  const title = "O nas - Stolarz Meb-Dom | Meble na wymiar i renowacja drewna";
  const description =
    "Poznaj naszą firmę – profesjonalny stolarz oferujący meble na wymiar i renowację drewna. Jakość i doświadczenie gwarantowane.";
  const aboutText = props.data ? props.data.paragraph : "Ładowanie......";

  return (
    <div id="about">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Możesz dodać więcej meta tagów np. keywords, canonical itp. */}
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt="Stolarz wykonujący meble na wymiar"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h1>O nas</h1>
              <p>{aboutText}</p>
              <h2>Dlaczego warto wybrać nas?</h2>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "Ładowanie..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "Ładowanie..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
