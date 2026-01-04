import { useState } from 'react'
import Header from './components/Header';
import ProfileList from './components/ProfileList';
import Footer from './components/Footer';

const App = () => {

  const [title]=useState("Profile For Dashboard");

  const foot = " 2025 @ All rights reserved";

  return (
    <>
    
<div>
  <Header dashboardtitle={title}/>
  <ProfileList/>
  <Footer datasfoot={foot}/>



</div>
    
    
    </>
  )
}

export default App