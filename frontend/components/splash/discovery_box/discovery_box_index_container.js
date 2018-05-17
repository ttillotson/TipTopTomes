import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../../actions/book_actions';
import DiscoveryBoxIndex from './discovery_box_index';
import selectAllBooks from '../../../reducers/selectors';


const mapStateToProps = (state) => ({
  // books: state.entities.books,
  books: selectAllBooks(state.entities),
  loading: state.ui.loading.indexLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryBoxIndex);
