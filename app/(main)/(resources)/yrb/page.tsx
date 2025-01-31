import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { YorubaBody } from './yrb';

import { revalidatePath } from 'next/cache';
import { yrgetBody } from '@/db/queries';

const page = async () => {
  revalidatePath("/yrc");
  const yrbody = await yrgetBody(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <YorubaBody body={yrbody}/>
      </FeedWrapper>
    </div>
  );
};

export default page;