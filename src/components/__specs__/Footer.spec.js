import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer from '../Footer';

describe("Component : Footer ", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Footer />).contains(  <div className="Footer">
        made by @danguito
      </div>)).to.equal(true);
  });

});
