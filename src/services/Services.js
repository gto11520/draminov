import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => (
    <div className="services">
      <div className="banner">
      </div>
      <div className="our-services">
        <div className="container">
          <h3>Our Services</h3>
          <p>We offer a variety of diagnostic and treatment services for our patients</p>
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
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>We Specialize in Workers’ Compensation</h4>
              <p>
                Come meet the specialist that can help you begin to start feeling better. No matter how complex your workers’ compensation case may be, our doctors focus on creating a treatment plan which will move you toward the fullest recovery possible.
              </p>
              <p>
                Schedule your appointment today at (718) 260-6590.
              </p>
              <div className="divider"></div>
              <button className="btn btn-primary">Contact Us Now</button>
            </div>
            <div className="col-md-4">
              <img className="w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/04/service-page-image.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action-section">
      </div>
      <div className="process">
        <h2 className="text-center">Here's Our Process</h2>
        <p className="text-center">We make things easier for you.</p>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="step">
                <div className="icon">
                  <span className="fa-stack fa-2x">
                    <i className="fas fa-square fa-stack-2x"></i>
                    <i className="far fa-edit fa-stack-1x fa-inverse"></i>
                  </span>
                </div>
                Step 1 <br />
                <small>call or submit info</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step">
              Step 1
              </div>
            </div>
            <div className="col-md-3">
              <div className="step">
              Step 1
              </div>
            </div>
            <div className="col-md-3">
              <div className="step">
              Step 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="e-book">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4>
                Need More Information? Here's Our Free Guide That'll Help You Avoid The Most Costly Mistakes Patients Make!
              </h4>
              <p>
                If you're hurting from an injury related to your job, we know you must be feeling overwhelmed. But we have good news for you: Our e-book solves the biggest questions about getting treatment for your accident and injuries. Click the button below to get started!
              </p>
              <button className="btn btn-primary">
                CLICL HERE TO GET THE E-BOOK
              </button>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-4">
              <img src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/wc-ebook-image-300x394.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
);

export default Services;