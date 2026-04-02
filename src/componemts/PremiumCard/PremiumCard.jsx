import React, { useState } from 'react';
import YourCard from '../YourCard/YourCard';

const PremiumCard = ({ data }) => {
    const[selectedType, setSelectedType]=useState("available");
    console.log(selectedType,"selectedType");
    return (
        <div>
           <div className='w-11/12 mt-14'>
            <h3 className='text-3xl font-bold text-center'>Premium Digital Tools</h3>
            <p className='text-center'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            <div className='flex flex-row gap-2 justify-center '>
                <button
                onClick={()=> setSelectedType("available")}
                 className={`btn
                 ${selectedType === "available" ? "bg-[#6758dd]":""}
                  rounded-full`}>Products</button>

                <button onClick={()=> setSelectedType("selected")} className={`btn
                 ${selectedType === "selected" ? "bg-[#6758dd]":""}
                   rounded-full`}> Cart (2)</button>
            </div>
        </div>
        {selectedType === "available" ? <div className='w-11/12 mx-auto grid sm:grid-cols-3 gap-3'>
                {
                    data.map((data) => {

                        return (<div  key={data.id} className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex justify-between'>
                                    <div className='grid items-center justify-center w-15 h-15 bg-[#F2F2F2] rounded-full'>
                                        <img src={data.image} alt="" />
                                    </div>
                                    <span className="badge badge-xs badge-warning">{data.type}</span>
                                </div>
                                <div className="">
                                    <h2 className="text-3xl font-bold">{data.title}</h2>
                                    <p>{data.description}</p>
                                    <p> <span className="text-xl font-medium">{data.price}</span>/{data.type}</p>

                                </div>
                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{data.features[0]}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span> {data.features[1]}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{data.features[2]}</span>
                                    </li>



                                </ul>
                                <div className="mt-6">
                                    <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
                                </div>
                            </div>
                        </div>);
                    })
                }
            </div>
            
            :

             <YourCard></YourCard> }
            
        </div>

    );
};

export default PremiumCard;