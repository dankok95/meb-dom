import React from "react";
import { Helmet } from "react-helmet";

export const Header = (props) => {
  const title = "Meb-Dom | Meble na wymiar – kuchnie, łazienki, szafy i więcej";
  const description =
    "Tworzymy meble na wymiar dopasowane do Twojego wnętrza – kuchnie, łazienki, szafy i inne realizacje. Zaufaj doświadczonym stolarzom z Meb-Dom.";

  return (
    <header id="header">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Ładowanie..."}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Ładowanie..."}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll main"
                >
                  Umów pomiar
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
