import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
            <img className="d-block w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-slider-5.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-slider-3.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-slider-4-v1.jpg" alt="Third slide" />
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
        <div className="col-md-3 book">
          <h3><b>Book Online</b></h3>
          <p>
            Book your next appointment online. Our online system is online 24/7 to get you scheduled.
          </p>
        </div>
        <div className="col-md-3 call">
          <h3><b>Call Us</b></h3>
          <p>Call: 1-718-260-6590 <br />
          Toll Free: 1-718-260-6590</p>
        </div>
        <div className="col-md-3 opening-hours">
          <h3><b>Opening Hours</b></h3>
          <p>Monday – Friday 8:00 – 5:00<br />
          Saturday 9:00 – 5:00<br />
          Sunday 11:00 – 4:00</p>
        </div>
        <div className="col-md-3 visit">
          <h3><b>Visit Us</b></h3>
          <p>111-29 Queens Blvd<br />
          Forest Hills, NY 11375</p>
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
              <img className="w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-about-image-500x400.jpg" />
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
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/pain-management-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>lnternal Medicine</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/pain-management-250x250-1.jpg" alt="Card image cap" />
          <div className="card-body">
            <h4>Neurology</h4>
            <p className="card-text">Pain is a symptom which tells you that something is not right. There are better ways to handle work-related pain than taking over-the-counter medication. Schedule an appointment today to look at what other options may be available to you.</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="https://workerscompdrqueens.com/wp-content/uploads/2018/03/pain-management-250x250-1.jpg" alt="Card image cap" />
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
    </div>
    <div className="evaluation-section">
      <div  className="container">
        <div className="row align-items-center">
          <div className="col-md-6 left-banner">
            <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/home-form-image.jpg" />
            <div>
              <h1>Get Your Injury Evaluated!</h1>
              <p>
                Seeing the correct doctor or specialist is a critical component to your post-accident care. Request an appointment today by speaking with our friendly staff at (718) 260-6590 or by filling out the request form.
              </p>
            </div>
          </div>
          <div className="col-md-0"></div>
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
          <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-section">
      <div className="row">
        <div className="col-md-6">
          <div className="details">
            <h3 className="m-t">Contact Information</h3>
            <small>Medex Diagnostic & Treatment Center</small><br />
            <small>111-29 Queens Blvd, Forest Hills, NY 11375</small><br />
            <small>(718) 260-6590</small><br />
            <small>help@workerscompdrqueens.com</small><br />

            <h3 className="m-t">Transportation</h3>
            <ul>
              <li>Transportation provided to eligible patients</li>
              <li>Free validated parking available</li>
              <li>Subway: 75th Ave (F,E)</li>
              <li>Buses: (QM18, Q60)</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 map">

        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;