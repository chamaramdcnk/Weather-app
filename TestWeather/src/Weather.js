import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import { getWeather} from './Actions';
import {connect} from 'react-redux';
import Card from './common/Card'
import CardSection from './common/CardSection'

class Weather extends Component{
    componentWillMount(){
        this.props.getWeather(this.props.lat,this.props.lon ,0)
        
         
        
     }

    render(){
         
        
        const {description,temp,humidity,url,name,change}=this.props.Weather
        console.log('change')
         console.log(change)
        if(change<1){
            this.props.getWeather(this.props.lat,this.props.lon,change+1 )
        }
        console.log(this.props.Weather )
        return(
            <View>
                <Card>
                    <CardSection>
                        <View  style={{flexDirection:'row',justifyContent:'center',alignItems:'stretch',marginLeft:5}}>
                            <View  style={{justifyContent:'space-around',alignItems:'stretch' }}>
                                <Text style={styles.textStyle}> Location         :   {name}</Text>
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

const mapStateToProps=state=>{
    
    return{ Weather:state.Weather, lat:state.location.latitude,lon:state.location.longitude};
 }




 export default connect(mapStateToProps,{getWeather})(Weather);
