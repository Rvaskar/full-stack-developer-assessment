import React, {useEffect} from 'react'
import '../App.css'
import DisplayTask from './Tasks/DisplayTask'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('Profile')){
      navigate("/Auth")
    }
  }, [navigate]);

  return (
    <div className='main-container'>
      <DisplayTask/>
    </div>
  );
}

export default Home;
