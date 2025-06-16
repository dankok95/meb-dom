import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
  city: "",
};

export const Contact = (props) => {
  const [{ name, email, message, phone, city }, setState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Wprowadź poprawny adres email.";
    }

    // Phone must have exactly 9 digits
    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(phone)) {
      newErrors.phone = "Numer telefonu musi zawierać dokładnie 9 cyfr.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error for the field
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs
      .sendForm("service_160wseg", "template_45d5307", e.target, "NU6RHe7HVFjg1hPFJ")
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Skontaktuj się z nami</h2>
                <p>Czekamy na Twoją wiadomość — odezwiemy się jak najszybciej.</p>
              </div>
              <form name="sentMessage" noValidate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Imię"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="form-control"
                        placeholder="Miasto"
                        required
                        onChange={handleChange}
                        value={city}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Numer telefonu"
                        onChange={handleChange}
                        value={phone}
                      />
                      {errors.phone && <small className="error-message">{errors.phone}</small>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                      />
                      {errors.email && <small className="error-message">{errors.email}</small>}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Wiadomość"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informacje kontaktowe</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adres
                </span>
                {props.data ? props.data.address : "Ładowanie..."}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefon
                </span>{" "}
                {props.data ? (
                  <a href={`tel:${props.data.phone}`}>{props.data.phone}</a>
                ) : (
                  "Ładowanie..."
                )}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope"></i> Email
                </span>{" "}
                {props.data ? (
                  <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
                ) : (
                  "Ładowanie..."
                )}
              </p>
            </div>
          </div>

          {/* ... reszta (informacje kontaktowe, social media, footer) zostaje bez zmian ... */}

          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"} className="social-media">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"} className="social-media">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} className="social-media">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Dziękujemy!</h4>
            <p>Twoja wiadomość została wysłana.</p>
            <button
              className="btn btn-custom"
              onClick={() => {
                setShowModal(false);
                clearState();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div id="footer">
        <div className="container text-center">
          <p>&copy; Meb-Dom 2025 | Wszelkie prawa zastrzeżone</p>
        </div>
      </div>
    </div>  
  );
};
