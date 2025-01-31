import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';

import { 
  getPronouns, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { HausaPronouns } from './hsp';

const page = async () => {
  const pronouns = await getPronouns(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaPronouns pronouns={pronouns}/>
      </FeedWrapper>
    </div>
  );
};

export default page;