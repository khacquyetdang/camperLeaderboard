import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LeaderBoardRow from '../LeaderBoardRow';

describe("Component : LeaderBoardRow ", function() {
  var camperJson;
  var props;
  var wrapper;
  beforeEach(function() {

    camperJson = {username:"anthonygallina1",
      img:"https://avatars.githubusercontent.com/u/11003055?v=3",
      alltime:5325,
      recent:460,
      lastUpdate:"2017-07-06T18:22:39.471Z"
    };
    props = {
      data : camperJson
    };
    //wrapper = shallow(<LeaderBoardRow {...props}/>);
    wrapper = shallow(<LeaderBoardRow userScore={camperJson}/>);
    //wrapper.setProps(props);
  });

  it("it should renders without exploding", function() {
    expect(wrapper.length).to.equal(1);
  });

  it("it should renders with data ", function() {

    expect(wrapper.instance().props.userScore).to.equal(camperJson);
    expect(wrapper.containsMatchingElement( <img src={camperJson.img}/>)).to.equal(true);
    expect(wrapper.containsMatchingElement( <div>{camperJson.username}</div>)).to.equal(true);
    expect(wrapper.find('.recentScore')).to.have.length(1);
    expect(wrapper.containsMatchingElement( <div>{camperJson.recent}</div>)).to.equal(true);
    expect(wrapper.find('.allTimeScore')).to.have.length(1);
    expect(wrapper.containsMatchingElement( <div>{camperJson.alltime}</div>)).to.equal(true);

  });


});
