import React from 'react';
import '../../App.css';
// import '../../public/assets/css/style.css'
function AddStudent() {
  return (
    <div className="row">
      <div className="col-md-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Default form</h4>
            <p className="card-description"> Basic form layout </p>
            <form className="forms-sample">
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Username</label>
                <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
              </div>
              <div className="form-check">
                <label className="form-check-label text-muted">
                  <input type="checkbox" className="form-check-input" required />
                  <a href="#">Remember me</a>
                  <i className="input-helper" /></label>
              </div>
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button className="btn btn-light">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
);
}

export default AddStudent;