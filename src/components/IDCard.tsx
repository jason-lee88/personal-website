import { useState, useEffect } from "react";

import Me from "../assets/me_2025_tall.jpg";
import LinkIcon from "./LinkIcon";

import LinkedIn from "../assets/brand-linkedin.svg?react"
import GitHub from "../assets/brand-github.svg?react";
import Mail from "../assets/mail.svg?react";
import TextFile from "../assets/file-text.svg?react";

const titles = ["Full Stack Developer", "Software Engineer"];

const IDCard = () => {
  const [titleText, setTitleText] = useState("");
  const [titleCharacter, setTitleCharacter] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    if (titleCharacter < titles[titleIndex].length) {
      const timeout = setTimeout(() => {
        setTitleText(prev => prev + titles[titleIndex][titleCharacter]);
        setTitleCharacter(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        titleIndex == titles.length - 1 ? setTitleIndex(0) : setTitleIndex(prev => prev + 1);
        setTitleCharacter(0);
        setTitleText("");
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [titleCharacter]);

  return (
    <div className="w-sm h-md bg-neutral-500/40 rounded-xl px-20 py-10 flex flex-col justify-center items-center">
      <img src={Me} className="rounded-xl mb-4" />
      <h1 className="text-neutral-50 text-4xl font-bold">Jason Lee</h1>
      <h2 className="text-neutral-50 typewriter-text">{titleText}</h2>
      <div className="w-full h-8" />
      <div className="w-full flex justify-center items-center gap-3">
        <LinkIcon icon={<LinkedIn />} href="https://linkedin.com/in/jasonlee88/" />
        <LinkIcon icon={<GitHub />} href="https://github.com/jason-lee88/" />
        <LinkIcon icon={<Mail />} href="mailto:jason.e.lee8@gmail.com" />
        <LinkIcon icon={<TextFile />} href="/resume.pdf" />
      </div>
    </div>
  )
};

export default IDCard;
