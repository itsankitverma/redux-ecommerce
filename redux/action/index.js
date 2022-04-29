export const Add_To_Cart = "Add_To_Cart"
export const Remove_From_Cart = "Remove_From_Cart"
export const User_Name = "User_Name"

export const addToCart = (data) => {
    return {
        type: Add_To_Cart,
        payload: {
            data: data,
            id: new Date().getTime().toString()
        }
    }
}

export const username = (username) => {
    return {
        type: User_Name,
        payload: {
            username,
            id: new Date().getTime().toString()
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: Remove_From_Cart,
        id
    }
}

