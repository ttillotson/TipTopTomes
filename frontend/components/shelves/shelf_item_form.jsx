import React from 'react';
import merge from 'lodash/merge';

class ShelfItemForm extends React.Component {
    constructor(props) {
        super(props);
        let defaultShelf = this.props.defaultShelf;
        let filteredShelves;
        if (this.props.inShelves) {
            filteredShelves= Object.values(this.props.inShelves).filter(shelf => shelf.id !== defaultShelf);
        }
        this.state = {
            defaultShelf: this.props.defaultShelf,
            inShelves: filteredShelves,
        };
        this.addToShelf = this.addToShelf.bind(this);
    }

    componentDidMount() {
        let filteredShelves;
        if (this.props.inShelves) {
            filteredShelves = Object.values(this.props.inShelves).filter(shelf => shelf.id !== this.propsdefaultShelf);
        }
        this.setState({ inShelves: filteredShelves });
    }

    // componentWillUnmount() {
    //     let shelfIds = Object.values(this.state).reduce((acc, v) => acc.concat(v), []);
    //     this.props.createShelfItem(this.state);
    // }

    // update(field) {
    //     return(e) => {
    //         this.setState({});
    //     };
    // }

    addToShelf(e) {
        this.props.createShelfItem({ shelfId: e, bookId: this.props.bookId });
    }

    render() {
        let defaultRadios = Object.values(this.props.defaultShelves).map((shelf, i) =>
            (<label> { shelf.name }

                <input type='radio'
                key={`dShelf-${shelf.id}`} 
                value={shelf.id} 
                />
            </label>
            )
        );
        const { defaultShelves, createdShelves } = this.props;
        const allShelves = Object.values(merge(defaultShelves, createdShelves));

        let shelfOptions = allShelves.map((shelf, i) => 
            <li key={shelf.id} 
                onClick={() => this.addToShelf(shelf.id)}
                className='shelf_option'
                >
                { shelf.name }
            </li>
        );


        return (
            <ul className='add_to_shelf_form'>
                { shelfOptions }
            </ul>
        );
    }
}

export default ShelfItemForm;
{/* <form>
    <fieldset onChange={this.update('defaultShelf')} value={this.state.defaultShelf.name}>
        { defaultRadios }
    </fieldset>


    <select onChange={this.update('defaultShelf')}>
       <option value={} >Read</option> 
    </select>
</form> */}