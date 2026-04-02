import React, { Component } from 'react';
import User from "../../assets/user.png"
import User2 from "../../assets/package.png"
import User3 from "../../assets/rocket.png"

class Started extends Component {
    render() {
        return (
            <div className='w-11/12 mx-auto'>
                <h3 className='text-5xl mt-12 text-[#101727] font-bold text-center'>Get Started in 3 Steps</h3>
                <p className='text-center'>Start using premium digital tools in minutes, not hours.</p>
                <div className='grid sm:grid-cols-3 gap-6 mt-12 '>
                    <div className='relative  inset-shadow-sm bg-[#E1E7FF]  rounded-2xl  p-6  py-20'>
                        <div className='absolute top-4 right-4 text-white p-2 w-9 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>01</div>
                        <div className='grid items-center justify-center space-y-4 '>
                            <div className='flex justify-center rounded-full items-center mx-auto w-25 h-25 bg-[#cab5da] '>
                                <img src={User} alt="" className='' />
                            </div>
                            <h3 className='text-center text-3xl font-medium'>Create Account</h3>
                            <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className='relative  inset-shadow-sm bg-[#E1E7FF]  rounded-2xl p-6  py-20'>
                        <div className='absolute top-4 right-4 text-white p-2 w-9 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>02</div>
                        <div className='grid items-center justify-center space-y-4'>
                            <div className='flex justify-center rounded-full items-center mx-auto w-25 h-25 bg-[#cab5da] '>
                                <img src={User2} alt="" className='' />
                            </div>
                            <h3 className='text-center text-3xl font-medium'>Choose Products</h3>
                            <p className='text-center'> Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className='relative  inset-shadow-sm bg-[#E1E7FF]  rounded-2xl p-6   py-20'>
                        <div className='absolute top-4 right-4 text-white p-2 w-9 rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>03</div>
                        <div className='grid items-center justify-center space-y-4'>
                            <div className='flex justify-center rounded-full items-center mx-auto w-25 h-25 bg-[#cab5da] '>
                                <img src={User3} alt="" className='' />
                            </div>
                            <h3 className='text-center text-3xl font-medium'>Start Creating</h3>
                            <p className='text-center'> Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Started;