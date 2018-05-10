import React from 'react';
import AddShelfForm from './add_shelf_form';

class ShelfListItem extends React.Component {
    constructor(props) {
        this.props = props;
        this.state = {
            editForm: false
        };
    }

    componentWillReceiveProps(nextProps) {
        let currentShelves = Object.keys(this.props.shelf.shelves);
        let nextShelves = Object.keys(nextProps.shelf.shelves);
        const isEqual = function (arr1, arr2) {
            if (arr1.length !== arr2.length ) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        if (!isEqual(currentShelves, nextShelves)) {
            this.setState({ addForm: false });
        }
        
        if (this.props.match.params.bookshelfId) {
            this.props.fetchShelf(this.props.match.params.bookshelfId);
        } else {
            this.props.fetchCombinedShelf(this.props.match.params.userId);
        }
    }

    update() {
        this.setState({ editForm: true });
    }

    render() {
        const { deleteShelf, updateShelf, clearErrors, info, owner } = this.props;
        let editIcons = (
            <td>
                <div className='shelf_edit' onClick={() => this.update()}>
                </div>

                <div className='shelf_remove' onClick={() => deleteShelf(info[1])}>
                </div>
            </td>
        );

        let shelf = (
            <tr key={`shelf-${info[1]}`}>
                <td>
                    <Link to={`/bookshelf/${owner}/${info[0]}`}>{info[1]}</Link>   <span>({info[2]})</span>
                </td>
                <td>
                    { owner ? editIcons : null }
                </td>
            </tr>);

        let editButton = <tr><td><button onClick={() => this.update()}  className='add_shelf' >Add Shelf</button></td></tr>;

        let editShelfForm = <AddShelfForm clearErrors={clearErrors} shelfAction={updateShelf} shelf={info}/>;

        let editShelfLogic = this.state.editForm ? editShelfForm : shelf; 

    }
}

export default ShelfListItem;