import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <div className='flex flex-col '>
      {link.map((l) => {
        return (
          <div key={l._id} className='flex flex-row p-4'>
            <div>
              <img class='inline object-cover w-24 h-24 mr-2 rounded-3xl' src={l.image ? l.image : l.logo} alt={l.title} />
            </div>

            <div className='p-4'>
              <h1 className='text-xl'>{l.title}</h1>
              <p className='text-xs text-gray-600'>{l.url}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinkCard;
