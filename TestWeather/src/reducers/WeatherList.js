export default (state=[ ],action)=>{
     
    switch(action.type){
        case  'DataList':
            console.log(action.payload[0] )
            return [ action.payload ];
        case 'Error':
       
            return { weather: action.payload};
        default:
            return state;
    }

}