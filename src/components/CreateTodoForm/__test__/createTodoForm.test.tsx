import { findByTestAttr } from '../../../tests/utils';
import { shallow } from 'enzyme';
import CreateTodoForm from './../index';

describe('CreateTodoForm', () => {
    const setup = () => {
        return shallow(<CreateTodoForm />);
    };

    test('Render without error', () => {
        const wrapper = setup();
        const createTodoForm = findByTestAttr(
            wrapper,
            'create-todo-form-component'
        );
        expect(createTodoForm.length).toBe(1);
    });
});
