"use client";

import { useState, useEffect } from 'react';

export function BlackFridayBar() {
  const [countdown, setCountdown] = useState("00h 00m 00s");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brasiliaTime = new Date(utc - (3 * 3600000));

      const endOfDay = new Date(brasiliaTime);
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - brasiliaTime.getTime();

      if (diff <= 0) {
        setCountdown("00h 00m 00s");
        return;
      }

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="black-friday-bar">
      <span className="hidden md:inline">Use o cupom "BLACKFRIDAY" e ganhe 15% de desconto! Faltam <span id="countdown" style={{ color: 'hsl(var(--accent))' }}>{countdown}</span></span>
      <span className="md:hidden">Use o cupom "BLACKFRIDAY" e ganhe 15% de desconto!</span>
    </div>
  );
}
