/* eslint-disable jsx-a11y/alt-text */
import data from '../data/data.json'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action'

export default function Products() {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col gap-10 py-5 items-center justify-center px-5">
            <h2 className='text-center text-2xl md:text-5xl'>Available Products</h2>
            {data.map((val, id) => {
                return (
                    <div key={id} className="md:border-0 border-2 border-gray-500 p-4 md:p-0 py-10 flex flex-col md:flex-row space-y-5 gap-20 items-center justify-center">
                        <div className='flex w-full items-center justify-center'>

                            <img src={val.image} className="h-20 " alt={val.description} />
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <p className='text-2xl'> {val.description}</p>
                            <p className='text-xl'> {val.seller}</p>
                            <p className='text-xl'> <span className='text-4xl'>{val.price}</span> <span className='text-xl line-through'>{val.originalPrice}</span> <span className='text-green-500'>{val.offer}</span> </p>
                            <div className='block md:hidden'>
                                <p className='text-lg'>{val.deliveryBy}</p>
                                <p className='text-lg'>{val.replacementPolicy}</p>
                            </div>
                            <div className='flex md:flex-row flex-col gap-5'>
                                <button className='px-3 py-2 border-2 border-gray-300 rounded-sm bg-orange-600 text-white'>Buy Now</button>
                                <button onClick={() => dispatch(addToCart(val))} className='px-5 py-3 border-2 border-gray-300 rounded-sm bg-yellow-600 text-white'>Add To Cart</button>
                            </div>

                        </div>
                        <div className='hidden md:block'>
                            <p className='text-lg'>{val.deliveryBy}</p>
                            <p className='text-lg w-full whitespace-nowrap'>{val.replacementPolicy}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}