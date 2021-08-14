import React from 'react';
import './collection-preview.styles.scss';
import CollectioItem from '../collection-item/collection-item.component.jsx'

const CollectionPreview = ({title,items}) =>(
    <div className='collection-preview' >
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className='preview' >
            {
                items.filter((item,idx) =>idx<4 )
                .map((item) => {
                  return   <CollectioItem key={item.id} item={item} />
                })
            }
        </div>
    </div>
)

export default CollectionPreview ;