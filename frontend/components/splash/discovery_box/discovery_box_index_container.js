import React from 'react';
import { connect } from 'react-redux';
import DiscoveryBoxIndex from './discovery_box_index';

const mapStateToProps = (state) => ({
  books: state.entities.books,
  loading: state.ui.loading.indexLoading,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryBoxIndex);
