import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import LeaderBoardTable from '../LeaderBoardTable';

describe("Component : LeaderBoardTable ", function() {

    it("it should renders without exploding", function() {
      expect(shallow(<LeaderBoardTable />).length).to.equal(1);
    });

});
