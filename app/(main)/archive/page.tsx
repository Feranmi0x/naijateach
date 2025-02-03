"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';


const Archive = () => {

  const [words, setWords] = useState<
  {
    language: string;
    word: string;
    meaning: string;
    author: string;
    source: string;
  }[]
>([]);
const bgColors = ["bg-yelloww", "bg-logo", "bg-bluee", "bg-purple-500"]
// Fetch word of the week data (simulated for now)
useEffect(() => {
  const fetchedData = [
    {
      language: "Yoruba",
      word: "Kele",
      meaning: "Babe",
      author: "Wizkid",
      source: "Twitter",
    },
    {
      language: "Hausa",
      word: "Matan Arewa",
      meaning: "Northern ladies",
      author: "Ali Nuhu",
      source: "Facebook",
    },
    {
      language: "Igbo",
      word: "Nwanyi oma",
      meaning: "Beautiful lady",
      author: "Flavour",
      source: "Instagram",
    },
    {
      language: "Pidgin",
      word: "Chop life",
      meaning: "Enjoy life",
      author: "Burna Boy",
      source: "YouTube",
    },
  ];

  setWords(fetchedData);
}, []);

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Shop Section */}
      <Image src="/ac.png" alt="Shop" height={80} width={80} className="mx-auto" />
      <h1 className="text-center font-bold text-neutral-800 text-2xl mb-6">
        Archive
      </h1>
      <p className="text-muted-foreground text-center text-lg mb-6 max-w-[600px]">
      Catch up on the freshest Words of the Week! Dive into the history, stay in the loop, and never miss a beat.
      </p>

      {/* Words Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:gap-2">
        {words.length > 0 ? (
          words.map((wordData, index) => (
            <div
              key={index}
              className={`word-content ${bgColors[index % bgColors.length]} border-2 rounded-3xl p-6 w-full max-w-sm text-center mb-4 lg:mb-0 text-white shadow-lg`}
            >
              <h1 className="text-xl font-bold text-white mb-4">
                {wordData.language}
              </h1>
              <blockquote className="text-lg font-extrabold text-white mb-4">
                Word: {wordData.word}
              </blockquote>
              <p className="text-lg font-bold text-white mb-2">
                Meaning: {wordData.meaning}
              </p>
              <p className="text-sm text-white mb-2">- {wordData.author}</p>
              <p className="text-sm text-white">Source: {wordData.source}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <p className="text-gray-700 lg:text-xl text-lg font-extrabold underline lg:mt-[40px]">Continue with previous Word of the Week.</p>
      <div className="mt-[20px]">
      <Link href="feb">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3 min-w-[380px]'>
        <div className='text-sm text-green-500'>Febuary 2025</div>
        <div className='text-base font-bold'>Archive</div>
       </div> 
      </Link>
      </div>
    </div>
      </FeedWrapper>
    </div>
  );
};

export default Archive;