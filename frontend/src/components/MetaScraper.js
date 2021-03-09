import React, { useState } from 'react';
import { addLink } from '../actions/linkActions';
import { useDispatch } from 'react-redux';

const MetaScraper = () => {
  const dispatch = useDispatch();
  const [linkURL, setLinkURL] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addLink(linkURL));
  };

  return (
    <div className='w-5/6 '>
      <form onSubmit={(e) => submitHandler(e)}>
        <input className='w-1/2 border-2' onChange={(e) => setLinkURL(e.target.value)} name='url' id='url' placeholder='https://example.com' size='30' required />
        <button className='w-32 border-2' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
};

export default MetaScraper;
