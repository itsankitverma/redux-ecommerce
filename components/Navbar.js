import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const route = useRouter()
    const selector = useSelector(state => state.addToCartReducer.cart.length)
    const name = useSelector(state => state.addToCartReducer.userName)
    
    return (
        <div className='sticky top-0 flex flex-row md:justify-around justify-between px-10 md:px-0 items-center bg-slate-700 text-white p-3'>
            <div className='flex flex-row items-center space-x-3'>
                <p className='cursor-pointer text-2xl' onClick={() => route.push('/')}>AmKart</p>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <div>
                    {name ? name : "Login"}
                </div>
                <p className='cursor-pointer relative' onClick={() => route.push('/cart')}>
                    <span className='text-3xl'>🛒</span>
                    <span className=' bg-slate-100 text-black rounded-full h-8 w-8 absolute -top-2 -right-4 '>
                        <span className='text-2xl relative left-[10px] text-center'>{selector}</span>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Navbar