import React from 'react'

type Props = {
  result: number;
}

const Content = ({result}: Props) => {
  return (
    <div className= "my-3">
        
        <p className='text-[18px]'>Meaning</p>
        <ul className="list-disc px-10 text-gray-800 text-sm space-y-2 ">
            <li>
                {result}
            </li>
        </ul>
    </div>
  )
}

export default Content;

