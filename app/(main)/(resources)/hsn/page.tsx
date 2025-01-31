import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { 
  getNumbers, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { HausaNumbers } from './hsn'; // Import the HausaNumbers component

const page = async () => {
  const numbers = await getNumbers(); 

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaNumbers numbers={numbers} /> {/* Pass numbers to the HausaNumbers component */}
      </FeedWrapper>
    </div>
  );
};

export default page;