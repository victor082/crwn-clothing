import React from 'react'
import '../styles/collection-preview.scss'
import { Link } from 'react-router-dom'
import CollectionItem from './Collection-Item'

const CollectionPreview = ({ title, items, routeName }) => (

    <div className="collection-preview">
        <Link to={`/shop/${routeName}`}>
            <h1 className="title">{title.toUpperCase()}</h1>
        </Link>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
        <Link to={`/shop/${routeName}`}>
            <button className="view-more-collection">View More</button>
        </Link>
    </div>
)


export default CollectionPreview;