import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../components/Collection-Preview'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../redux/shop/shop-selectors'

import '../styles/collection-overview.scss'

const CollectionOverview = ({ collections }) => {

    return (
        <div className="collection-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview)