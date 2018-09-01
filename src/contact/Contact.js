import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleMapReact from 'google-map-react';

const Contact = () => (
  <div className="contact">
    <div className="banner">
      <div className="container">
        <h1>Contact Us</h1>
        <div>Our staff is available to assist you whenever you need. Call us or send us a message so we can help you out.</div>
      </div>
      <div className="bottom-divider"></div>
    </div>
    <div className="container address-section">
      <div className="row">
        <div className="col-md-6">
          <div className="contact-form">
            <h4>GET YOUR INJURY TREATED TODAY!</h4>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter phone" />
              </div>
              <div className="form-group">
                <textarea rows="5" className="form-control" placeholder="Brief description"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <small>
              We are committed to your privacy. By clicking “Submit” you agree that the phone number and/or email you provided may be used to contact you.
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <h1>Logo</h1>
          <h4>Medex Diagnostic & Treatment Center</h4>
          <div>111-29 Queens Blvd, Forest Hills, NY 11375</div>
          <div>(718) 260-6590</div>
          <div>help@workerscompdrqueens.com</div>

          <h4>Transportation</h4>
          <ul>
            <li>Transportation provided to eligible patients</li>
            <li>Free validated parking available (up to 2 hours)</li>
            <li>Subway: 75th Ave (F,E)</li>
            <li>Buses: (QM18, Q60)</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="facilities text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/icon-contact-car.png" />
            <div>
              AVAILABLE PARKING <br />
              <small>Park outside or in the garage</small>
            </div>
          </div>
          <div className="col-md-3">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/icon-contact-bus.png" />
            <div>
              BUS ROUTES <br />
              <small>Buses available at QM18 and Q60</small>
            </div>
          </div>
          <div className="col-md-3">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/icon-contact-train.png" />
            <div>
              TRAIN ROUTES <br />
              <small>F or E Train (75th Avenue Stop)</small>
            </div>
          </div>
          <div className="col-md-3">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/icon-contact-disabled.png" />
            <div>
              ACCESSIBILITY <br />
              <small>Our facility is fully accessible</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="map" id="map">
      <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJfIq8jUIH5uZ9bLHqwk7HJ6cEzCL_No0' }}
                defaultCenter={{
      lat: 59.95,
      lng: 30.33
    }}
                defaultZoom={11}
              >
      </GoogleMapReact>
    </div>
    <Footer />
  </div>
);

export default Contact;