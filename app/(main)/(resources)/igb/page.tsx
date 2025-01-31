import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { IgboBody } from './igb';
import { iggetBody } from '@/db/queries';



const page = async () => {
  const igbody = await iggetBody(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <IgboBody body={igbody}/>
      </FeedWrapper>
    </div>
  );
};

export default page;