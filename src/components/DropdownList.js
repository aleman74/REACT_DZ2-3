import React from 'react'
import PropTypes from 'prop-types'
import DropdownItem from "./DropdownItem";



function DropdownList(props) {
    /* --------------- STATE ---------------------------------------------- */
    const [select_item, setSelectItem] = React.useState('');
    /* -------------------------------------------------------------------- */

    const items = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

    // Изменение выбранного элемента
    const funClickItem = (evt, item_name) => {
        console.log('DropdownList - onClickItem', 'item_name = ' + item_name, 'select_item = ' + select_item);

        setSelectItem(prev_item => item_name);    // Запоминаем выбранный элемент
        props.onItemClick(evt);                         // скрываем список
    }


    return (

        <div id="drop_list_items" className={!props.is_view && 'list-hidden'}>
            {items.map((o, index) => <DropdownItem key={index}
                                                   item={o}
                                                   is_select={o == select_item}
                                                   onClickItem={funClickItem}/>)}
        </div>
    );
}

DropdownList.propTypes = {

}

export default DropdownList;
