import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { 
  getGenders, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { HausaGender } from './hsg'; // Import the HausaGender component

const page = async () => {
  const genders = await getGenders(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaGender genders={genders} /> {/* Pass genders to the HausaGender component */}
      </FeedWrapper>
    </div>
  );
};

export default page;