import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/action'

const Cart = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.addToCartReducer.cart)

    return (
        <div>
            <div className="flex flex-col gap-10 py-5 items-center justify-center px-5">
                <h2 className='text-center text-2xl'>Cart Products</h2>
                {selector.map((val, id) => {
                    return (
                        <div key={id} className="border-2 border-gray-500 p-4 py-10 flex flex-col md:flex-row space-y-5 gap-20 items-start justify-center">
                            <div className='flex w-full items-center justify-center'>
                                <img src={val.data.image} className="h-20 " />
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-2xl'> {val.data.description}</p>
                                <p className='text-xl'> {val.data.seller}</p>
                                <p className='text-xl'> <span className='text-4xl'>{val.data.price}</span> <span className='text-xl line-through'>{val.data.originalPrice}</span> <span className='text-green-500'>{val.data.offer}</span> </p>
                                <div className='block md:hidden'>
                                    <p className='text-lg'>{val.data.deliveryBy}</p>
                                    <p className='text-lg'>{val.data.replacementPolicy}</p>
                                </div>
                                <div className='flex md:flex-row flex-col gap-5'>
                                    <button className='px-3 py-2 border-2 border-gray-300 rounded-sm bg-orange-600 text-white'>Buy Now</button>
                                    <button onClick={() => dispatch(removeFromCart(val.id))} className='px-5 py-3 border-2 border-gray-300 rounded-sm bg-yellow-600 text-white'>Add To Cart</button>
                                </div>

                            </div>
                            <div className='hidden md:block'>
                                <p className='text-lg'>{val.data.deliveryBy}</p>
                                <p className='text-lg w-full whitespace-nowrap'>{val.data.replacementPolicy}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart