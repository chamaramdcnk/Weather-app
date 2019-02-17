import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { getWeather} from './Actions';
 
import Card from './common/Card'
import CardSection from './common/CardSection'

class Town extends Component{
    

    render(){
        const weatherResult =this.props.data
        console.log(this.props.Weather )
        const description = weatherResult.weather[0].description;
        const temp = weatherResult.main.temp;
         
        const humidity=weatherResult.main.humidity
        const url='http://openweathermap.org/img/w/'+weatherResult.weather[0].icon+'.png';
        return(
            <View>
                <Card>
                    <CardSection>
                        <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'stretch',marginLeft:5}}>
                            <View  style={{justifyContent:'space-around',alignItems:'stretch' }}>
                                <Text style={styles.textStyle}> Description  :   {description}</Text>
                                <Text style={styles.textStyle}> Temprature   :   {temp}</Text>
                                <Text style={styles.textStyle}> Humidity     :   {humidity}</Text>
                            </View>
                            
                        
                            <View style={styles.thumbnailContainerStyle}>
                                <Image    source={{uri:url}} style={styles.imageStyle}/>
                            </View>
                        </View>

                    </CardSection>
                </Card>
            </View>
        );
    }

}



styles={
    imageStyle:{
        height:150,
        width:150,
         
      },
      thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
         
        marginTop:0,
        marginBottom:10,
        marginLeft:0,
        marginRight:10
      },
      textStyle:{
        color:'white',fontWeight: 'bold',fontFamily:'Cochin',fontSize: 15,  fontStyle:  'italic'
      }

}


export default  Town;