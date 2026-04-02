import React, { use } from 'react';
import { Check } from 'lucide-react';
import Writing from "../../assets/products/writing_2327400 1.png"
import PremiumCard from '../PremiumCard/PremiumCard';


const Premium = ({cardPromise}) => {
    
    const data =use(cardPromise);
    console.log(data);
    return (
        <div>
          <h3 className='text-4xl font-bold'> hello world :{data.length}</h3>
         <PremiumCard data={data}></PremiumCard>
            {/* <div>
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



            </div>  */}
        </div>
    );
};

export default Premium;