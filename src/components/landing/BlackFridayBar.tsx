"use client";

import { useState, useEffect } from 'react';

export function BlackFridayBar() {
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      // Define o fuso de Brasília (UTC-3)
      const now = new Date();
      const brasiliaOffset = -3 * 60; // minutos
      const localOffset = now.getTimezoneOffset();
      const diff = (brasiliaOffset - localOffset) * 60 * 1000;
      const brasiliaNow = new Date(now.getTime() + diff);

      // Define meia-noite de hoje
      const midnight = new Date(brasiliaNow);
      midnight.setHours(24, 0, 0, 0); // próxima meia-noite

      const remaining = midnight.getTime() - brasiliaNow.getTime();

      if (remaining <= 0) {
        setCountdown("00:00:00");
        return;
      }

      const hours = String(Math.floor(remaining / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((remaining % (1000 * 60)) / 1000)).padStart(2, '0');

      setCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      id="blackfriday-bar"
      className="fixed top-0 left-0 w-full bg-black text-white font-bold font-sans text-base p-3 z-[9999] flex justify-center items-center text-center"
      style={{ boxShadow: '0 0 10px #00FF66' }}
    >
      <span className="hidden md:inline">🎉 Desconto de Black Friday só HOJE nessa página! &nbsp;</span>
      <span className="md:hidden">🎉 Black Friday só HOJE! &nbsp;</span>
      <span style={{ color: '#00FF66' }}>
        ⏰ <span id="countdown">{countdown}</span>
      </span>
    </div>
  );
}
