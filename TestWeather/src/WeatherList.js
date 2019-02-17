import React,{Component} from 'react';
import {View,Text,FlatList} from 'react-native';
import {getWeatherList} from './Actions';
import {connect} from 'react-redux';
import ShowTown  from './ShowTown';
import { getLocation} from './Actions';

class WeatherList extends Component{
    componentWillMount(){
        this.props.getWeatherList(this.props.lat,this.props.lon)
    }
    
    renderItem (town){
        console.log(town)
        return <ShowTown town={town} />
    
      }

    render(){
        const {change}=this.props.Weather
        if(change<1){
            this.props.getWeatherList(this.props.lat,this.props.lon)
        }
         
         
        return (
            <FlatList data={this.props.WeatherList[0]}
            renderItem={this.renderItem}
            keyExtractor={item=>item.id}
            
            />
        )
    }

}



const mapStateToProps=state=>{
     
    return{ Weather:state.Weather,WeatherList:state.List ,lat:state.location.latitude,lon:state.location.longitude};
 }
export default connect(mapStateToProps,{getWeatherList,getLocation})(WeatherList);
