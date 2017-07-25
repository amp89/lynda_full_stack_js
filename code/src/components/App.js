import React from "react";

import Header from './Header';
import ContestPreview from './ContestPreview';

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


class App extends React.Component {

    state = {
        pageHeader: "uhhhh headdddduuuuuuuuurrrrrrr",
        contests: []
    };

    componentDidMount(){
        console.log("App did mount");
        //debugger;
        axios.get('/api/contests').then(
            response => {
                console.log(response.data.contests);
                this.setState({
                    contests:response.data.contests
                });
            }


        ).error(console.error(data))


        /*
        this.setState({
            contests: data.contests
        });
        */
    };

    componentWillUnmount(){
        console.log("App will unmount");
        //debugger;
    }



    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {
                        this.state.contests.map(contest => <ContestPreview key={contest.id} {...contest}/>)
                    }
                </div>
                <div>{this.state.test}</div>
            </div>
        );
    };

};




export default App;
