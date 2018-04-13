import React from 'react';

class ShelfItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        debugger
    }

    componentWillUnmount() {
        let shelfIds = Object.values(this.state).reduce((acc, v) => acc.concat(v), []);
        this.props.createShelfItem(this.state);
    }

    update() {
        return(e) => {
            this.setState({});
        };
    }

    render() {

        // const shelfNames = 

        return (
            <form >
                <select onChange={this.update('default')}>
                    {/* <option value={} >Read</option> */}
                </select>
            </form>
        );
    }
}

export default ShelfItemForm;