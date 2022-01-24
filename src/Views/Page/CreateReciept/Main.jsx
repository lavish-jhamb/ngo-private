import React,{useState} from 'react';
import StepOne from './Step1/Index';
import StepTwo from './Step2/Index';

 function MainCreateReciept() {
   const [page,setPage]=useState(1);
   
   const Steps = {
    1:StepOne,
    2:StepTwo,
  };

  const ReceiptForm = Steps[page];
  return  <ReceiptForm setPage={setPage}/>
}
export default MainCreateReciept;