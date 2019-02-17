export default (state={description:null,temp:null,humidity:null,url:null,change:0},action)=>{
     
    switch(action.type){
        case 'Data':
            return { description: action.payload.description,temp: action.payload.temp,humidity: action.payload.humidity,url: action.payload.url,name:action.payload.name,change:action.payload.change };
        case 'Error':
            return { weather: action.payload};
        default:
            return state;
    }

}