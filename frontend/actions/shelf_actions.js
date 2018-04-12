import * as ShelfApiUtil from '../util/shelf_api_util';
import { REMOVE_REVIEW } from './review_actions';

export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const RECEIVE_SHELF_ITEM = 'RECEIVE_SHELF_ITEM';
export const REMOVE_SHELF = 'REMOVE_SHELF';
export const REMOVE_SHELF_ITEM = 'REMOVE_SHELF_ITEM';
export const RECEIVE_SHELF_ERRORS = 'RECEIVE_SHELF_ERRORS';
export const START_LOADING_SHELF = 'START_LOADING_SHELF';

const receiveShelf = (shelf) => ({
  type: RECEIVE_SHELF,
  shelf
});

const removeShelf = (shelfId) => ({
  type: REMOVE_SHELF,
  shelfId
});

const receiveShelfItem = (shelfItem) => ({
  type: RECEIVE_SHELF_ITEM,
  shelfItem
});

const removeShelfItem = (shelfItemId) => ({
  type: REMOVE_SHELF_ITEM,
  shelfItemId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SHELF_ERRORS,
  errors
});

const startLoadingShelf = () => ({
  type: START_LOADING_SHELF
});


export const fetchShelf = (shelfId) => (dispatch) => {
  dispatch(startLoadingShelf());
  return ShelfApiUtil.fetchShelf(shelfId).then(ajaxShelf => 
    (dispatch(receiveShelf(ajaxShelf))
  ), errors => ( 
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const fetchCombinedShelf = (userId) => (dispatch) => {
  dispatch(startLoadingShelf());
  return ShelfApiUtil.fetchCombinedShelf(userId).then(ajaxShelf => 
    dispatch(receiveShelf(ajaxShelf)
  ), errors => ( 
    dispatch(receiveErrors(errors.responseJSON))
  ));
};

export const createShelf = (shelf) => (dispatch) => (
  ShelfApiUtil.createShelf(shelf).then(ajaxShelf => 
    dispatch(receiveShelf(ajaxShelf)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createShelfItem = (shelfItem) => (dispatch) => {
  dispatch(startLoadingShelf());
  return ShelfApiUtil.createShelfItem(shelfItem).then(ajaxShelfItem =>
    (dispatch(receiveShelfItem(ajaxShelfItem))
    ), errors => (
      dispatch(receiveErrors(errors.responseJSON))
    ));
};

export const updateShelf = (shelf) => (dispatch) => (
  ShelfApiUtil.updateShelf(shelf).then(ajaxShelf => 
    dispatch(receiveShelf(ajaxShelf)
  ), errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const deleteShelf = (shelfId) => (dispatch) => (
  ShelfApiUtil.removeShelf(shelfId).then(() => 
    dispatch(removeShelf(shelfId)
  ), errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const deleteShelfItem = (shelfItemId) => (dispatch) => (
  ShelfApiUtil.removeShelf(shelfItemId).then(() =>
    dispatch(removeShelfItem(shelfItemId)
    ), errors => (
      dispatch(receiveErrors(errors))
    ))
);