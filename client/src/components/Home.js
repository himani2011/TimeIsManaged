import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home=()=> {

    const navigateTo=useNavigate();
  return (
    <div>
        <div className='d-flex justify-content-between' style={{margin:"200px",cursor:"pointer"}}>
          <div className="card" style={{ width: "18rem", textAlign:"center" }} onClick={()=>navigateTo('/addEmp')}>
              <div className="card-body">
                  <h5 className="card-title">Add Employee</h5>
              </div>
          </div>
          <div className="card" style={{ width: "18rem", textAlign:"center" }}>
              <div className="card-body">
                  <h5 className="card-title">Change Availability</h5>
              </div>
          </div>
          <div className="card" style={{ width: "18rem", textAlign:"center" }}>
              <div className="card-body">
                  <h5 className="card-title">View Schedule</h5>
              </div>
          </div>
          </div>
    </div>
  )
}

export default Home
