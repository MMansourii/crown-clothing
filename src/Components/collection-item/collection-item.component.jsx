import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({id,name,price,imageUrl}) =>{
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
        </div>
    );
}

export default CollectionItem ;