import { ShallowWrapper } from 'enzyme';
import React from 'react';

export const findByTestAttr = (wrapper: ShallowWrapper, val: string) => {
    return wrapper.find(`[data-test="${val}"]`);
};
