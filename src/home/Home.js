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
          <h3><b>First Office</b></h3>
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
          <h3><b>Second Office</b></h3>
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
          <div className="col-md-8">
            <h3>Welcome to Workers’ Comp Doctor Queens</h3>
            <h5>Experienced Doctors. Real Outcomes.</h5>
            <p className="muted">
              Work-related injuries require immediate treatment. Your Workers’ Compensation doctor should file a preliminary medical report within 48 hours of the incident. Almost every worker in New York qualifies for Workers’ Compensation coverage. Our doctors create a judgment-free zone where the goal is to help you start feeling better right now.
            </p>
            <div className="divider m-t m-b"></div>
            <h3>Who we are</h3>
            <p className="muted">
              Medex is a full-service diagnostic and treatment center which offers Workers’ Compensation appointments with an emphasis on providing multiple specialties. This allows you to seek the treatment you require from a work-related injury immediately with confidence. With a convenient location in Forest Hills and world-class care provided, the goal of our team is to make sure you start feeling better today.
            </p>
            <p className="muted">
              Free validated parking is available (Up to 2 hours).
            </p>
            <button type="button" className="btn btn-primary">Read More About MEDEX</button>
          </div>
          <div className="col-md-4">
            <div>
              <img className="w-100" src="./images/pulse-check.jpg" />
            </div>
            <div className="description">
              <small><b>Medex Diagnostic and Treatment Center</b></small><br />
              <small>Workers’ Compensation Doctors Queens</small><br />
              <a href="">Plan a visit to our clinic</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="specialties-section">
      <div className="heading">
        <h1 className="text-center">Our Medical Specialties</h1>
        <p className="text-center">
          We offer more than 20+ specialty providers under one roof for your convenience. Here are just some of the treatment options you can expect when working with our office for your Workers’ Compensation care and treatment.
        </p>
      </div>
      <div className="cards-holder d-flex justify-content-between text-center">
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/pain-management-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Pain Management</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./images/pt3.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>lnternal Medicine</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/neurology-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Neurology</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="./images/pt2.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Physical Therapy</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="call-to-action-section">
    </div>
    <div className="meet-doctors-section">
      <div className="container">
        <h1 className="text-center m-b">Meet our Doctors</h1>
        <div className="d-flex justify-content-between">
          <div className="doc text-center">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/dr-alexander-gimpelevich_3777785b9b3ac50360e0b573a21f44ef.jpg" />
            <div>
              <b>Dr. Alex Gimpelevich</b> <br />
              <div>Physiatrist</div>
              <p>
                Dr. Gimpelevich was born and raised in Kharkov, Ukraine. Not one to shy away from an academic challenge, he obtained his bachelor’s degree in biochemistry from Columbia University in 1997. He derives great satisfaction from helping his patients not only get out of pain, but surpass their own expectations.
              </p>
              <button type="button" className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="doc text-center">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/dr-alexander-gimpelevich_3777785b9b3ac50360e0b573a21f44ef.jpg" />
            <div>
              <b>Dr. Alex Gimpelevich</b> <br />
              <div>Physiatrist</div>
              <p>
                Dr. Gimpelevich was born and raised in Kharkov, Ukraine. Not one to shy away from an academic challenge, he obtained his bachelor’s degree in biochemistry from Columbia University in 1997. He derives great satisfaction from helping his patients not only get out of pain, but surpass their own expectations.
              </p>
              <button type="button" className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="doc text-center">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/dr-alexander-gimpelevich_3777785b9b3ac50360e0b573a21f44ef.jpg" />
            <div>
              <b>Dr. Alex Gimpelevich</b><br />
              <div>Physiatrist</div>
              <p>
                Dr. Gimpelevich was born and raised in Kharkov, Ukraine. Not one to shy away from an academic challenge, he obtained his bachelor’s degree in biochemistry from Columbia University in 1997. He derives great satisfaction from helping his patients not only get out of pain, but surpass their own expectations.
              </p>
              <button type="button" className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="doc text-center">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/dr-alexander-gimpelevich_3777785b9b3ac50360e0b573a21f44ef.jpg" />
            <div>
              <b>Dr. Alex Gimpelevich</b> <br />
              <div>Physiatrist</div>
              <p>
                Dr. Gimpelevich was born and raised in Kharkov, Ukraine. Not one to shy away from an academic challenge, he obtained his bachelor’s degree in biochemistry from Columbia University in 1997. He derives great satisfaction from helping his patients not only get out of pain, but surpass their own expectations.
              </p>
              <button type="button" className="btn btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="review-section">
      <h1>We Promised To Take Care… And Delivered</h1>
      <h5>Hear what our patients tell about us</h5>

    </div>
    <div className="evaluation-section">
      <div  className="container">
        <div className="row align-items-center">
          <div className="col-md-5 left-banner">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-form-image.jpg" />
            <div>
              <h1>Get Your Injury Evaluated!</h1>
              <p>
                Seeing the correct doctor or specialist is a critical component to your post-accident care. Request an appointment today by speaking with our friendly staff at (718) 275-6968 or by filling out the request form.
              </p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 evaluation-form text-center">
            <h2>Get Your Injury Treated Today!</h2>
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
      </div>
    </div>
    <div className="faqs-section">
      <div className="container">
        <h1 className="text-center">Frequently Asked Questions</h1>
        <div className="faqs">
          
        </div>
      </div>
    </div>
    <div className="contact-section">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-row justify-content-between">
            <div className="details">
              <h3 className="m-t">First Office</h3>
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
          <div className="d-flex flex-row justify-content-between">
            <div className="details">
              <h3 className="m-t">Second Office</h3>
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