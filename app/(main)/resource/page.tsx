import React from 'react';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import Link from 'next/link';
import Image from 'next/image';

const page = () => {

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
             <Image 
                src="/rs.png" 
                alt="Resources" 
                height={140} 
                width={140}
                className="mx-auto"
                />
                <h1 className="text-center font-bold text-neutral-800 text-2xl mb-6">
                    Resources 
                </h1>
                <p className="text-muted-foreground text-center text- lg mb-6">
                    Know the basics and advanced information about each Nigerian Languages.
                </p>
      <Link href="yrn">
       <div className='bg-yelloww p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-yellow-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Yoruba Numbers</div>
       </div> 
      </Link>
      <Link href="yrs">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Yoruba Slangs</div>
       </div> 
      </Link>
      <Link href="yrc">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Yoruba Common Expression</div>
       </div> 
      </Link>
      <Link href="yra">
       <div className='bg-yelloww p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-yellow-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Yoruba Alphabet</div>
       </div> 
      </Link>
      <Link href="yrg">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Yoruba Local Food/Items</div>
       </div> 
      </Link>
      <Link href="yrr">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Yoruba Relatives</div>
       </div> 
      </Link>
      <Link href="yrp">
       <div className='bg-yelloww p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-yellow-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Yoruba Pronouns</div>
       </div> 
      </Link>
      <Link href="yrb">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Yoruba Body Parts</div>
       </div> 
      </Link>
      <Link href="ign">
       <div className='bg-logo p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-green-500 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Igbo Numbers</div>
       </div> 
      </Link>
      <Link href="igs">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Igbo Slangs</div>
       </div> 
      </Link>
      <Link href="igc">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Igbo Common Expression</div>
       </div> 
      </Link>
      <Link href="iga">
       <div className='bg-logo p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-green-500 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Igbo Alphabet</div>
       </div> 
      </Link>
      <Link href="igg">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Igbo Local Food/Items</div>
       </div> 
      </Link>
      <Link href="igr">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Igbo Relatives</div>
       </div> 
      </Link>
      <Link href="igp">
       <div className='bg-logo p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-green-500 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Igbo Pronouns</div>
       </div> 
      </Link>
      <Link href="igb">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Igbo Body Parts</div>
       </div> 
      </Link>
      <Link href="hsn">
       <div className='bg-sky-500 p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-sky-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Hausa Numbers</div>
       </div> 
      </Link>
      <Link href="hss">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Hausa Slangs</div>
       </div> 
      </Link>
      <Link href="hsc">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Hausa Common Expression</div>
       </div> 
      </Link>
      <Link href="hsa">
       <div className='bg-sky-500 p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-sky-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Hausa Alphabet</div>
       </div> 
      </Link>
      <Link href="hsg">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Hausa Local Food/Items</div>
       </div> 
      </Link>
      <Link href="hsr">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Hausa Relatives</div>
       </div> 
      </Link>
      <Link href="hsp">
       <div className='bg-sky-500 p-[8px] pl-6 rounded-lg border-b-[4px] border-gray-300 hover:bg-sky-400 mb-3'>
        <div className='text-sm text-grey-300'>Basics</div>
        <div className='text-base font-bold'>Hausa Pronouns</div>
       </div> 
      </Link>
      <Link href="hsb">
       <div className='bg-white p-[8px] pl-6 rounded-lg border-[1px] border-b-[5px] border-gray-300 hover:bg-gray-100 mb-3'>
        <div className='text-sm text-green-500'>Advanced</div>
        <div className='text-base font-bold'>Hausa Body Parts</div>
       </div> 
      </Link>
      </FeedWrapper>
    </div>
  );
};

export default page;