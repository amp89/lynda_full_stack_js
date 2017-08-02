import React from "react";

import Header from './Header';
//import ContestPreview from './ContestPreview';
import ContestList from './ContestList'
import Contest from './Contest'


import data from '../testData.json';

import axios from 'axios';

import * as api from '../api';
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
        api.fetchContest(contestId).then(contest => {
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id,
                contest: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        });
        /*
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId:contestId,
        });
        */

    };

    currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }



    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                {this.currentContent()}

                <div>{this.state.test}</div>
            </div>
        );
    };

};




export default App;
