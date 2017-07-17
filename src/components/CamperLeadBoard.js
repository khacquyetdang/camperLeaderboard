import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import LeaderBoardTable from './LeaderBoardTable';


class CamperLeadBoard extends Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div className="CamperLeadBoard">
        <Header />
        <LeaderBoardTable></LeaderBoardTable>
        <Footer />
      </div>
    );
  }

}

export default CamperLeadBoard;
