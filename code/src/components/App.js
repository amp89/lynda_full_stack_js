import React from "react";

import Header from './Header';
//import ContestPreview from './ContestPreview';
import ContestList from './ContestList'
import data from '../testData.json';

import axios from 'axios';

/*
const App = (props) => {

    return (
        <div>
            <Header message={props.headerMessage} />
            <div>.......</div>
        </div>

    );

};


App.proptypes = {
    headerMessage: React.PropTypes.string.isRequired
};
*/

const pushState = (obj, url) => window.history.pushState(obj,"",url);

class App extends React.Component {


    state = {
        pageHeader: "uhhhh headdddduuuuuuuuurrrrrrr",
        contests: this.props.initialContests
    };

    componentDidMount(){
        console.log("App did mount");

        axios.get('/api/contests').then(
            response => {
                console.log("RESPONSE:....")
                console.log(response.data.contests);
                this.setState({
                    contests:response.data.contests
                });
            }


        ).catch(console.error);


        /*
        this.setState({
            contests: data.contests
        });
        */
    }


    componentWillUnmount(){
        console.log("App will unmount");

    }



    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );
    };



    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
                <hr />

                <div>{this.state.test}</div>
            </div>
        );
    };

};




export default App;
