import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';

import { getCommonExp } from "@/db/queries"; // Import queries to get Hausa expressions
import { HausaCommonExp } from './hsc';
import { revalidatePath } from "next/cache"; // Import cache revalidation

const page = async () => {
  // Force Next.js to fetch fresh data
  revalidatePath("/hsc"); // Replace with the actual route

  // Fetch fresh data without caching
  const commonExp = await getCommonExp(); 

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaCommonExp commonExp={commonExp} />
      </FeedWrapper>
    </div>
  );
};

export default page;