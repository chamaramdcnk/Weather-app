export default (state=null,action)=>{
    console.log(action)
   switch(action.type){
       case 'selectTime':
            
           return action.payload;
       default:
           return state;

   }
    
};