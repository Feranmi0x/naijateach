import React from 'react';
import { YorubaAlphabet } from './yra';

import { FeedWrapper } from '@/components/feedwrapper';
import WordOfTheWeek from '@/app/wotw/page';
import GMStreakButton from '@/app/gmstreak/page';
import TestimonialSlider from '@/app/testi/page';
import { StickyWrapper } from '@/components/stickywrapper';
import { YorubaNumbers } from './yrn';
import { YorubaPronouns } from './yrp';
import { YorubaSlangs } from './yrs';
import { YorubaCommonExp } from './yrc';
import { YorubaGender } from './yrg';
import { IgboAlphabet } from './iga';
import { IgboNumbers } from './ign';
import { IgboPronouns } from './igp';
import { IgboSlangs } from './igs';
import { IgboCommonExp } from './igc';
import { IgboGender } from './igg';
import { HausaAlphabet } from './hsa';
import { 
  getNumbers, 
  getGenders, 
  getSlangs, 
  getCommonExp, 
  getPronouns, 
  yrgetNumbers, 
  yrgetGenders, 
  yrgetPronouns, 
  yrgetSlangs, 
  yrgetcommonExp, 
  iggetNumbers, 
  iggetGenders, 
  iggetPronouns, 
  iggetSlangs, 
  iggetcommonExp, 
} from "@/db/queries"; // Import queries to get Hausa numbers and genders
import { HausaNumbers } from './hsn'; // Import the HausaNumbers component
import { HausaPronouns } from './hsp';
import { HausaSlangs } from './hss'; // Import the HausaNumbers component
import { HausaCommonExp } from './hsc';
import { HausaGender } from './hsg'; // Import the HausaGender component

const page = async () => {
  const numbers = await getNumbers(); 
  const genders = await getGenders(); 
  const pronouns = await getPronouns(); 
  const slangs = await getSlangs(); 
  const commonExp = await getCommonExp(); 
  const yrnumbers = await yrgetNumbers(); 
  const yrgenders = await yrgetGenders(); 
  const yrpronouns = await yrgetPronouns(); 
  const yrslangs = await yrgetSlangs(); 
  const yrcommonExp = await yrgetcommonExp(); 
  const ignumbers = await iggetNumbers(); 
  const iggenders = await iggetGenders(); 
  const igpronouns = await iggetPronouns(); 
  const igslangs = await iggetSlangs(); 
  const igcommonExp = await iggetcommonExp(); 
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <WordOfTheWeek />
        <GMStreakButton />
        <TestimonialSlider />
      </StickyWrapper>
      <FeedWrapper>
        <YorubaAlphabet />
        <YorubaNumbers numbers={yrnumbers}/>
        <YorubaPronouns pronouns={yrpronouns}/>
        <YorubaGender genders={yrgenders}/>
        <YorubaSlangs slangs={yrslangs}/>
        <YorubaCommonExp commonExp={yrcommonExp}/>
        <IgboAlphabet />
        <IgboNumbers numbers={ignumbers}/>
        <IgboPronouns pronouns={igpronouns}/>
        <IgboGender genders={iggenders}/>
        <IgboSlangs slangs={igslangs}/>
        <IgboCommonExp commonExp={igcommonExp}/>
        <HausaAlphabet />
        <HausaNumbers numbers={numbers} /> {/* Pass numbers to the HausaNumbers component */}
        <HausaPronouns pronouns={pronouns}/>
        <HausaGender genders={genders} /> {/* Pass genders to the HausaGender component */}
        <HausaSlangs slangs={slangs}/>
        <HausaCommonExp commonExp={commonExp} /> {/* Pass genders to the HausaGender component */}
      </FeedWrapper>
    </div>
  );
};

export default page;