import React from 'react'

const Guidelines = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Space */}
<<<<<<< HEAD
        <div className="col-md-10 p-4" style={{  marginTop: "60px" }}>
=======
        <div className="col-md-10 p-4" style={{ marginLeft: "270px", marginTop: "60px" }}>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 style={{ 
        marginLeft:"550px",
        fontSize: "32px", 
        fontWeight: "bold", 
        textTransform: "uppercase" 
        , className:"ms-auto me-auto"}}>Activity Points Guidelines</h3>
          </div>

          {/* Guidelines Card */}
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Important Guidelines for Students</h5>
              
              <div className="guidelines-list">
                <div className="guideline-item mb-3">
                  <div className="d-flex align-items-start">
<<<<<<< HEAD
                    {/* <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>1</span> */}
                    <p className="mb-0">1. Students must upload their certificate in a pdf format with activityname_rollnumber as the file name.</p>
=======
                    <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>1</span>
                    <p className="mb-0">Students must upload their certificate in a pdf format with activityname_rollnumber as the file name.</p>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
                  </div>
                </div>

                <div className="guideline-item mb-3">
                  <div className="d-flex align-items-start">
<<<<<<< HEAD
                    {/* <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>2</span> */}
                    <p className="mb-0">2. Students must read the guidelines pdf provided by the institute.</p>
=======
                    <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>2</span>
                    <p className="mb-0">Students must read the guidelines pdf provided by the institute.</p>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
                  </div>
                </div>

                <div className="guideline-item mb-3">
                  <div className="d-flex align-items-start">
<<<<<<< HEAD
                    {/* <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>3</span> */ }
                   <p className="mb-0">3. Student must request for activity points as and when they complete their participation and receive the certificates.</p> 
=======
                    <span className="badge bg-purple text-white me-2 p-2" style={{ backgroundColor: "#6f42c1" }}>3</span>
                    <p className="mb-0">Student must request for activity points as and when they complete their participation and receive the certificates.</p>
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
                  </div>
                </div>
              </div>

              {/* Additional Note */}
              <div className="alert alert-info mt-4">
                <i className="bi bi-info-circle me-2"></i>
                Note: Make sure to follow all guidelines strictly to ensure smooth processing of your activity points.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guidelines