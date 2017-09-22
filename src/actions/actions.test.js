// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import nock from 'nock';
// import { fetchSheet } from './index';
// import { mockSheetData } from '../mockdata';
/* eslint-disable max-len */
//
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
//
// describe('actions', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });
//
//   it('should create an action to fetch a sheet', () => {
//     nock('http://localhost:8000')
//       .post('/graphql')
//       .reply(200, mockSheetData);
//
//     const expectedActions = [
//       {
//         type: 'SHEET_RETRIEVED',
//         sheet: mockSheetData,
//       },
//     ];
//
// const store = mockStore({ range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} });
//
//     return store.dispatch(fetchSheet()).then(() => {
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
// });
