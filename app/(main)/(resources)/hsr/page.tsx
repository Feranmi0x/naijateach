import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';

import { HausaRelatives } from './hsr'; // Import the HausaNumbers component
import { getRelatives } from '@/db/queries';

const page = async () => {
  const relatives = await getRelatives(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaRelatives relatives={relatives}/>
      </FeedWrapper>
    </div>
  );
};

export default page;