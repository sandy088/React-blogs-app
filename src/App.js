
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';

function App() {
  const {fetchBlog} = useContext(AppContext)

  useEffect(()=>{
     fetchBlog()
     
  },[])
  return (
    
    <div className="App my-[100px]">
    
      <Header/>
      
        <Blogs/>
      
      
      
      <Footer/>
  
        
     
      
    </div>
  );
}

export default App;
