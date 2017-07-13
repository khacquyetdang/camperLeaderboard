import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../Header';

describe("Component : Header ", function() {
  it("it should contains spec with an an image", function() {
    expect(shallow(<Header />).containsMatchingElement( <img/>)).to.equal(true);
  });

});
