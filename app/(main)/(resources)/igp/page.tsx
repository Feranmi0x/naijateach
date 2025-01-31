import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';

import { 
  iggetPronouns, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { IgboPronouns } from './igp';

const page = async () => {
  const igpronouns = await iggetPronouns(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <IgboPronouns pronouns={igpronouns}/>
      </FeedWrapper>
    </div>
  );
};

export default page;