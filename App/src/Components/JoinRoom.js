import React from 'react'
import './JoinRoom.css'
import { Button } from '@mui/material';
import welcome from '../assets/welcomepic.png';
import {useNavigate} from 'react-router-dom';
import Text from './Text'

export default function JoinRoom() {
  const navigate = useNavigate();
  const handleclick = () =>{
    navigate(`/room/${Date.now()}`)
  };
  return (
    <>
    <Text />
    <div className='top-class'>
    <div className='body-container'>
      <div className='content-area'>
        <img src={welcome} alt='welcome' className='welcome-img' />
        </div>
      <div className='button-conatiner'>
       <Button variant="contained" className='button' color='warning' onClick={handleclick}>Start Video-Conferencing with friends</Button>
      </div>
      </div>
      </div>
      </>
  )
}
