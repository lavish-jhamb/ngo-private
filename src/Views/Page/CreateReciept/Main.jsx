import React,{useState} from 'react';
import CreateReciept from './Step1/Index';
import CreateReciept2 from './Step2/Index';

 function MainCreateReciept() {
   const [Create,CreateReciept1]=useState(1);
   const createSteps = {
    1:CreateReciept,
    2: CreateReciept2,
  };
  const CreateComponent = createSteps[Create];
  return  <CreateComponent Create={Create} CreateReciept1={CreateReciept1} />
}
export default MainCreateReciept;