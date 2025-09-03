'use client'; // only needed if you're using app directory

import { useEffect, useState } from 'react';

const greetings = [
  "Hello,", 
  "नमस्ते," ,    
  "Hola,",        
  "Bonjour,",     
  "Hallo,",       
  "Ciao,",        
  "Olá,"      
  
];

export default function TypingHello() {
  const [text, setText] = useState('');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = greetings[greetingIndex];
    const isEnd = charIndex === current.length;
    const isStart = charIndex === 0;
    let speed = deleting ? 120 : 180;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (isEnd) {
          setTimeout(() => setDeleting(true), 1000); // pause before deleting
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (isStart) {
          setDeleting(false);
          setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, greetingIndex]);

  return (
    <h2 className="text-6xl py-5 font-mono">
      {text}
      <span className="border-r-2 border-[#111827] ml-1 animate-pulse" />
    </h2>
  );
}
