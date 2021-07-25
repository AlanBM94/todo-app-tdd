import { ReactWrapper, ShallowWrapper } from 'enzyme';
import React from 'react';

export const findByTestAttr = (
    wrapper: ShallowWrapper | ReactWrapper,
    val: string
) => {
    return wrapper.find(`[data-test="${val}"]`);
};
