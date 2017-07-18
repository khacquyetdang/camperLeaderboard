import React, { Component } from 'react';

import LeaderBoardRow from './LeaderBoardRow';
import './styles/LeaderBoardTable.sass';

class LeaderBoardTable extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const usersScoreArr = this.props.usersScore;

    return (
      <div className="LeaderBoardContainer">
        <div className="LeaderBoardHeader">LeaderBoard</div>
        <table className="LeaderBoardTable">

          <tr className="headerTableRow">
            <th className="headerTableColumn"># </th>
            <th className="headerTableColumn">Camper Name </th>
            <th className="headerTableColumn">Points in past 30 days </th>
            <th className="headerTableColumn">All time points </th>
          </tr>
          {usersScoreArr.map((userScore, index) => <LeaderBoardRow id={index} userScore={userScore} />)}
        </table>
    </div>
    );
  }

}

export default LeaderBoardTable;
