



const count =(state = [], action) => {
    switch(action.type) {
        case 'INCREMENT':
           if(state.count < 10) {
               return { count: state.count + 1}
           }else {
               return {
                   count: 0
               }
           }
        default:
        return state
    }

}

export default count
