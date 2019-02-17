export function getLocation() {
    return dispatch => {
        const geolocation = navigator.geolocation;
        geolocation.getCurrentPosition((position) => {
            latitude=position.coords.latitude;
            longitude=position.coords.longitude;
            console.log(position.coords);
            dispatch({
                type: 'GET_LOCATION',
                payload: { latitude:latitude,longitude:longitude}
            });
            
        });
};
}

export const getWeather=(lat,lon,change )=>{
    
    return  (dispatch )=>{
         
        fetch('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&APPID=c13f36b1c18b81f855e270400fb47a92', {
            method: 'get'
        }).
        catch(()=>{
            getError(dispatch)
        })
        .then(data=> {
            return data;
        }).
        then(data=>  { return data.json();
            
        } )
        .then(function (weatherResult) {
            console.log(weatherResult)
            description = weatherResult.weather[0].description;
            temp = weatherResult.main.temp;
            main = weatherResult.weather[0].main;
            humidity=weatherResult.main.humidity,
            name=weatherResult.name
            url='http://openweathermap.org/img/w/'+weatherResult.weather[0].icon+'.png';

            const forecast = {
                main: main,
                description: description,
                temp: temp,
                humidity:humidity,
                url: url,
                name:name,
                change:change
                 
            }

             
            
            weatherData(dispatch,forecast)
        }) 

    };
    

};


export const getWeatherList=(lat,lon)=>{
     
    return  (dispatch )=>{
         
        fetch('http://api.openweathermap.org/data/2.5/find?lat='+lat+'&lon='+lon+'&units=metric&cnt=40&APPID=c13f36b1c18b81f855e270400fb47a92', {
            method: 'get'
        }).
        catch(()=>{
            getError(dispatch)
        })
        .then(data=> {
            return data;
        }).
        then(data=>  { return data.json();
            
        } )
        .then(function (weatherResult) {
            
             
            
            weatherDataList(dispatch,weatherResult.list)
        }) 

    };
    

};

export const selectedTown=(town)=>{
    return ({
        type : 'select_town',
        payload:town
    }
    );
};




export const forecastWeather=(lat,lon)=>{
    
    return  (dispatch )=>{
         
        fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units=metric&APPID=c13f36b1c18b81f855e270400fb47a92', {
            method: 'get'
        }).
        catch(()=>{
            getError(dispatch)
        })
        .then(data=> {
            return data;
        }).
        then(data=>  { return data.json();
            
        } )
        .then(function (weatherResult) {
             
             
            
            forecast(dispatch,weatherResult)
        }) 

    };
    

};


export const selectedTime=(town)=>{
    return ({
        type : 'selectTime',
        payload:town
    }
    );
};

export const changeLocation=(lat,lon)=>{
    return ({
        type: 'GET_LOCATION',
        payload: { latitude:lat,longitude:lon}
    }
    );
};

const  weatherData=(dispatch,data )=>{
    dispatch({type:'Data',payload:data}) ;
     
};

const  weatherDataList=(dispatch,data )=>{
    dispatch({type:'DataList',payload:data}) ;
     
};

const forecast=(dispatch,data )=>{
    dispatch({type:'ForeCast',payload:data}) ;
     
};


geoFail=(err)=>{
    this.setState({error:err.message})
}


const  getError=(dispatch )=>{
    dispatch({type:'Error'}) ;
     
};


geoSuccess=(position)=>{
        
    this.setState({ready:true,where:{lat:position.coords.latitude,long:position.coords.longitude}})

}