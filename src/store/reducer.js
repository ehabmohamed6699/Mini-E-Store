let initialState={
    favorties:[]
}

export default function favReducer(state=initialState,action){
    switch (action.type) {
        case 'SET_Favorite' :
            let isInFavorite=state.favorties.findIndex(
                (prod)=>prod.id==action.payload.id
            )
            if(isInFavorite===-1){
                state.favorties.push(action.payload)
            }
            return state;
    
        default:
            return state;
            
    }

}