import React from 'react'

const Profile = () => {
  return (
   
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
  <div className="title-group mb-3">
    <h1 className="h2 mb-0">Profile</h1>
  </div>
  <div className="row my-4">
    <div className="col-lg-12 col-12">
      <div className="custom-block custom-block-profile">
        <div className="row">
          <div className="col-lg-12 col-12 mb-3">
            <h6>General</h6>
          </div>
          <div className="col-lg-3 col-12 mb-4 mb-lg-0">
            <div className="custom-block-profile-image-wrap">
              <img
                src="images/medium-shot-happy-man-smiling.jpg"
                className="custom-block-profile-image img-fluid"
                alt=""
              />
              <a
                href="setting.html"
                className="bi-pencil-square custom-block-edit-icon"
              />
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <p className="d-flex flex-wrap mb-2">
              <strong>Name:</strong>
              <span>Thomas Edison</span>
            </p>
            <p className="d-flex flex-wrap mb-2">
              <strong>Email:</strong>
              <a href="#">thomas@site.com</a>
            </p>
            <p className="d-flex flex-wrap mb-2">
              <strong>Phone:</strong>
              <a href="#">(60) 12 345 6789</a>
            </p>
            <p className="d-flex flex-wrap mb-2">
              <strong>Birthday:</strong>
              <span>March 5, 1992</span>
            </p>
            <p className="d-flex flex-wrap">
              <strong>Address:</strong>
              <span>551 Swanston Street, Melbourne</span>
            </p>
          </div>
        </div>
      </div>
      <div className="custom-block custom-block-profile bg-white">
        <h6 className="mb-4">Card Information</h6>
        <p className="d-flex flex-wrap mb-2">
          <strong>User ID:</strong>
          <span>012 395 8647</span>
        </p>
        <p className="d-flex flex-wrap mb-2">
          <strong>Type:</strong>
          <span>Personal</span>
        </p>
        <p className="d-flex flex-wrap mb-2">
          <strong>Created:</strong>
          <span>July 19, 2020</span>
        </p>
        <p className="d-flex flex-wrap mb-2">
          <strong>Valid Date:</strong>
          <span>July 18, 2032</span>
        </p>
      </div>
    </div>
  </div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12">
          <p className="copyright-text">
            Copyright © Convert React - Design:{" "}
            <a rel="sponsored" href="/" target="_blank">
              Thuan Nguyen
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</main>

  )
}

export default Profile
