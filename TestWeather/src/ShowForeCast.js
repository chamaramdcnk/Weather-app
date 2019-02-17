import React,{Component} from 'react';
import {Text,View,TouchableOpacity,TouchableWithoutFeedback,LayoutAnimation,Platform,UIManager} from 'react-native';
import {connect} from 'react-redux';
import CardSection from './common/CardSection';
import  {selectedTime} from './Actions';
import Town from './Town'

class ShowForeCast extends Component{
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    
    renderDescription(){ 
        console.log(this.props)
         
         console.log(expanded);
        if( expanded){
            return (
                <Town data={this.props.ForeCast.item}/>
            );

        }
    }
    render(){
        
        const {titleStyle}=style;
        const {dt_txt }=this.props.ForeCast.item 
         
        return (
                <TouchableWithoutFeedback  onPress={()=> this.props.selectedTime(dt_txt)}>
                    <View>
                        <CardSection >
                            <Text style={titleStyle}>{ dt_txt} </Text>
                             
                        </ CardSection>
                        {this.renderDescription()} 
                    </ View>
                </TouchableWithoutFeedback>
        );
    }

}

const style={
    titleStyle:{
        fontSize:18,
        paddingLeft:15,
        color:'white'
         
        
    }
}
const mapStateToProps=(state,ownProps)=>{
    expanded=state.SelectedTime===ownProps.ForeCast.item.dt_txt
    return {expanded}
}
export default connect(mapStateToProps,{selectedTime})(ShowForeCast);