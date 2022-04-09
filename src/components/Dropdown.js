import React from 'react'
import PropTypes from 'prop-types'
import DropdownList from "./DropdownList";


function Dropdown(props) {
    /* --------------- STATE ---------------------------------------------- */
    const [is_list_visible, setListVisible] = React.useState(false);
    /* -------------------------------------------------------------------- */

    // Изменение отображения списка
    const onListClick = (evt) => {
        console.log('is_list_visible = ' + is_list_visible);
        setListVisible(prev_value => !prev_value);
    };

    return (

        <div id="drop_list">

            <button className="btn" onClick={onListClick}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>

            <DropdownList is_view={is_list_visible} onItemClick={onListClick}/>

        </div>
    );
}

Dropdown.propTypes = {

}

export default Dropdown;
