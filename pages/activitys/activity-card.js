import React from 'react';
import Image from 'next/image';

const ActivityCard = (props) => {
  const { title, description, price, rating, image } = props.activity;
  return (
    <div className='max-w-[260px] border bg-[#1b1b1b1b] shadow-md rounded-2xl'>
      <Image
        src={image}
        alt='image activité'
        width={260}
        height={250}
        className='object-cover rounded-t-2xl opacity-90 hover:opacity-100 transition-colors border h-40'
      />
      <div className='relative p-3 space-y-2'>
        <h1 className='font-medium text-2xl'>{title}</h1>
        <h3>rating</h3>
        <p className='h-16 truncate text-sm'>{description}</p>
        <div className='absolute w-full pr-6 bottom-2 flex justify-between items-center'>
          <span className='text-sm'>{price}€</span>
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
