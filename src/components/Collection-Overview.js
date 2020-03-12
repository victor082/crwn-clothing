import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../components/Collection-Preview'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../redux/shop/shop-selectors'

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
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)