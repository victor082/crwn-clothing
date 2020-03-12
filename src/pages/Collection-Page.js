import React from 'react';
import '../styles/collection-page.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CollectionItem from '../components/Collection-Item'
import { selectCollection } from '../redux/shop/shop-selectors'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection

    return (
        <div className="collection-page">
            <h2 className="title" >{title}</h2>
            <Link to={`/shop/`}>
                <button className="back-button">Back</button>
            </Link>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)