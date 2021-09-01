import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';

import CustonButton from '../custom-button/custom-button.component' ;
import { addItem }  from '../../redux/cart/cart.actions';

const CollectionItem = ({item,addItem}) =>{
    const {name,price,imageUrl} = item ;
    return (
        <div className='collection-item' >
            <div 
            style={{
                background : `url(${imageUrl})`
            }}
            className='image' />
                    <div className='collection-footer' >
                            <span className='name'>{name}</span>
                            <span className='price'>{price}</span>
                    </div>
                    <CustonButton 
                    onClick={() => addItem(item)} 
                    inverted 
                    className='custom-button'
                    >Add to Cart</CustonButton>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem) ;