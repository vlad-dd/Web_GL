import React from 'react';
import Day from './Day'
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';




test('the data is correct ', () => {
    expect('Day').toMatchSnapshot();
});



// describe('CalendarTitle', () => {

//     let component;
//     let node; 

//     beforeEach(() => {
//         component = TestUtils.renderIntoDocument(<div><Day title={props.day}/></div>);
//         node = ReactDOM.findDOMNode(component);
//     });

//     it('displays a title supplied', () => {

//         // Verify that its textContent is "Sunday"
//         expect(node.querySelector('div').textContent).toBe(title);

//     })

// })