
import React from 'react';

const YourCard = ({ selectedICard, handleRemove, handleClearCart }) => {

    const totalPrice = selectedICard.reduce((total, item) => {
        const price = parseFloat(item.price) || 0;
        return total + price;
    }, 0);

    return (
        <div className='w-11/12 mx-auto mt-10'>
            <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>




            {selectedICard.length === 0 ? (
                <div className='w-11/12 flex items-center justify-center  mx-auto bg-amber-50'>
                    <img src="https://i.ibb.co.com/m5mqcTw8/no-item-found-vector-filled-260nw-2087433073.webp" alt="" />
                    
                </div>
            ) : (
                <>
                    {selectedICard.map((item) => (
                        <div
                            key={item.id}
                            className="inset-shadow-xs border p-4 mb-3 rounded flex justify-between items-center"
                        >
                            <div className='flex items-center gap-4 '>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p>{item.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleRemove(item.id)}
                                className="btn btn-sm bg-red-500 text-white rounded-full"
                            >
                                Delete
                            </button>
                        </div>
                    ))}

                    <div className="mt-6 text-xl font-bold">
                        Total: ${totalPrice.toFixed(2)}
                    </div>

                    <div className="gap-3 mt-4">
                     

                        <button
                            onClick={handleClearCart}
                            className="btn w-full bg-[#6758dd] rounded-full text-white "
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default YourCard;