import React from 'react';
import {View} from 'react-native';

const CardSection=(props)=>{
  return (
    <View style={styles.containerStyle}>
       {props.children}
        
    </ View>
  );

};

const styles={
  containerStyle :{
    borderBottomWidth:1,
    padding:3,
     
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative'
  }
};
export default CardSection;
