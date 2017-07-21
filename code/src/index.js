import React from 'react';
import ReactDOM from 'react-dom';
/*
ReactDOM.render(
    React.createElement("h2",null,'i am a react element'),
    document.getElementById("root")
);
*/

const Header = ({message}) => {
    return (
        <h2 className="text-center">
            {message}
        </h2>
    )
}

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

ReactDOM.render(
    <App headerMessage="Hello Property...." />,
    document.getElementById("root")
)
