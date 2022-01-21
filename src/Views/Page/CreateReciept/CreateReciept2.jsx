import React from 'react';
import './CreateReciept2.css'

export default function () {
  return <>
  <div className="head">
    <div className="container-fluid pb-5 pt-3">
        <h3 className='recieptheading'><i class="fas fa-chevron-left"></i>   Create Reciept</h3>
     </div>
   </div>
   <div className='createrecieptdetail'>
       <span className='createrecieptdetailp1' >Donor Details</span> 
       <span className='createrecieptdetailp2'>Step 2 of 2</span>
      
   </div>
   <div>
   <div className="input-groupcreate2 pb-5 pt-4">

<input type="number" className="form-controlcreate2 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"placeholder='Amount(in Rs.)'></input>
</div>
<div className="dropdown pb-5">
  <button className="btndown btndownbutton-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Payment Method  <i class="fas fa-chevron-down"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div>
<div class="dropdown pb-5">
  <button className="btndown btndownbutton-secondary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Select Category <i class="fas fa-chevron-down"></i>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div>
<div class="input-group1 pb-5 pt-4">

<input type="text" class="form-controlcreate2
 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"placeholder='Additional Note(Optional)'></input>
</div>



</div>
<div className="d-grid nextcreatereciept my-6  mx-auto ">
<button className=" btncreatereciept  btncreatereciept-primary" type="button">Create Reciept  <span className='nexticon'><i class="fas fa-chevron-right"></i></span></button>

</div>


   </>
}
