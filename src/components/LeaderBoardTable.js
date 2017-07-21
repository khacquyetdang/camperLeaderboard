import React, { Component } from 'react';

import LeaderBoardRow from './LeaderBoardRow';
import './styles/LeaderBoardTable.sass';

class LeaderBoardTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usersScore : this.props.usersScore,
      sortedByAllTime: true
    };
  }

  componentWillReceiveProps(nextProps)
  {
    this.setState ({
      usersScore : nextProps.usersScore
    });
  }

  sortByLastThirdyDay()
  {
    this.setState({sortedByAllTime : false});
    var usersScoreArr = this.state.usersScore;
    usersScoreArr.sort(function(user1, user2) {
      return user2.recent - user1.recent;
    });
    this.setState ({
      usersScore : usersScoreArr
    });
  }

  sortByAllTime()
  {
    this.setState({sortedByAllTime : true});
    var usersScoreArr = this.state.usersScore;
    usersScoreArr.sort(function(user1, user2) {
      return user2.alltime - user1.alltime;
    });
    this.setState ({
      usersScore : usersScoreArr,
      sortedByAllTime: true
    });
  }

  renderTableContent()
  {
    const usersScoreArr = this.state.usersScore;
    if (usersScoreArr != null)
    {
      const rowsTable = usersScoreArr.map((userScore, index) => <LeaderBoardRow key={index} id={index} userScore={userScore} />);

      return rowsTable;
    }
    return null;
  }
  render() {

    const sortedByAllTime = this.state.sortedByAllTime;
    //var sortedByAllTime = true;

    return (
      <div className="LeaderBoardContainer">
        <div className="LeaderBoardHeader">LeaderBoard</div>
        <table className="LeaderBoardTable">
          <tbody>
            <tr className="headerTableRow">
              <th className="headerTableColumn"># </th>
              <th className="headerTableColumn">Camper Name </th>
              <th className="headerTableColumn">
                <div className={sortedByAllTime ? "recentPointColumn" : "recentPointColumnSelected"} onClick={(e) => this.sortByLastThirdyDay()}>Points in past 30 days
                {sortedByAllTime ? <div></div> : <span className="caret"></span>}
              </div> </th>
              <th className="headerTableColumn">
                <div className={sortedByAllTime ? "recentPointColumnSelected" : "recentPointColumn"} onClick={(e) => this.sortByAllTime()}>All time points
                  {sortedByAllTime ? <span className="caret"></span> : <div></div> }
                </div></th>
            </tr>
            { this.renderTableContent()}
          </tbody>
        </table>
    </div>
    );
  }

}

export default LeaderBoardTable;
