import React, {Component} from 'react';
//import 'es6-promises';
import 'isomorphic-fetch';
import Header from './components/Header';
import CardList from'./components/CardList';
import GhilbiLogo from './components/GhilbiLogo';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            returnedData: [],
            init: false,
            dataType: ''
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies() {
        return(
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.setState({returnedData: obj}))
            .then(this.setState({dataType: 'movies'}))
        )
    }

    getPeople() {
        return(
            fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => this.setState({returnedData: obj}))
            .then(this.setState({dataType: 'people'}))
        )
    }

    handleGetMovies = () => {
        this.setState({init: true})
        setTimeout(() => console.log(this.state.init), 1000);
    }

    render() {

        if (this.state.init === false) {
            return(
                <React.Fragment>
                    <Header />
                    <div className="d-flex flex-column align-items-center">
                        <GhilbiLogo />
                        <button 
                            className="btn btn-info"
                            onClick={this.handleGetMovies}
                        >Get Movies!
                        </button>
                    </div>
                </React.Fragment>
            )
        }
        else {
            return(
                <React.Fragment>
                <div>
                    <Header />
                    <button className="btn btn-primary">Switch Info</button> 
                </div>
                    <CardList
                        items={this.state.returnedData}
                        dataType={this.state.dataType}
                    />
                </React.Fragment>
            )
        }
    }
}

export default App;