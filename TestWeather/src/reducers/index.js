import {combineReducers} from 'redux';
import GeoLocation from './GeoLocation';
import WeatherData from './WeatherData';
import WeatherList from './WeatherList';
import selectedTown from './selectedTown';
import ForeCast from './Forecast';
import SelectedTime from './SelectedTime';
 


export default combineReducers({
     location:GeoLocation, List:WeatherList,Weather:WeatherData,selectedtown :selectedTown,Cast:ForeCast,SelectedTime:SelectedTime 
});