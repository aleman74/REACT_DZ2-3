import React from 'react'
import PropTypes from 'prop-types'


function DropdownItem(props) {

    let active_class = '';
    if (props.is_select)
        active_class = ' item_active';

    // Изменение выбранного элемента
    const funClickItem = (evt, item_name) => {
        console.log('DropdownItem - funClickItem', 'item_name = ' + item_name);

        props.onClickItem(evt, item_name);       // передаём данные родителю
    }


    return (
        <div className={'item' + active_class} onClick={evt => funClickItem(evt, props.item)}>{props.item}</div>
    );
}

DropdownItem.propTypes = {

}

export default DropdownItem;
