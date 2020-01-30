import React from 'react';

import SHOPDATA from './shop.data'
import CollectionPreview from '../components/Collection-Preview'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        collections: SHOPDATA
    }


    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}



export default ShopPage