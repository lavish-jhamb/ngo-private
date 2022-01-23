import React from 'react';
import './DonorPage1.css';

export default function DonorPage1() {
  return <>
  <div>
      <div className='headerdonorpage1'>
          <h1 className='headingdonorpage1'>Together We Will, <br/>aao sath chle</h1>
      </div>
     
          <button className='filterbutton1'><span className='clockicon1'><i class="far fa-clock"></i></span> <span className='textfilter1'>Last 7 Days</span><span className='sortoptiondonor1'><i class="fas fa-sort"></i></span></button>
      </div>
      <div>
      <div><label>Showing Result for "7 Days"</label>
          <div>
              <h1><span className='ruppesigndonor1'><i class="fas fa-rupee-sign"></i></span ><span className='typedonation1'>Donation</span></h1>
          </div>
          <div>
              <span className='totaldonation1'>Total:<span className='totaldonationnumber'>Rs. 75000</span></span> <button className='buttontotaldonation'>View Detail</button>
          </div>
     </div>
     <div>
          <div>
              <h1><span className='handholding1'><i class="fas fa-hand-holding-usd"></i></span><span>Donar</span></h1>
          </div>
          <div>
              <span className='totaldonor1'>Total:<span className='totaldonornumber1'> 539</span> </span><button className='buttontotaldonor1'>View Detail</button>
          </div>
     </div>
 </div>
 </>
}
