import React, { useState } from 'react';
import { addLink } from '../actions/linkActions';
import { useDispatch } from 'react-redux';

const MetaScraper = () => {
  const dispatch = useDispatch();
  const [linkURL, setLinkURL] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const regex = new RegExp('^(http|https)://');

    if (linkURL.match(regex)) {
      dispatch(addLink(linkURL));
    } else {
      const formatURL = `.${linkURL}`.split('.').slice(1).join('.');
      dispatch(addLink(formatURL));
    }
  };

  return (
    <div className='flex justify-center mt-5 mx-auto'>
      <form onSubmit={(e) => submitHandler(e)}>
        <div class='bg-white flex items-center rounded-full shadow-xl'>
          <input
            class='rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none'
            onChange={(e) => setLinkURL(e.target.value)}
            name='url'
            id='url'
            placeholder='Enter URL'
            size='30'
            required
          />
          <div class='px-4'>
            <button className='w-8 h-8  rounded-3xl shadow-purple bg-purple-600 text-gray-50' type='submit'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MetaScraper;

//   <input className='shadow-lg rounded-3xl px-5 h-12' onChange={(e) => setLinkURL(e.target.value)} name='url' id='url' placeholder='Enter URL' size='30' required />
//   <button className='w-12 h-12 ml-2 rounded-3xl shadow-purple bg-purple-600 text-gray-50' type='submit'>
//     <span className='text-xl font-bold'>+</span>
//   </button>
// ;
