import { findByTestAttr } from '../../../tests/utils';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from './../index';

describe('Button', () => {
    const mockEvent = jest.fn();

    const setup = () => {
        return shallow(<Button text="Crear" event={mockEvent} />);
    };

    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    test('Render without error', () => {
        const buttonComponent = findByTestAttr(wrapper, 'button-component');
        expect(buttonComponent.length).toBe(1);
    });

    test('Show text button', () => {
        const buttonComponent = findByTestAttr(wrapper, 'button-component');
        expect(buttonComponent.text()).toBe('Crear');
    });

    test('Event is executed when button is clicked', () => {
        wrapper.simulate('click');
        expect(mockEvent).toHaveBeenCalled();
    });
});
