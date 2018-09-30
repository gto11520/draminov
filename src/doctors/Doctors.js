import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Doctors = () => (
  <div className="doctors">
    <div className="banner">
    </div>
    <div className="creteria">
      <div className="row">
        <div className="col-md-8">
          <h3>Meet Our Workers’ Compensation Doctors</h3>
          <div className="divider"></div>
          <p style={{marginTop: '0.75rem'}}>
            Dr. Aminov is a Diplomat in Internal Medicine, certified by The American Board of Internal Medicine. Dr. Aminov served his residency in Long Island Jewish Medical Center and in Queens Hospital Center. Upon Completion of his residency, Dr. Aminov established his practice, Lev Aminov Internal Medicine, P.C. in 1995 located in Queens, New York. As an internist, Dr. Aminov focuses on the diagnosis and treatment of conditions that affect the adult population – both acute and chronic. Dr. Aminov specializes in all types of personal injuries, no-fault injuries, worker’s compensation injuries, and currently has practices at two locations.
          </p>
          <p>
            Dr. Aminov is fully licensed in New York with a growing list of accepted insurance companies for treatment of patients for Worker’s Compensation injuries, no-fault (car accident) injury and private practice. With a multidisciplinary approach and over 20 years of experience, patients are given a sense of comfort and are treated with exemplary care.
          </p>
        </div>
        <div className="col-md-4">
          <img className="w-100" src="./images/original_doctor.jpg" />
        </div>
      </div>
    </div> 
    <Footer />
  </div>
);

export default Doctors;