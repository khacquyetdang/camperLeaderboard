import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import CamperLeadBoard from '../CamperLeadBoard';

describe("Component : CamperLeadBoard", function() {
  it("it should renders without exploding", function() {
    expect(shallow(<CamperLeadBoard />).length).to.equal(1);
  });

});
