"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer.jsx";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

function TypingAnimation({ className }) {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Hey 👋...",
    "I'm Mide Sofek.",
    "I derive joy in building decentralized applications...",
    "I also write technical articles...",
    "...and technical guides",
    "I love passing on knowledge...",
    "Reason why I love to teach",
    "When I'm not coding,...",
    "I play the keyboard and listen to soft music",
    "Take a tour...",
    "You'll find everything about me here...",
    "... at least, the most part :)",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <>
      {texts.map((text, index) => (
        <div
          key={index}
          style={{
            display: index === textIndex ? "block" : "none",
          }}
          className={`${className}`}
        >
          {text}
          {/* {console.log(text)} */}
        </div>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className=" py-6 flex flex-col justify-center items-center">
          <div>
            <h1 className=" px-1 py-6 font-bold text-3xl">
              Developer, Advocate & Technical Writer
            </h1>
          </div>
          <img
            src={"./midesofek.jpg"}
            alt="midesofek"
            className="py-6 h-auto w-52 rounded-full object-cover"
          />
          <div className=" font-bold text-xl">
            <p>I'm Mide Sofek</p>
          </div>
          <div className="animContainer">
            <TypingAnimation className="animatetext" />
          </div>
          <div className="py-6 flex space-x-4">
            <span>
              <Button>
                <a
                  href={
                    "https://www.linkedin.com/in/sofekun-ayomide-493688165/"
                  }
                  target="_blank"
                >
                  Experiences
                </a>
              </Button>
            </span>
            <span>
              <Button>
                <a
                  href={
                    "https://docs.google.com/document/d/1ESb6vqK6gKhUf38cA-3WVpL-bTIW32ugVYyPozCx52c/edit?usp=sharing"
                  }
                  target="_blank"
                >
                  CV
                </a>
              </Button>
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
