import { findByTestAttr } from '../../../tests/utils';
import { shallow } from 'enzyme';
import Todo from './../index';

describe('Todo', () => {
    const setUp = () => {
        return shallow(<Todo />);
    };

    test('Render without error', () => {
        const wrapper = setUp();
        const todoComponent = findByTestAttr(wrapper, 'todo-component');
        expect(todoComponent.length).toBe(1);
    });
});
