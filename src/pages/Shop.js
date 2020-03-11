import React from 'react';
import { Route } from 'react-router-dom'
import CollectionOverview from '../components/Collection-Overview'

const ShopPage = ({ match }) => {

    return (
        <div className="shop-page">
            <Route exact path={'/shop'} component={CollectionOverview} />
        </div>
    )
}



export default ShopPage