import React, { useState, useEffect } from 'react';
import './JoinRoom.css'

const Text = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const word = 'Welcome To Video Conferencing App';

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = text;

      if (isDeleting) {
        setText(currentText.slice(0, -1));
      } else {
        setText(word.slice(0, text.length + 1));
      }

      if (!isDeleting && text === word) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text, isDeleting, word]);

  return (
    <div className='text-automatic'>
      <h1 style={{color:'#F79F1F'}}>Hello! </h1>
      <h1 className='automatic'>{text}</h1>
    </div>
  );
};

export default Text;
