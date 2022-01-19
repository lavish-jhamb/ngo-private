import React from 'react';
import "./RegType.css"
import MainLayout from '../../Layout/Main';

export default function RegType() {
  return <MainLayout>
  <div>
      <h4 className='regtype'>Register as</h4>
      <div className='regtype1 '>
      <button class="btn2 btn1-primary my-3 " type="submit"><i class="fas fa-building"></i></button>
      <button class="btn2 btn1-primary my-3 " type="submit"><i class="fas fa-users"></i></button>
      </div>
      <div class="d-grid gap-2 col-8 mx-auto my-5 btn4">
  <button class="btn3 btn-primary " type="button"><i class="fas fa-share-alt" ></i>  Share this App</button>
</div>
  </div>
  </MainLayout>
}
