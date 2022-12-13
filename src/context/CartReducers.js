const CartReducer = (state, action) => {
    const { type, payload } = action

    const getQty = (cart) => {
        const qty = cart.reduce((acc, total) => {
        return acc + Number(total.qty)}, 0)
    return qty
    }

    switch(type){
        case 'ADD':
            if(state.cart.some(el=>el._id===payload.product._id)){  
                state.cart.forEach(el =>{
                    if(el._id===payload.product._id){
                        el.qty = payload.qty
                    }
                })
            } else {
                state.cart.push({ ...payload.product, qty: payload.qty })
            } 
            
            return { 
                cart: state.cart, 
                qty: getQty(state.cart) 
            }

         case 'DELETE':
            const result = state.cart.filter(el => el._id!==payload)
            return {
                cart: result, 
                qty : getQty(result)
            } 

        case 'CLEAN':
            return { 
                cart: [],
                 qty: 0 
            }

        default :
        return state
    }

    

} 

export default CartReducer