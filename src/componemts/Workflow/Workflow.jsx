import React, { Component } from 'react';

class Workflow extends Component {
    render() {
        return (
            <div className='w-11/12 mx-auto bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>
                <h3 className='text-white text-3xl font-bold pt-30 text-center'>Ready to Transform Your Workflow?</h3>
                <p className='text-white text-center my-9'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='w-1/2 mb-2  flex flex-row  justify-center gap-3.5 mx-auto '>
                    <button className='btn rounded-full bg-white'>Explore Products</button>
                    <button className='btn rounded-full border '> View Pricing</button>
                </div>
                <p className='text-white text-center pb-30'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        );
    }
}

export default Workflow;