import React,{Component} from 'react';
import {View,Text} from 'react-native';
import CardSection from './common/CardSection'

class Setting extends Component {

    render (){
         return(
              <View>
                <CardSection>
                    <Text> Setting</Text>
                 </CardSection>
             </View>
         );
        }
    
}

export default Setting;