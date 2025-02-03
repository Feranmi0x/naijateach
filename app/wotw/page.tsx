"use client";

import { useState, useEffect } from "react";

const WordOfTheWeek = () => {
  // State for the word of the week data
  const [wordOfTheWeek, setWordOfTheWeek] = useState<{
    word: string;
    meaning: string;
    author: string;
    source: string;
  } | null>(null);

  // Fetch word of the week data (simulated for now)
  useEffect(() => {
    // Simulated data (replace this with actual API calls if needed)
    const fetchedData = {
      word: "Kele",
      meaning: "Babe",
      author: "Wizkid",
      source: "Twitter",
    };

    setWordOfTheWeek(fetchedData);
  }, []);

  return (
    <div>
      {wordOfTheWeek ? (
        <div className="word-content bg-white border-2 rounded-lg p-6 max-w-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Yoruba Word of the Week</h1>
          <blockquote className="text-ms font-bold text-gray-700 mb-4">
            Word: {wordOfTheWeek.word}
          </blockquote>
          <p className="text-ms font-bold text-gray-700 mb-2">Meaning: {wordOfTheWeek.meaning}</p>
          <p className="text-sm text-gray-500 mb-2">- {wordOfTheWeek.author}</p>
          <p className="text-sm text-gray-400">Source: {wordOfTheWeek.source}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
};

export default WordOfTheWeek;