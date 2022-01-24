import React from 'react';
import './CreateReciept.css';
import MainLayout from '../../../Layout/Layout2/Main';


function CreateReciept(props) {
  const {CreateReciept1}=props;
  const CreateRecieptNext=()=>{
    CreateReciept1((Create)=>Create+1);

  }
  return (<>
    <MainLayout title="Create Reciept">
  <div className='createrecieptwrapper'>
      <div className='createrecieptcontainer'>
      
      <div className="headercreatereciept1">
            <h2>Donor Details</h2>
            <p>Step 1 of 2</p>
      </div>
      <div className='createrecieptformcontainer'>
       <div className='createrecieptcontainer'>
    
     <input placeholder="Phone number" type="number" />
     <input placeholder="Name" type="text" />
     <input placeholder="Email" type="text" />
     <input placeholder="Pan Number" type="text" />
     <input placeholder="Address" type="text" />
     </div>
     <div className="iconcreatereciept1">
              <button onClick={CreateRecieptNext} type="submit">
                Next
                <span>
                <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
   </div>
 </div>
  </div>
</MainLayout>
      </>
  )
}
export default CreateReciept;