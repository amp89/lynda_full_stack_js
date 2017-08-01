import React, {Component} from 'react';

//NEW CLASS WAY



class ContestPreview extends Component {

    handleClick = () => {
            console.log(this.props.onClick(this.props.id));
    };

    render() {
        return (
            <div className = "ContestPreview" onClick={this.handleClick}>
                <div>
                    {this.props.categoryName}
                </div>
                <div>
                    {this.props.contestName}
                </div>
            </div>
        )
    };

    //dont do this
    /*
    propTypes = {
        categoryName: React.PropTypes.string.isRequired,
        contestName: React.PropTypes.string.isRequired,
    }
    */


}


ContestPreview.propTypes = {
    categoryName: React.PropTypes.string.isRequired,
    contestName: React.PropTypes.string.isRequired,
    id:React.PropTypes.number.isRequired,
}

//OLD, FUNCTION WAY (stateless)
/*
const ContestPreview = (contest) => (
    <div className="ContestPreview">
        <div>
            {contest.categoryName}
        </div>
        <div>
            {contest.contestName}
        </div>

    </div>

);
*/

export default ContestPreview;
