import { Add_To_Cart, Remove_From_Cart } from "../action";

const initialState = {
    cart: []
}

export const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Cart:
            const { data, id } = action.payload
            return {
                ...state,
                cart: [
                    ...state.cart, { data, id }
                ]
            }

        case Remove_From_Cart:
            let newCart = state.cart.filter((product) => product.id !== action.id)
            return {
                ...state,
                cart: newCart
            }

        default: return state
    }
}

