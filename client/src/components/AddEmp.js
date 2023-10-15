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
    <label htmlFor="name" className="form-label">Full name</label>
    <input type="text" className="form-control w-50" id="name"/>
    </div>
    <div className="form-group col-md-6">
      <label for="email">Email</label>
      <input type="email" className="form-control w-50" id="email"/>
    </div>
  </div>
  <div className="form-row d-flex">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control w-50" id="address"/>
    </div>
    <div className="form-group col-md-6">
      <label for="dob">Date of Birth</label>
      <input type="date" className="form-control w-50" id="dob"/>
    </div>
  </div>
  <div className="form-row d-flex">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
      <label for="pno">Contact no</label>
      <input type="tel" className="form-control w-50" id="pno"/>
    </div>
    <div className="form-group col-md-6">
      <label for="apno">Alternate contact no</label>
      <input type="tel" className="form-control w-50" id="apno"/>
    </div>
  </div>

  <div className="form-row d-flex" style={{marginLeft:"20px"}}>
  <div className="form-group col-md-6">
      <label for="pos">Position</label>
      <input type="text" className="form-control w-50" id="pos"/>
    </div>
    <div className="mb-3 form-check-inline d-flex align-items-center">
                <input type="checkbox" className="form-check-input" id="pt" style={{marginRight:"10px"}}/>
                <label className="form-check-label mr-100" for="pt">Part time</label>

                <input type="checkbox" className="form-check-input" id="ft" style={{marginLeft:"20px",marginRight:"10px"}}/>
                <label className="form-check-label" for="ft">Full time</label>
              </div>
  </div>

  
  <div className="form-row d-flex mb-3">
  <div className="form-group col-md-6" style={{marginLeft:"20px"}}>
      <label for="hrs">Average hours</label>
      <input type="number" className="form-control w-50" id="hrs"/>
    </div>
  </div>
  <div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label for="hrs">Availability</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label for="hrs">From</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label for="hrs">To</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label for="hrs">From</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label for="hrs">To</label>
    </div>
  </div>
  <div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Sunday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Monday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Tuesday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Wednesday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Thursday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Friday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-flex mb-3">
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Saturday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

 
  <div className="form-group">
 
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
      {/* <form style={{marginTop:"80px",marginLeft:"30px"}}>
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full name</label>
                  <input type="text" className="form-control w-25" id="name"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control w-25" id="email"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of birth</label>
                  <input type="date" className="form-control w-25" id="dob"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control w-25" id="address"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="pno" className="form-label">Phone no</label>
                  <input type="tel" className="form-control w-25" id="pno"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="apno" className="form-label">Alternate phone no</label>
                  <input type="tel" className="form-control w-25" id="apno"/>
              </div>
              <div className="mb-3">
                  <label htmlFor="pos" className="form-label">Position</label>
                  <input type="text" className="form-control w-25" id="pos"/>
              </div>
              <div className="mb-3 form-check-inline d-flex align-items-center">
                <input type="checkbox" className="form-check-input" id="pt" style={{marginRight:"10px"}}/>
                <label className="form-check-label mr-100" for="pt">Part time</label>

                <input type="checkbox" className="form-check-input" id="ft" style={{marginLeft:"20px",marginRight:"10px"}}/>
                <label className="form-check-label" for="ft">Full time</label>
              </div>
              <div className="mb-3">
                  <label htmlFor="avgHrs" className="form-label">Average hours range</label>
                  <input type="text" className="form-control w-25" id="avgHrs"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form> */}
    </div>
  )
}

export default AddEmp
