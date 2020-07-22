import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this is the only time where the 
    //     state = { lat: null, errorMessage: null};
    // }

    state = { lat: null, errorMessage: null};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // only call setstate to update state instead of direct assigning like in javascript 
            (position) => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})   
        );
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }
    render(){
       
            if(this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            } 
            if(this.state.lat && !this.state.errorMessage) {
                return <SeasonDisplay lat={this.state.lat}/>
            }

            return <Spinner  message='Please accept the location request'/>
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));