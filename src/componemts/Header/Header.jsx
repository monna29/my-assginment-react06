import React from 'react';
import Photo from "../../assets/banner.png"
const Header = () => {
    return (
        <div className='w-11/12 mx-auto my-8  '>
            <div className='sm:flex  items-center justify-center '>
                <div className='space-y-5 '>
                    <div className='flex sm:justify-normal justify-center '>
                        <button className='btn rounded-full  bg-[#E1E7FF] text-[#4F39F6]'>New: AI-Powered Tools Available</button>
                    </div>

                    <h3 className='Manrope text-4xl font-bold text-[#101727] text-center sm:text-left '>Supercharge Your <br /> Digital Workflow</h3>
                    <p className='text-[#627382] text-center sm:text-left'>Access premium AI tools, design assets, templates, and productivity 
                        software—all in one place. Start creating    faster today.

                        Explore Products
                    </p>
                    <div className='flex sm:justify-normal justify-center'>
                        <button class="btn mr-3 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white "> Explore Products</button>

                    <button class="btn rounded-full border-green-500"> Watch Demo</button>
                    </div>
                </div>
                <div>
                    <img src={Photo} alt="Photo" className='h-full' />
                </div>
            </div>
        </div>
        
    );
};

export default Header;