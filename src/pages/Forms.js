import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import {Container, FormSelect} from 'react-bootstrap';
import '../Components/pagescss/Forms.css';


const Forms = () => {
  return (
    <>
    <NavigationBar />
    <section className='forms'>
    <Container className='my-2 w-45 p-5  fluid' id="forms">
    <div id='text' className='text-center fw-bold'>
        <h3 className='text-success mt-4'>SENCHOLA UNIVERSITY</h3>
        <h4 className='mt-5 mb-5'>USER FORM</h4>
        </div>
    <form className="row g-3">
    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mb-3">
    <label htmlFor="inputFirstname" className="form-label">First Name</label>
    <input type="text" className="form-control" id="inputfirstname" placeholder="Enter Your First Name"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputLastname" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="inputlastname" placeholder="Enter Your First Name"/>
  </div>
  <div className="col-md-6 mb-3 ">
    <label htmlFor="inputEducationQualification" className="form-label">Education Qualification</label>
    <FormSelect id="inputEducationQualification" className="form-select" >
    <option>--Select your Degree--</option>
            <option>B.E</option>
            <option>B.Sc</option>
            <option>MCA</option>
            <option>M.E</option>
    </FormSelect>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputFathername" className="form-label">Father Name</label>
    <input type="text" className="form-control" id="inputfathername" placeholder="Enter Your Father Name"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputPhonenumber" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="inputphonenumber" placeholder="Enter Your Phone Number"/>
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputemail" placeholder="Enter Your Email"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputDate" className="form-label">Date of birth</label>
    <input type="date" className="form-control" id="inputdate" placeholder="Select DOB"/>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputBatch" className="form-label">Your Batch no</label>
    <FormSelect id="inputbatch" className="form-select">
      <option selected>--Select your Batch-</option>
      <option>...</option>
    </FormSelect>
  </div>
  <div className="col-md-6 mb-3">
    <label htmlFor="inputDomain" className="form-label">Your Domain</label>
    <FormSelect id="inputdomain" className="form-select" >
      <option selected>--Select Your Domain-</option>
      <option>...</option>
    </FormSelect>
  </div>
  
  <div className="col-md-6 mb-3">
    <label htmlFor="inputKyc" className="form-label">Upload KYC Documents</label>
    <input type="file" className="form-control" id="inputkyc"  placeholder="Chose Pdf File"/>
  </div>
  
  <div className="col-md-6 mb-3">
    <label htmlFor="inputResume" className="form-label">Upload formResume</label>
    <input type="file" className="form-control" id="inputresume"  placeholder="Chose File"/>
  </div>
  <div className="col-md-12 mb-3 bu">
    <button type="submit" id="fsubmit" className="btn btn-primary">Sign in</button>
  </div>
</form>
</Container>
    </section>
    </>
  )
}

export default Forms