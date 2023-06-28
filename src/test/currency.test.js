import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../redux/store';

import Currency from '../components/currencies/Currency';

it('test navbar render', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={Store}>
          <Currency />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
