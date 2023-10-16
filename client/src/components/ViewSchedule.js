import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewSchedule=()=> {
  return (
    <div>
      <div style={{marginTop:"100px"}}>
</div>
    
{/* //style={{marginTop:"100px",marginLeft:"25px",marginBottom:"50px"}} */}
        <div className="dropdown" style={{marginLeft:"25px",marginBottom:"50px"}}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Week
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <NavLink className="dropdown-item" to="/">Current</NavLink>
            <NavLink className="dropdown-item" to="/addEmp">From 23/09 to 01/10</NavLink>
            <NavLink className="dropdown-item" to="/editEmp">From 02/10 to 08/10</NavLink>
          </div>
      </div>
      <table className="table table-striped" style={{marginTop:"25px",marginLeft:"20px",marginRight:"0px",width:"1230px"}}>
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee</th>
      <th scope="col">Sunday</th>
      <th scope="col">Monday</th>
      <th scope="col">Tuesday</th>
      <th scope="col">Wednesday</th>
      <th scope="col">Thursday</th>
      <th scope="col">Friday</th>
      <th scope="col">Saturday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Emp1</td>
      <td>Time1</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Time1</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Time1</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
      <td>Time</td>
    </tr>
  </tbody>
    </table>
    </div>
  )
}

export default ViewSchedule
