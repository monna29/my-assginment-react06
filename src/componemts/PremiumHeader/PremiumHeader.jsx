import React from 'react';

const PremiumHeader = () => {
    return (
        <div className='w-11/12 mt-14'>
            <h3 className='text-3xl font-bold text-center'>Premium Digital Tools</h3>
            <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className='flex flex-row gap-2 justify-center '>
                <button className='btn text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Products</button>
                <button className='btn rounded-full '> Cart (2)</button>
            </div>
        </div>
    );
};

export default PremiumHeader;