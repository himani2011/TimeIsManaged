import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home=()=> {

    const navigateTo=useNavigate();
  return (
    <div>
        <div className='d-flex' style={{flexDirection:"column"}}>
        <div className='d-flex justify-content-between' style={{margin:"200px 200px 10px 200px",cursor:"pointer"}}>
          <div className="card" style={{ width: "18rem", textAlign:"center", margin:"10px" }} onClick={()=>navigateTo('/addEmp')}>
              <div className="card-body">
                  <h5 className="card-title">Add Employee</h5>
              </div>
          </div>
          <div className="card" style={{ width: "18rem", textAlign:"center", margin:"10px" }} onClick={()=>navigateTo('/changeAvail')}>
              <div className="card-body">
                  <h5 className="card-title">Change Availability</h5>
              </div>
          </div>
          <div className="card" style={{ width: "18rem", textAlign:"center", margin:"10px" }} onClick={()=>navigateTo('/viewSchedule')}>
              <div className="card-body">
                  <h5 className="card-title">View Schedule</h5>
              </div>
          </div>
          <div className="card" style={{ width: "18rem", textAlign:"center", margin:"10px" }} onClick={()=>navigateTo('/editEmp')}>
              <div className="card-body">
                  <h5 className="card-title">Edit Employee details</h5>
              </div>
          </div>
          </div>
        <div className='d-flex justify-content-center' style={{cursor:"pointer"}}>
        <div className="card" style={{ width: "25rem", textAlign:"center", margin:"0px 200px 0px 200px",backgroundColor:"gray"}} onClick={()=>navigateTo('/createSchedule')}>
              <div className="card-body">
                  <h5 className="card-title">Create Schedule</h5>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home
