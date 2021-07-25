import { findByTestAttr } from '../../../tests/utils';
import { mount } from 'enzyme';
import Input from './../index';

describe('Input', () => {
    const inputProps = {
        onChangeEvent: jest.fn(),
        placeholder: 'John Doe',
        name: 'name',
        value: 'John',
    };

    const setup = () => {
        return mount(<Input {...inputProps} />);
    };

    test('Renders without error', () => {
        const wrapper = setup();
        const inputElement = findByTestAttr(wrapper, 'input-component');
        expect(inputElement.length).toBe(1);
    });

    test('Renders input element without error', () => {
        const wrapper = setup();
        const inputElement = findByTestAttr(wrapper, 'input-element');
        expect(inputElement.length).toBe(1);
    });

    test('Emit event when input value changes', () => {
        const wrapper = setup();
        const inputElement = findByTestAttr(wrapper, 'input-element');
        inputElement.simulate('change');
        expect(inputProps.onChangeEvent).toHaveBeenCalled();
    });

    test('Change value when input prop change', () => {
        expect(inputProps.value).toBe('John');
    });
});
