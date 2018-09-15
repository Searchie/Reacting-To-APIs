import React, {Component} from 'react';
//import 'es6-promises';
import 'isomorphic-fetch';
import Header from './components/Header';
import CardList from'./components/CardList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            returnedData: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => this.setState({returnedData: obj}))
        .then(setTimeout(() => console.log(this.state.returnedData), 2000));
    }

    render() {
        return(
            <div className="container-fluid">
                <Header />
                <CardList
                    items={this.state.returnedData}
                />
            </div>
        )
    }
}

export default App;