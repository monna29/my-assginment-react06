import React, { Component } from 'react';
import { Check } from 'lucide-react';

class Pricing extends Component {
    render() {
        return (
            <div className='w-11/12 mx-auto my-32'>
                <h3 className='text-4xl text-center font-bold'>Simple, Transparent Pricing</h3>
                <p className='text-center my-6'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid sm:grid-cols-3 gap-4'>
                    <div className='inset-shadow-sm bg-[#E1E7FF]  rounded-2xl p-4 '>
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

                     <div className='inset-shadow-sm bg-gradient-to-r from-[#4f39f6] to-[#9514fa]  rounded-2xl p-4 '>
                        <h3 className='text-2xl text-white font-medium mb-2'> Pro</h3>
                        <p className='text-white'> Best for professionals</p>
                        <p className='my-6 text-white'><span className='text-3xl font-medium'>$29</span>/month</p>
                        <div className='h-40 space-y-2'>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> Basic templates</p>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> Community support</p>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> 1 project per month</p>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                            <p className='flex gap-1 text-white'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                        </div>
                        <button className='btn rounded-full  w-full bg-white'>Get Started Free</button>
                    </div>

                    
                    <div className='inset-shadow-sm bg-[#E1E7FF]  rounded-2xl p-4 '>
                        <h3 className='text-2xl font-medium mb-2'>Starter</h3>
                        <p>Perfect for getting started</p>
                        <p className='my-6'><span className='text-3xl font-medium'>$99</span>/month</p>
                        <div className='h-40 space-y-2'>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Basic templates</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Community support</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> 1 project per month</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                            <p className='flex gap-1'> <Check className='text-[#30B868]' /> Access to 10 free tools</p>
                        </div>
                        <button className='btn rounded-full text-white w-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>Get Started Free</button>
                    </div>

                </div>

                 
                   
        
               

            </div>
        );
    }
}

export default Pricing;