import React from "react"

import Header from './Header'
import ContestPreview from './ContestPreview'
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
        pageHeader: "uhhhh headdddduuuuuuuuurrrrrrr"
    };

    componentDidMount(){
        console.log("App did mount");
        //debugger;
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
                        this.props.contests.map(contest => <ContestPreview {...contest}/>)
                    }
                </div>
                <div>{this.state.test}</div>
            </div>
        );
    };

};




export default App;
