import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {connect} from 'react-redux';
import { forecastWeather } from './Actions';
import ShowForeCast from './ShowForeCast';
 
class ForeCast extends Component{
    componentWillMount(){
        this.props.forecastWeather(this.props.lat,this.props.lon)
    }
     

    renderItem (ForeCast){
        console.log(ForeCast)
        return <ShowForeCast  ForeCast={ForeCast} />
    
      }
     
    render(){
        const {change}=this.props.Weather
        if(change<1){
            this.props.forecastWeather(this.props.lat,this.props.lon)
        }
         
        console.log(this.props.Forecast)

        return (
             
            <FlatList data={this.props.Forecast[0]}
            renderItem={this.renderItem}
            keyExtractor={item=>item.dt_txt}
            
            />
             
        );
    }

}
 
const mapStateToProps=state=>{
    
    return{ Weather:state.Weather,Forecast:state.Cast,lat:state.location.latitude,lon:state.location.longitude };
 }


export default  connect(mapStateToProps,{forecastWeather})(ForeCast);