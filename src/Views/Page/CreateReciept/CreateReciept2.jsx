import React from 'react';
import MainLayout from '../../Layout/Layout2/Main';
import './CreateReciept2.css'

export default function () {
  return <><MainLayout title="Create Reciept">
  <div className='createreciept2wrapper'>
 <main className='createreciept2container'>
   <form className='createreciept2form'>
     <label><span className='labelcreate2'> <span className='backicon2'><i class="fas fa-angle-left"></i></span>Donation Detail</span><span className='labelstep2'>Step 2 of 2</span></label>
     <input placeholder="Amount (in Rs.)" type="number" />
     <input placeholder="Select Category Method" type="text" />
     <input placeholder="Select Category "  type="text" />
     <input placeholder="Additional Note (Optional)" type="text" />
     
     <button  type="submit" className='buttoncreate2'>
             Create Reciept
      </button>
   </form>
 </main>
  </div>
  

</MainLayout>
   </>
}
