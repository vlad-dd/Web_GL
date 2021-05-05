import React from 'react';
import Form from './Form'




test('the data is correct ', () => {
    expect('Form').toMatchSnapshot();
});

test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
  });