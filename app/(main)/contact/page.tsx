"use client";

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkvylnl");
  if (state.succeeded) {
      return <p className='text-center font-extrabold tetx-3xl'>Success!! You will get a response shortly</p>;
  }
  return (
    <div className='max-w-[600px] mx-auto flex justify-center flex-col p-[20px] gap-[10px]'>
      <h1 className='text-center text font-extrabold text-3xl my-[20px]'>Contact</h1>
    <form onSubmit={handleSubmit}>
      <div className='mt-[20px]'>
      <label htmlFor="name" className='w-full text-sm font-extrabold mt-[20px]'>
        NAME <span className='text-red-700'>*</span>
      </label>
      <input className='w-full border-[1px] p-[6px] border-black mt-[8px]'
        id="name"
        type="name" 
        name="name"
        placeholder='Enter Your Name'
      />
      </div>
      <div className='mt-[15px]'>
      <label htmlFor="email" className='w-full text-sm font-extrabold py-[10px]'>
        EMAIL <span className='text-red-700'>*</span>
      </label>
      <input className='w-full border-[1px] p-[6px] border-black mt-[8px]'
        id="email"
        type="email" 
        name="email"
        placeholder='Enter Your Email'
      />
      </div>
      <div className='mt-[15px]'>
      <label  className='w-full text-sm font-extrabold py-[10px]'>REASON <span className='text-red-700'>*</span></label>
      <select id="contact-reason" name="contact-reason" className='w-full border-[1px] p-[6px] border-black mt-[8px]'>
        <option value="request-tutor">Request for a Tutor</option>
        <option value="make-correction">Make a Correction</option>
        <option value="sponsor-donate">Sponsor or Donate</option>
        <option value="ask-question">Ask a Question</option>
        <option value="billing">Billing</option>
        <option value="subscription">Subscription</option>
       <option value="contact">Contact</option>
       <option value="others">Others</option>
      </select>
      </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className='mt-[15px]'>
      <label htmlFor="message" className='w-full text-sm font-extrabold py-[10px]'>
        MESSAGE <span className='text-red-700'>*</span>
      </label>
      <textarea className='border-[1px] border-black w-full p-[6px] mt-[10px] h-[200px]'
        id="message"
        name="message"
        placeholder='Your message'
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='bg-slate-950 text-white px-[12px] py-[4px] mt-[10px] font-extrabold rounded-md'>
        Submit
      </button>
    </form>
    </div>
  );
}
