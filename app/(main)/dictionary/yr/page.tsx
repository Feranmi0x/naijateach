"use client";

import React, { useState } from 'react'
import Heading from './yrhd';
import Content from './yrc';
import { Search } from 'lucide-react';
import Synonyms from './yrs';
import DictionaryNavigator from '@/app/redirect/page';



const Page = () => {
  const [word, setWord] = useState("");
  const [results, setResults] = useState<any>(null); // Type state for results
  

  const searchWord = async () => {
    if (word.trim() === "") return; // Avoid fetching if no word is entered
    
    const sanitizedWord = word.trim().toLowerCase();
    const response = await fetch(`http://localhost:3000/api/yoruba/${sanitizedWord}`);
    const data = await response.json();

    if (response.ok) {
      // Update results with the first element of the response (if data is an array)
      setResults(data);
    } else {
      setResults(null); // Clear results if the word is not found
    }
  };

  console.log(results);


  return (
    <div className="container mx-auto px-10">
      <nav className="my-2 h-14 flex flex-row items-center">
        <h2 className="text-yelloww font-bold text-2xl">
          Yoruba Dictionary
        </h2>
      </nav>
      <input
        type="text"
        value={word}
        onChange={e => setWord(e.target.value)}
        className="w-full bg-gray-100 border-none outline-none rounded-lg px-3 py-3 shadow-sm"
      />
      
      <button 
        className="-mx-11 px-3 py-4 rounded-lg absolute pt-[13px] bg-transparent"
        onClick={searchWord}
      >
        <Search className='w-[18px]  text-gray-500'/>
      </button>
      <DictionaryNavigator />
      {/* Conditionally render Heading and Content */}
      {results && results.audio && <Heading result={results.word} audioUrl={`/${results.audio}`}/>}
      {results && <Content result={results.meaning} />}
      {results && <Synonyms result={results.synonyms} />}

      {/* Handle case where no results are found */}
      {results === null && word && (
        <div className="text-gray-500 p-5">Searching...</div>
      )}
    </div>
  );
}

export default Page;

