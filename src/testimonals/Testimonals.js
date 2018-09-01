import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Testimonals = () => (
  <div className="testimonals">
    <div className="banner">
    </div>
    <div className="patients-reviews">
      <div className="row">
        <div className="col-md-8">
          <h3>Here’s What Some Of Our Patients Say</h3> 
        </div>
        <div className="col-md-4">
          <img className="w-100" src="https://workerscompdrqueens.com/wp-content/uploads/2018/05/couple-browsing-the-internet-v2.jpg" />
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

export default Testimonals;