import React from 'react';
import './CreateReciept.css';
import MainLayout from '../../Layout/Layout2/Main';

function CreateReciept() {
  return (<>
    <MainLayout title="Create Reciept">
  <div className='createrecieptwrapper'>
 <main className='createrecieptcontainer'>
   <form className='createrecieptform'>
     <label><span className='labelcreate1'>Donor Detail</span><span className='labelstep1'>Step 1 of 2</span></label>
     <input placeholder="Phone number" type="number" />
     <input placeholder="Name" type="text" />
     <input placeholder="Email" type="text" />
     <input placeholder="Pan Number" type="text" />
     <input placeholder="Address" type="text" />
     <button  type="submit" className='buttoncreate1'>
             Next <span className='nexticon'><i class="fas fa-chevron-right"></i></span>
      </button>
   </form>
 </main>
  </div>
</MainLayout>
      </>
  )
}
export default CreateReciept;