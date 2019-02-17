import React from 'react';
import {Image} from 'react-native';
import {Router,Scene, Actions,Tabs,Drawer} from 'react-native-router-flux';
import Container from './Container';
import WeatherList from './WeatherList';
import ForeCast from './ForeCast';
import Setting from './Setting';
 

 

const RouterComponent=()=>{
    return(
        <Router getSceneStyle={() => ({ backgroundColor: 'transparent' }) }  >
            <Scene key='root'  hideNavBar       >
                <Scene key='first'       drawer='true' contentComponent={Setting}  
                drawerImage={require('./image/menu.png')}  >
                    <Scene  key='first' component={Container}   title={'Home'}  rightButtonImage={require('./image/menu.png')}
                      navigationBarStyle={{backgroundColor:'#59788E'}} titleStyle={{paddingLeft:60}} />
                    <Scene key='ForeCast' component={ForeCast} back='true' title='Near By Location'   />
                    <Scene key='WeatherList' component={WeatherList} back='true'  title='WeatherList'  />
                     
                </Scene>

                 
                 
                 
                 
            </Scene>


        </Router>
    );
};

export default RouterComponent;