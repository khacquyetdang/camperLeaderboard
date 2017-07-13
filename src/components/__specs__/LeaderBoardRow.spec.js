import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LeaderBoardRow from '../LeaderBoardRow';

describe("Component : LeaderBoardRow ", function() {

    it("it should renders without exploding", function() {
      expect(shallow(<LeaderBoardRow />).length).to.equal(1);
    });

});
