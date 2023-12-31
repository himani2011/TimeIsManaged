import React, { useState } from 'react'
import TimePicker from "react-bootstrap-time-picker";

const AddEmp=()=> {

  const [time,setTime]=useState();

  const handleTime=(selectedTime)=> {
    console.log("time selected ", selectedTime);
    setTime(selectedTime);
  }

  return (
    <div>
        
    <form style={{marginTop:"100px"}}>

  <div className="form-row d-flex">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
    <label htmlFor="name" className="form-label mb-1">Full name</label>
    <input type="text" className="form-control w-50" id="name" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
    <div className="form-group col-md-6 mb-3">
      <label htmlFor="email" className="mb-1">Email</label>
      <input type="email" className="form-control w-50" id="email" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
  </div>
  <div className="form-row d-flex">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label mb-1">Address</label>
    <input type="text" className="form-control w-50" id="address" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
    <div className="form-group col-md-6 mb-3">
      <label htmlFor="dob" className="mb-1">Date of Birth</label>
      <input type="date" className="form-control w-50" id="dob" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
  </div>
  <div className="form-row d-flex">
  <div className="form-group col-md-6 mb-3" style={{marginLeft:"20px"}}>
      <label htmlFor="pno" className="mb-1">Contact no</label>
      <input type="tel" className="form-control w-50" id="pno" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="apno" className="mb-1">Alternate contact no</label>
      <input type="tel" className="form-control w-50" id="apno" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
  </div>

  <div className="form-row d-flex" style={{marginLeft:"20px"}}>
  <div className="form-group col-md-6 mb-3">
      <label htmlFor="pos" className="mb-1">Position</label>
      <input type="text" className="form-control w-50" id="pos" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
    <div className="mb-3 form-check-inline d-flex align-items-center">
                <input type="checkbox" className="form-check-input" id="pt" style={{marginRight:"10px",borderColor:"#36454F",borderWidth:"1.5px"}}/>
                <label className="form-check-label mr-100 mb-1" htmlFor="pt">Part time</label>

                <input type="checkbox" className="form-check-input" id="ft" style={{marginLeft:"20px",marginRight:"10px",borderColor:"#36454F",borderWidth:"1.5px"}}/>
                <label className="form-check-label mb-1" htmlFor="ft">Full time</label>
              </div>
  </div>

  
  <div className="form-row d-flex mb-3">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs"  className="mb-1">Average hours</label>
      <input type="number" className="form-control w-50" id="hrs" style={{borderColor:"#36454F",borderWidth:"1.5px"}}/>
    </div>
  </div>
  <div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs" className="mb-1">Availability</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs" className="mb-1">From</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs" className="mb-1">To</label>
    </div>
  </div>
  <div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Sunday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Monday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Tuesday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Wednesday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Thursday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Friday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  {/* form-row d-grid mb-3  style={{gridTemplateColumns:'repeat(3,1fr)',gridGap:'-10px'}} */}
  <div className="form-group col-md-3" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Saturday</label>
    </div>
    <div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group col-md-3" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="d-flex mb-3" style={{alignItems:"center"}}>
  <label htmlFor="info" className="form-group col-md-3" style={{marginLeft:"20px",marginTop:"15px",marginRight:"5px"}}>Additional Availability Information</label>
  <textarea className="form-group col-md-6" id="info" rows="3" style={{borderColor:"#36454F",borderWidth:"1.5px"}}></textarea>
  </div>
  
  <center><button type="submit" className="btn btn-dark col-md-6" style={{margin:"20px",padding:"15px"}}>Add Employee</button></center>
</form>
    </div>
  )
}

export default AddEmp
