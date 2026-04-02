import React from 'react';

const Users = () => {
    return (
        <div className='w-full mx-auto  bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>
            <div className='mx-auto grid sm:grid-cols-3 justify-evenly py-8'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-6xl font-bold text-white'>50K+</h3>
                    <p className='text-white '>Active Users</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='text-6xl font-bold text-white'>200+</h3>
                    <p className='text-white'>Premium Tools</p>
                </div>
                <div className='flex flex-col items-center'>
                    <h3 className='text-6xl font-bold text-white'>4.9</h3>
                    <p className='text-white'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Users;