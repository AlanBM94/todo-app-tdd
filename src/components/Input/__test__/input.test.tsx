import { findByTestAttr } from '../../../tests/utils';
import { shallow } from 'enzyme';
import Input from './../index';

describe('Input', () => {
    const setup = () => {
        return shallow(<Input />);
    };

    test('Renders without error', () => {
        const wrapper = setup();
        const inputElement = findByTestAttr(wrapper, 'input-component');
        expect(inputElement.length).toBe(1);
    });
});
