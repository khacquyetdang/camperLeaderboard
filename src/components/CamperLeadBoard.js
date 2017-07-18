import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import LeaderBoardTable from './LeaderBoardTable';

import './styles/CamperLeadBoard.sass';

class CamperLeadBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      camperScore : [
        {"username":"sjames1958gm","img":"https://avatars2.githubusercontent.com/u/4639625?v=3","alltime":7731,"recent":311,"lastUpdate":"2017-07-14T06:41:32.735Z"},
        {"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":5925,"recent":271,"lastUpdate":"2017-07-16T19:05:51.310Z"},
        {"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":5336,"recent":268,"lastUpdate":"2017-07-16T19:07:22.499Z"},
        {"username":"diomed","img":"https://avatars3.githubusercontent.com/u/72777?v=3","alltime":4926,"recent":240,"lastUpdate":"2017-07-16T19:09:37.590Z"},
        {"username":"Blauelf","img":"https://avatars.githubusercontent.com/u/5952026?v=3","alltime":4135,"recent":220,"lastUpdate":"2017-06-28T10:45:25.424Z"},
        {"username":"Chrono79","img":"https://avatars0.githubusercontent.com/u/9571508?v=3","alltime":4129,"recent":306,"lastUpdate":"2017-06-28T11:24:49.080Z"}
      ]

    }
  }

  componentWillMount()
  {
    fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/alltime`)
    .then(result=>result.json())
    .then(items=>this.setState({camperScore : items})):
  }

  render() {

    var camperScore = this.state.camperScore;

    return (
      <div className="CamperLeadBoard">
        <Header />
        <LeaderBoardTable usersScore={camperScore}></LeaderBoardTable>
        <Footer />
      </div>
    );
  }

}

export default CamperLeadBoard;
