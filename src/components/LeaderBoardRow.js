import React, { Component } from 'react';

class LeaderBoardRow extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="LeaderBoardRow">
        <div className="recentScore">{this.props.data.recent}</div>
        <div className="allTimeScore">{this.props.data.alltime}</div>
        <div>
          <img className="userProfile" src={this.props.data.img} />
          <div className="userName">{this.props.data.username}</div>
        </div>
      </div>
    );
  }

}

export default LeaderBoardRow;
