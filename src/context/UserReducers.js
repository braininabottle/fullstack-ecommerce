const UserReducer = (state, action) => {

    const {type, payload } = action

    switch(type){
        case 'LOGIN':
            localStorage.setItem('token', payload)
            return { 
                ...state,
                token: payload
            }
        case 'LOGOUT':
            localStorage.removeItem('token')
            return { 
                ...state,
                token: null
            }
         case 'USERDATA':
            return {
                ...state,
                user: payload
            }
        default :
        return state
    }

    

} 

export default UserReducer