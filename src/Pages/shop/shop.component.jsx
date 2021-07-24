import React,{Component} from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';

class ShopPage extends Component {
    constructor(){
        super();
        this.state = {
            collections : SHOP_DATA
        };

    }
    render(){
        const {collections} = this.state ;
        return (
            <div className='shop-page' >
                {
                    collections.map(({id,...otherProps})=>{
                        return <CollectionPreview key={id} {...otherProps} />
                    }) 
                }
            </div>
        );
    }
}

export default ShopPage;