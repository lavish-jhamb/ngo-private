import React from 'react';
import './CreateReciept.css'

function CreateReciept() {
  return (<>
     <div className="head">
       <div className="container-fluid pb-5 pt-3">
           <h3 className='recieptheading'><button className='backbuttoncreate'><i class="fas fa-chevron-left"></i> </button>  Create Reciept</h3>
        </div>
      </div>
      <div className='createrecieptdetail'>
          <span className='createrecieptdetailp1' >Donor Details</span> 
          <span className='createrecieptdetailp2'>Step 1 of 2</span>
         
      </div>
      <div>
      <div class="input-group1 pb-5 pt-3">
  
  <input type="number" class="form-control1 " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Phone Number'></input>
</div>
<div class="input-group1 pb-5 ">
  
  <input type="text" className="form-control1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Name'></input>
</div>
<div class="input-group1 pb-5 ">
  
  <input type="text" className="form-control1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Email'></input>
</div>
<div class="input-group1 pb-5">
  
  <input type="text" className="form-control1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Pan Number'></input>
</div>
<div class="input-group1 pb-5 col-10 ">
  <input type="text" className="form-control1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Address'></input>
</div>
</div>
<div className="d-grid nextcreatereciept my-6  mx-auto ">
  <button className=" btncreatereciept  btncreatereciept-primary" type="button">Next    <span className='nexticon'><i class="fas fa-chevron-right"></i></span></button>

</div>

      </>
  )
}
export default CreateReciept;