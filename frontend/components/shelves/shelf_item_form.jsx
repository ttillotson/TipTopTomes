import React from 'react';

class ShelfItemForm extends React.Component {
    constructor(props) {
        super(props);
        let defaultShelf = this.props.defaultShelf;
        let filteredShelves = this.props.inShelves.filter(shelf => shelf.id !== defaultShelf);
        debugger;
        this.state = {
            defaultShelf: this.props.defaultShelf,
            inShelves: this.props.inShelves,
        };
        debugger
    }

    componentWillUnmount() {
        let shelfIds = Object.values(this.state).reduce((acc, v) => acc.concat(v), []);
        this.props.createShelfItem(this.state);
    }

    update(field) {
        return(e) => {
            this.setState({});
        };
    }

    render() {
        let defaultRadios = Object.values(this.props.defaultShelves).map((shelf, i) =>
            <radio key={`dShelf-${shelf.id}`}>{ shelf.name }</radio>
        );

        let 

        return (
            <form >
                <radiogroup onChange={this.update('defaultShelf')} value={this.state.defaultShelf.name}>
                    { defaultRadios }
                </radiogroup>


                <select onChange={this.update('defaultShelf')}>
                    {/* <option value={} >Read</option> */}
                </select>
            </form>
        );
    }
}

export default ShelfItemForm;