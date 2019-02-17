 
export default (state={latitude:6.47,longitude:79.57},action)=>{
    console.log(action)
    switch(action.type){
        case 'GET_LOCATION':
            return {  latitude:action.payload.latitude, longitude:action.payload.longitude};
        default:
            return state;
    }

}