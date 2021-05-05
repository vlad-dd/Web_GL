import React from 'react';
import Register from './Register'
// import { shallow, render, mount, configure } from 'enzyme';



test('the input data is correct ', () => {
    expect(Register).toMatchSnapshot();
});

describe('InputWithValidation tests', () => {
    it('should render component with initial state', () => {
        const props = {
            handleClick: jest.fn()
        }
        const wrapper = shallow(<Register  {...props}/>);
        expect(wrapper.state('value').toBe(''))
        expect(wrapper.find('input').length).toBe(0)
        expect(wrapper.find('button').length).toBe(0)

    })
});

test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
});

it("saves on submit", function(){
    Register.done = jest.genMockFunction();
    Register.insideDone = jest.genMockFunction();
  TestUtils.Simulate.submit(form-group);
  expect(Register.done).toBeCalled(); 
  expect(Register.insideDone).toBeCalled(); 
});

// const wrapper = shallow(<Register {...props} />);
// wrapper.find('input').simulate('change', {target: {value: 'not an email'}});
// expect(wrapper.find('button').length).toBe(1);

// wrapper.find('input').simulate('change', {target: {value: 'test@test.com'}});
// expect(wrapper.find('button').length).toBe(1);