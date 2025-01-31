import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { YorubaCommonExp } from './yrc';
import { 
  yrgetcommonExp, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { revalidatePath } from 'next/cache';

const page = async () => {
  revalidatePath("/yrc");
  const yrcommonExp = await yrgetcommonExp(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <YorubaCommonExp commonExp={yrcommonExp}/>
      </FeedWrapper>
    </div>
  );
};

export default page;