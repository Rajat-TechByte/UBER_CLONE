import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://techcrunch.com/wp-content/uploads/2019/09/Uber-Eats-App-Merge.png)] h-screen w-full flex justify-between flex-col pt-8'>
        <img className='w-14 ml-8' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home