import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import slide3 from '../assets/home-slider-3.jpg';
import slide4 from '../assets/home-slider-4-v1.jpg'
import slide5 from '../assets/home-slider-5.jpg'
import GoogleMapReact from 'google-map-react';

const Home = () => (
  <div className="home">
    <div className="banner-section">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="./images/home-slider-3.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/home-slider-4-v1.jpg"  alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/home-slider-5.jpg"  alt="First slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="booking-section">
      <div className="row">
        <div className="col-md-3 first-office">
          <h3><b>Queens Office</b></h3>
          <div>
            <span><i className="fas fa-home"></i></span>
            <span>9851 64th Ave
            Ste 1G
            Rego Park, NY 11374
            Rego Park, Forest Hills</span>
          </div>
          <div>
            <span><i className="fas fa-phone"></i></span>
            <span>(718) 275-6968</span>
          </div>
        </div>
        <div className="col-md-3 first-office schedule">
          <h3><b>Opening Hours</b></h3>
          <div className="d-flex flex-row justify-content-between"><div>Monday</div> <div>9:00am – 7:00pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Tuesday</div> <div>9:00am – 7:00pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Wednesday</div> <div>9:00am – 6:00pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Thursday</div> <div>9:00am – 7:00pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Friday</div> <div>9:00am – 4:00pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Saturday, Sunday</div> <div>closed</div></div>
        </div>
        <div className="col-md-3 second-office">
          <h3><b>Baldwin Office</b></h3>
          <div>
            <span><i className="fas fa-home"></i></span>
            <span>2270 Grand Ave Baldwin, NY 11510</span>
          </div>
          <div>
            <span><i className="fas fa-phone"></i></span>
            <span>(516) 379-0000</span>
          </div>
        </div>
        <div className="col-md-3 second-office schedule">
          <h3><b>Opening Hours</b></h3>
          <div className="d-flex flex-row justify-content-between"><div>Monday</div> <div>9:00am – 6:30pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Tuesday</div> <div>9:00am – 2:30pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Wednesday</div> <div>9:00am – 6:30pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Thursday</div> <div>9:00am – 6:30pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Friday</div> <div>9:00am – 2:30pm</div></div>
          <div className="d-flex flex-row justify-content-between"><div>Saturday, Sunday</div> <div>closed</div></div>
        </div>
      </div>
    </div>
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>Welcome to Lev Aminov the Worker’s Comp Doctor</h3>
            <h5>Reliable Doctors Equals Real Results</h5>
            <p className="muted">
              Dr. Aminov helps your work-related injuries with immediate treatment. Remember almost every worker in New York qualifies for Workers’ Compensation coverage. Doctor Aminov will help guide the proper procedure and process for you recover and feel safe as possible. 
            </p>
            <div>
              <img className="w-100" src="./images/about.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="specialties-section">
      <div className="heading">
        <h1 className="text-center">Specialties</h1>
        <p className="text-center">
          We offer more than 20+ specialty providers under one roof for your convenience. Here are just some of the treatment options you can expect when working with our office for your Workers’ Compensation care and treatment.
        </p>
      </div>
      <div className="cards-holder d-flex flex-wrap justify-content-between text-center">
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/pain-management-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Pain Management</h4>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./images/pt3.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>lnternal Medicine</h4>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/neurology-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Neurology</h4>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./images/pt2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Physical Therapy</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-section">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <div className="details">
              <h3 className="m-t">Queens Office</h3>
              <h5>Contact Information</h5>
              <small>Lev Aminov Worker's Compensation Doctor</small><br />
              <small>9851 64th Ave Ste 1G Rego Park, NY 11374 Rego Park, Forest Hills</small><br />
              <small>(718) 275-6968</small><br />
            </div>
            <div className="map" id="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJfIq8jUIH5uZ9bLHqwk7HJ6cEzCL_No0' }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={11}>
              </GoogleMapReact>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-wrap flex-row justify-content-between">
            <div className="details">
              <h3 className="m-t">Baldwin Office</h3>
              <h5>Contact Information</h5>
              <small>Lev Aminov Worker's Compensation Doctor</small><br />
              <small>2270 Grand Ave Baldwin, NY 11510</small><br />
              <small>(516) 379-0000</small><br />
            </div>
            <div className="map" id="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDJfIq8jUIH5uZ9bLHqwk7HJ6cEzCL_No0' }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={11}>
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;