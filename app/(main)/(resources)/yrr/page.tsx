import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { YorubaRelatives } from './yrr';
import { 
  yrgetRelatives, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders

const page = async () => {
  const yrrelatives = await yrgetRelatives(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <YorubaRelatives relatives={yrrelatives}/>
      </FeedWrapper>
    </div>
  );
};

export default page;