import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <div className='flex flex-col '>
      {link.map((l) => {
        return (
          <div key={l._id} className='flex flex-row p-4 m-5 shadow-lg rounded-3xl'>
            <div>
              <a href={l.url}>
                <img class='inline object-cover w-24 h-24 mr-2 p-1 rounded-3xl shadow-inner' src={l.image ? l.image : l.logo} alt={l.title} />
              </a>
            </div>
            <div className='p-4'>
              <a href={l.url}>
                <h1 className='text-xl'>{l.title}</h1>
                <p className='text-xs text-gray-600'>{l.url}</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinkCard;
