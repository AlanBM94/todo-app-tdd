import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from './tests/utils';

const setup = () => {
    return shallow(<App />);
};

describe('App Component', () => {
    test('Renders without error', () => {
        const wrapper = setup();
        const appComponent = findByTestAttr(wrapper, 'app-component');
        expect(appComponent.length).toBe(1);
    });
});
