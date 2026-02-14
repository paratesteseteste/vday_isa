// src/components/Temporizador.jsx
import React, { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';
import anima from '../../styles/animations.module.css'
// Componente de círculo individual personalizado
const ProgressCircle = ({ value, max, unit }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <div className="progress-circle" style={{ textAlign: "center", margin: "0 10px" }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#ddd"
          strokeWidth="6"
        />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#dc143c"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div style={{ 
        position: 'relative', 
        top: '-80px', 
        color: "#dc143c", 
        fontSize: "2em", 
        fontWeight: "bold" 
      }}>
        {String(value).padStart(2, "0")}
      </div>
      <p style={{ fontSize: "1em", marginTop: "-60px" }}>{unit}</p>
    </div>
  );
};

// Componente principal
export default function Temporizador({ time, onTimeUpdate }) {
  useEffect(() => {
    const START_DATE = new Date('2024-09-24T19:34:00');
    
    const calculateTimeSince = () => {
      const now = new Date();
      
      let years = now.getFullYear() - START_DATE.getFullYear();
      let months = now.getMonth() - START_DATE.getMonth();
      let days = now.getDate() - START_DATE.getDate();
      let hours = now.getHours() - START_DATE.getHours();
      let minutes = now.getMinutes() - START_DATE.getMinutes();
      let seconds = now.getSeconds() - START_DATE.getSeconds();
      
      // Ajustes para valores negativos
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }
      
      return { years, months, days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      onTimeUpdate(calculateTimeSince());
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUpdate]);

    useEffect(() => {
    ScrollReveal().reveal('.progress-circle', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 300,
      reset: false
    });

  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap",flexShrink: 100, maxHeighteight: "500px"}}>
      <div className={anima.progress_circle_1}>
        <ProgressCircle value={time.years} max={10} unit="Anos" />
      </div>
      <ProgressCircle value={time.months} max={12} unit="Meses" />
      <ProgressCircle value={time.days} max={30} unit="Dias" />
      <ProgressCircle value={time.hours} max={24} unit="Horas" />
      <ProgressCircle value={time.minutes} max={60} unit="Minutos" />
      <ProgressCircle value={time.seconds} max={60} unit="Segundos" />
    </div>
  );
}