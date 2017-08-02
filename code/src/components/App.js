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

const onPopState = handler => {
        window.onpopstate = handler;
};

class App extends React.Component {


    static propTypes = {
            initalData: React.PropTypes.object.isRequired
    };

    state = this.props.initialData;


    componentDidMount(){

        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
        });

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
        onPopState(null): //deregister pop state

    }



    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );
        api.fetchContest(contestId).then(contest => {
            this.setState({

                currentContestId: contest.id,
                contest: {
                    ...this.state.contests,
                    [contest.id]: contest
                }
            })
        });
        fetchContestList = () => {
            pushState(
                {currentContestId: null},
                '/ejs/'
            )
        }
        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId:null,
                contests

            });
        });

        /*
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId:contestId,
        });
        */

    };



    pageHeader() {
        if(this.state.currentContestId){
            return this.currentContest().contestName;
        }
        return 'Uuuuuuuuuuuuuuhhhhhhhhhhhhhhhhhhhh'

    }

    currentContest(){
        return this.state.contests[this.state.currentContestId];
    }

    currentContent() {
    if (this.state.currentContestId) {
      return <Contest
                contestListClick={this.fetchContestList}
                {...this.currentContest()}
                />;
    }

    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }



    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()} />
                {this.currentContent()}

                <div>{this.state.test}</div>
            </div>
        );
    };

};




export default App;
