import { useSelector } from 'react-redux'
import Products from '../components/Products'
import Register from '../components/Register'

export default function Home() {
  const name = useSelector(state => state.addToCartReducer.userName)

  return (
    <div>
      {name ? <Products /> : <Register />}


    </div>
  )
}