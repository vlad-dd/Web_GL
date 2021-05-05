import React from 'react';
import Login from './Login'




test('the login data is correct ', () => {
    expect('Login').toMatchSnapshot();
});


test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
  });

  it("saves on submit", function(){
    Login.done = jest.genMockFunction();
    Login.insideDone = jest.genMockFunction();
  TestUtils.Simulate.submit(form-group);
  expect(Login.done).toBeCalled(); 
  expect(Login.insideDone).toBeCalled(); 
});

describe('InputWithValidation tests', () => {
    it('should render component with initial state', () => {
        const props = {
            handleClick: jest.fn()
        }
        const wrapper = shallow(<Login  {...props}/>);
        expect(wrapper.state('value').toBe(''))
        expect(wrapper.find('input').length).toBe(0)
        expect(wrapper.find('button').length).toBe(0)

    })
});

it('should hide warning input when text will contain @', () => {
    const props = {
        handleClick: jest.fn()
    };

    const wrapper = shallow(<Login {...props} />);
    wrapper.find('input').simulate('change', {target: {value: 'not an email'}});
    expect(wrapper.find('button').length).toBe(1);

    wrapper.find('input').simulate('change', {target: {value: 'test@test.com'}});
    expect(wrapper.find('button').length).toBe(1);

  
    
});