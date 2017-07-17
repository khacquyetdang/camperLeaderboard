import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
//import shallow from 'react-test-renderer';
import renderer from 'react-test-renderer';
import CamperLeadBoard from '../CamperLeadBoard';
import Header from '../Header';
import Footer from '../Footer';
import LeaderBoardTable from '../LeaderBoardTable';


describe("Component : CamperLeadBoard", function() {
  var wrapper;
  beforeEach(function() {
    wrapper = shallow(<CamperLeadBoard></CamperLeadBoard>);
  });


  it("it should contains header", function() {
    expect(wrapper.find(Header).length).to.equal(1);
  });

  it("it should contains footer", function() {
    expect(wrapper.find(Footer).length).to.equal(1);
  });

  it("it should contains LeaderBoardTable ", function() {
    expect(wrapper.find(LeaderBoardTable).length).to.equal(1);
  });

});
