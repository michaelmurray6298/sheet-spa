import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { fetchSheet } from './index';
import data from '../seeds';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create an action to fetch a sheet', () => {
    nock('http://localhost:8000')
      .get('/sheet/:id')
      .reply(200, data);

    const range = 'Sheet1!A1:D5';
    const majorDimension = 'ROWS';
    const header = ['AcolumnName', 'BcolumnName', 'CcolumnName', 'DcolumnName', 'EcolumnName'];
    const rows = [
      ['A2', 'B2', 'C2', 'D2', 'E2'],
      ['A3', 'B3', 'C3', 'D3', 'E3'],
      ['A4', 'B4', 'C4', 'D4', 'E4'],
      ['A5', 'B5', 'C5', 'D5', 'E5'],
    ];


    const expectedActions = [
      {
        type: 'SHEET_RETRIEVED',
        range,
        majorDimension,
        header,
        rows,
      },
    ];

    const store = mockStore({ range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} });

    return store.dispatch(fetchSheet()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
