import React,{Component} from 'react';
import {Text,View,TouchableOpacity,TouchableWithoutFeedback,LayoutAnimation,Platform,UIManager} from 'react-native';
import {connect} from 'react-redux';
import CardSection from './common/CardSection';
import  {selectedTown} from './Actions';
import Town from './Town'

class ShowTown extends Component{
    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }
    componentDidMount(){
        
    }
    renderDescription(){ 
        console.log(this.props)
        const{selectedLibraryId,expanded}=this.props;
        const {id,name}=this.props.town.item;
         console.log(expanded);
        if( expanded){
            return (
                <Town data={this.props.town.item}/>
            );

        }
    }
    render(){
        
        const {titleStyle}=style;
        const {id,dt,name}=this.props.town.item 
         
        return (
                <TouchableWithoutFeedback  onPress={()=> this.props.selectedTown(id)}>
                    <View>
                        <CardSection >
                            <Text style={titleStyle}>{ name} </Text>
                             
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
    expanded=state.selectedtown===ownProps.town.item.id
    return {expanded}
}
export default connect(mapStateToProps,{selectedTown})(ShowTown);