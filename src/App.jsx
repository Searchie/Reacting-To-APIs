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

    getMovies = () => {
        return(
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.setState({returnedData: obj}))
            .then(() => this.setState({dataType: 'Movies'}))
            .then(() => this.handleGetMovies)
        )
    }

    getPeople = () => {
        return(
            fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(obj => this.setState({returnedData: obj}))
            .then(() => this.setState({dataType: 'People'}))
            .then(() => this.handleGetMovies)
        )
    }

    handleGetMovies = () => {
        this.setState({init: true})
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
                    <Header />
                    <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                        <label 
                            className="btn btn-secondary active"
                            onClick={this.getMovies}
                        >
                            <input type="radio" name="options" id="movieOption" autoComplete="off" defaultChecked/>Movies
                        </label>
                        <label 
                            className="btn btn-secondary"
                            onClick={this.getPeople}
                        >
                            <input type="radio" name="options" id="peopleOption" autoComplete="off"/>People
                        </label>
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