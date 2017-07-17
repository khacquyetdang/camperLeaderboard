import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Footer from '../Footer';

describe("Component : Footer ", function() {
  it("should contains footer div with className Footer", function() {
    var wrapper = shallow(<Footer />);
    expect(wrapper.contains(<div className="Footer">made by @danguito</div>)).to.equal(true);
  });

});
