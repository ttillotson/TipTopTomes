import { connect } from 'react-redux';
import CombinedShelves from './combined_shelves';

const mapStateToProps = (state, ownProps) => {
    debugger;
  return ({
    shelf: state.entities.shelf,
    loading: state.ui.loading.shelfLoading
  });
};

const mapDispatchToProps = (dispatch) => ({

  clearShelf: () => dispatch(receiveShelf({})),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CombinedShelves);
