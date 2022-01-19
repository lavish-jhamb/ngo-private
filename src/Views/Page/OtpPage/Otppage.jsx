import React from 'react';
import './Otppage.css'
import MainLayout from '../../Layout/Main';
 function Otppage() {

  return <MainLayout>
   <div><div className='input'>
      <input type="number" className='inputfield firstinput'></input>
      <input type="number" className='inputfield secondinput'></input>
      <input type="number" className='inputfield thirdinput'></input>
      <input type="number" className='inputfield fourthinput'></input>
  </div>
  <div class="d-grid gap-2 my-5 col-11 mx-auto">
  <button class="btn1 btn1-primary" type="button">Continue</button>
  <button type="button" class="btn btn-link  " >Resend OTP</button>
</div>
  </div>
  </MainLayout>;
}
export default Otppage;
