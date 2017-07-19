import React, { Component } from 'react';

import LeaderBoardRow from './LeaderBoardRow';
import './styles/LeaderBoardTable.sass';

class LeaderBoardTable extends Component {

  constructor(props) {
    super(props);
    console.log("constructor ");
    console.log(this.props)
    this.state = {
      usersScore : this.props.usersScore
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
    var usersScoreArr = this.state.usersScore;
    usersScoreArr.sort(function(user1, user2) {
      return user2.alltime - user1.alltime;
    });
    this.setState ({
      usersScore : usersScoreArr
    });
  }

  renderTableContent()
  {
    console.log("renderTableContent");
    console.log(this.props);
    const usersScoreArr = this.state.usersScore;
    console.log(usersScoreArr);
    if (usersScoreArr != null)
    {
      const rowsTable = usersScoreArr.map((userScore, index) => <LeaderBoardRow key={index} id={index} userScore={userScore} />);

      return rowsTable;
    }
    return null;
  }
  render() {

    return (
      <div className="LeaderBoardContainer">
        <div className="LeaderBoardHeader">LeaderBoard</div>
        <table className="LeaderBoardTable">
          <tbody>
            <tr className="headerTableRow">
              <th className="headerTableColumn"># </th>
              <th className="headerTableColumn">Camper Name </th>
              <th className="headerTableColumn"><div onClick={(e) => this.sortByLastThirdyDay()}>Points in past 30 days</div> </th>
              <th className="headerTableColumn"><div onClick={(e) => this.sortByAllTime()}>All time points </div></th>
            </tr>
            { this.renderTableContent()}
          </tbody>
        </table>
    </div>
    );
  }

}

export default LeaderBoardTable;
