import Navbar from './navbar';

function Profile() {
    return (
        <div>
          <Navbar></Navbar>
          <div className="container" style={{height: '80vh', paddingTop: '10vh'}}>
          <div className="row g-0 h-100 d-flex justify-content-center align-items-center">
              <div className="col-6 bg-white shadow-sm rounded p-3">
                  <div className="text-center fs-3">
                      Profile
                  </div>
                  <div>
                      <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                      <input type="text" className="form-control" id="username" readOnly={true} />
                  </div>
                  <div>
                      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                      <input type="text" className="form-control" id="email" placeholder="email@example.com" readOnly={true} />
                  </div>
              </div>
          </div>
        </div>
        </div>
      );
}

export default Profile;
