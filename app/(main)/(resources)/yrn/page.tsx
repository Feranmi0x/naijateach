import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { YorubaNumbers } from './yrn';
import { 
  yrgetNumbers, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { revalidatePath } from 'next/cache';

const page = async () => {
  revalidatePath("/yrn");
  const yrnumbers = await yrgetNumbers(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <YorubaNumbers numbers={yrnumbers}/>
      </FeedWrapper>
    </div>
  );
};

export default page;