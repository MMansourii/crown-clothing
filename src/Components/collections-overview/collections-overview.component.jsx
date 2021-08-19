import React from 'react'

import './collections-overview.styles.scss' ;

import CollectionPreview from '../collection-preview/collection-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selector';

const collectionsOverview = ({collections}) => (
    <div className='collections-overview' >
                        {
                    collections.map(({id,...otherProps})=>{
                        return <CollectionPreview key={id} {...otherProps} />
                    }) 
                }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
});

export default connect(mapStateToProps)(collectionsOverview);