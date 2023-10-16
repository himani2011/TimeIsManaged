import React,{useState} from 'react'
import TimePicker from 'react-bootstrap-time-picker';

const ChangeAvail=()=> {

    const [time,setTime]=useState();

  const handleTime=(selectedTime)=> {
    console.log("time selected ", selectedTime);
    setTime(selectedTime);
  }

  return (
    <div>
        <form style={{marginTop:"100px"}}>
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
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs" className="mb-1">From</label>
    </div>
    <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
      <label htmlFor="hrs" className="mb-1">To</label>
    </div>
  </div>
  <div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Sunday</label>
    </div>
    <div className="form-group" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Monday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Tuesday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Wednesday</label>
  </div>
  <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Thursday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Friday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

<div className="form-row d-grid mb-3" style={{gridTemplateColumns:'repeat(5,1fr)',gridGap:'-10px'}}>
  <div className="form-group flex-fill" style={{marginLeft:"20px"}}>
    <label htmlFor="address" className="form-label">Saturday</label>
    </div>
    <div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
<div className="form-group flex-fill" style={{marginRight:"10px"}}>
  <TimePicker style={{borderColor:"#36454F",borderWidth:"1.5px"}}
          start="00:00"
          end="24:00"
          step={30}
          onChange={handleTime}
          value={time}
  />
</div>
</div>

 
  
  <center><button type="submit" className="btn btn-dark col-md-6" style={{margin:"20px",padding:"15px"}}>Edit Availability</button></center>
</form>      
    </div>
  )
}

export default ChangeAvail
