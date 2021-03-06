import React from 'react';
import { Link } from 'react-router-dom';
import AddShelfForm from './add_shelf_form';

class ShelfListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editForm: false
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(shelfId) {
        this.props.deleteShelf(shelfId);
        const { owner, info } = this.props;
        // Change Shelf if deleting current shelf
        let currentLocation = this.props.history.location.pathname;
        let shelfPath = `/bookshelf/${owner}/${info[0]}`;
        if (currentLocation === shelfPath) this.props.history.push(`/bookshelf/${owner}`);
    }

    update() {
        this.setState({ editForm: true });
    }

    render() {
        const { deleteShelf, updateShelf, clearErrors, info, owner, isOwner } = this.props;
        let editIcons = (
            <td>
                <div className='shelf_edit' onClick={() => this.update()}>
                </div>

                <div className='shelf_remove' onClick={() => this.handleDelete(info[0])}>
                </div>
            </td>
        );

        const nonDefault = this.props.defaultShelves[info[0]] === undefined;

        let shelf = (
            <tr>
                <td>
                    <Link to={`/bookshelf/${owner}/${info[0]}`}>{info[1]}</Link>   <span>({info[2]})</span>
                </td>
                { isOwner && nonDefault ? editIcons : null }
            </tr>);

        let editShelfForm = <AddShelfForm clearErrors={clearErrors} shelfAction={updateShelf} info={info}/>;

        let editShelfLogic = this.state.editForm ? editShelfForm : shelf; 
        
        return (
            editShelfLogic
        );
    }
}

export default ShelfListItem;