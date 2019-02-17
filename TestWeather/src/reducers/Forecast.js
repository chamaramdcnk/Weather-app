export default (state=[ ],action)=>{
    console.log(action.type )
    switch(action.type){
        
        case  'ForeCast':
            console.log(action.payload.list )
            return [ action.payload.list ];
        case 'Error':
            return { weather: action.payload};
        default:
            return state;
    }

}