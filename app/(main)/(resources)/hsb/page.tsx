import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';


import { HausaBody } from './hsb';
import { revalidatePath } from "next/cache"; // Import cache revalidation
import { getBody } from '@/db/queries';

const page = async () => {
  // Force Next.js to fetch fresh data
  revalidatePath("/hsb"); // Replace with the actual route

  // Fetch fresh data without caching
  const body = await getBody(); 

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <HausaBody body={body} />
      </FeedWrapper>
    </div>
  );
};

export default page;