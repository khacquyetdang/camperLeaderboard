import React, { Component } from 'react';
import './styles/LeaderBoardRow.sass';


class LeaderBoardRow extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    const key = this.props.id + 1;
    return (
      <tr className={ key % 2 == 1 ? "LeaderBoardRow" : "LeaderBoardRowGray" }>
        <td className="tableColumn">
          {key}
        </td>
        <td className="tableColumn">
          <div className="profile">
            <img className="profileImg" src={this.props.userScore.img} />
            <a href={"https://www.freecodecamp.com/" + this.props.userScore.username}
              target="_blank"
              className="profileName">{this.props.userScore.username}</a>
          </div>
        </td>

        <td className="tableColumn">{this.props.userScore.recent}</td>
        <td className="tableColumn">{this.props.userScore.alltime}</td>
      </tr>
    );
  }

}

export default LeaderBoardRow;
