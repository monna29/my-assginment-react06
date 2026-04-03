

import React, { useState } from 'react';
import YourCard from '../YourCard/YourCard';

const PremiumCard = ({ data }) => {
    const [selectedType, setSelectedType] = useState("available");
    const [selectedItems, setSelectedItems] = useState([]);


    const selectedCards = data.filter(item =>
        selectedItems.includes(item.id)
    );

    const handleRemove = (id) => {
        setSelectedItems((prev) => prev.filter(itemId => itemId !== id));
    };

    const handleClearCart = () => {
        setSelectedItems([]);
    };

    const goToProducts = () => {
        setSelectedType("available");
    };

    return (
        <div>

            <div className='w-11/12 mt-14 mx-auto'>
                <h3 className='text-3xl font-bold text-center'>
                    Premium Digital Tools
                </h3>
                <p className='text-center'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>


                <div className='flex flex-row gap-2 justify-center mt-4'>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn rounded-full ${selectedType === "available" ? "bg-[#6758dd] text-white" : ""
                            }`}
                    >
                        Products
                    </button>

                    <button
                        onClick={() => setSelectedType("selected")}
                        className={`btn rounded-full ${selectedType === "selected" ? "bg-[#6758dd] text-white" : ""
                            }`}
                    >
                        Cart ({selectedItems.length})
                    </button>
                </div>
            </div>


            {selectedType === "available" ? (
                <div className='w-11/12 mx-auto grid sm:grid-cols-3 gap-3 mt-6'>
                    {data.map((item) => (
                        <div key={item.id} className="card w-96 bg-base-100 shadow-sm">
                            <div className="card-body">


                                <div className='flex justify-between'>
                                    <div className='grid items-center justify-center w-15 h-15 bg-[#F2F2F2] rounded-full'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <span className="badge badge-xs badge-warning">
                                        {item.type}
                                    </span>
                                </div>


                                <div>
                                    <h2 className="text-3xl font-bold">{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>
                                        <span className="text-xl font-medium">
                                            {item.price}
                                        </span> / {item.type}
                                    </p>
                                </div>


                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    {item.features.map((feature, index) => (
                                        <li key={index}>
                                            ✔ {feature}
                                        </li>
                                    ))}
                                </ul>


                                <div className="mt-6">
                                    <button
                                        onClick={() => {
                                            setSelectedItems((prev) =>
                                                prev.includes(item.id)
                                                    ? prev
                                                    : [...prev, item.id]
                                            );
                                        }}
                                        className="btn btn-primary btn-block rounded-full"
                                    >
                                        {selectedItems.includes(item.id)
                                            ? "Selected"
                                            : "Buy Now"}
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            ) : (

                <YourCard selectedICard={selectedCards} handleRemove={handleRemove}
                    handleClearCart={handleClearCart}
                     goToProducts={goToProducts} />
            )}
        </div>
    );
};

export default PremiumCard;