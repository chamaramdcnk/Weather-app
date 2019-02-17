import React,{Component} from 'react';
import {View,Text,ImageBackground} from 'react-native';
import {Provider} from 'react-redux';   
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import background from './image/background.jpg';
import Router from './Router';
import Container from './Container'

class App extends Component{
    render(){
         
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <ImageBackground source={require('./image/background.jpg')} style={style.background}>
                        <View style={{ flex: 1 }}>
                             <Router/>
                        </View>
                    </ImageBackground>
            </ Provider>
           
        );
    }
}

const style={
    background:{
      
      width: "100%",
      height: "100%",
       
       
    }
  };

export default  App;