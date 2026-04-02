import React, { Component } from 'react';
import { Check } from 'lucide-react';
import Writing from"../../assets/products/writing_2327400 1.png"

class Premium extends Component {
    render() {
        return (
            <div>
                <div className='w-11/12 mt-14'>
                    <h3 className='text-3xl font-bold text-center'>Premium Digital Tools</h3>
                    <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    <div className='flex flex-row gap-2 justify-center '>
                        <button className='btn text-white bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Products</button>
                        <button className='btn rounded-full '> Cart (2)</button>
                    </div>
                </div>


                <div>
                    <div className='inset-shadow-sm bg-[#E1E7FF]  rounded-2xl p-4 '>

                        <div className='w-15 h-15'>
                           <img src={Writing} alt="" />
                        </div>

                        <h3 className='text-2xl font-medium mb-2'>Starter</h3>
                        <p>Perfect for getting started</p>
                        <p className='my-6'><span className='text-3xl font-medium'>$0</span>/month</p>
                        <div className='h-40 space-y-2'>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Basic templates</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Community support</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> 1 project per month</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                        </div>
                        <button className='btn rounded-full text-white w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>Get Started Free</button>
                    </div>



                </div>
            </div>
        );
    }
}

export default Premium;