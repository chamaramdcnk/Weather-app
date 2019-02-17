import React, { Component } from 'react';
import { View, Text ,TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import { getLocation } from './Actions';
import { getWeather,changeLocation } from './Actions';
import Weather from './Weather';
import GeoGet from './GeoGet';
import WeatherList from './WeatherList';
import ForeCast from './ForeCast';
import Card from './common/Card';
import { Actions } from 'react-native-router-flux';
 

class Container extends Component {
    constructor() {
        super()
        this.state = {
            ready: false, where: { lat: null, log: null }, error: null
        };

    }
    
    componentWillMount() {
        this.props.getLocation()

    }
    
    render() {


        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                
                <Weather   / >  

                <TouchableWithoutFeedback  onPress={()=>  Actions.WeatherList()}>
                    <View>
                        <Card >
                            <View  >
                                <Text  style={{color:'white',fontSize:20}}>Near By Location </Text>
                            </View  >
                        </ Card>
                        
                    </ View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  onPress={()=>  Actions.ForeCast()}>
                    <View>
                        <Card >
                            <View  >
                                <Text  style={{color:'white',fontSize:20}}> Forecast </Text>
                            </View  >
                        </ Card>
                        
                    </ View>
                </TouchableWithoutFeedback>
                
                {/* <WeatherList     /> */}
                {/*<ForeCast/>*/}
            </View>
        );

    }

}

const mapStateToProps = state => {
    console.log(state.Error)
    return { location: state.location,Error:state.Error };
}


export default connect(mapStateToProps, { getLocation,changeLocation })(Container);