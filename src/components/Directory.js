import React from 'react';
import { connect } from 'react-redux'
import '../styles/directory.scss'
import MenuItem from './Menu-item'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../redux/directory/directory-selectors'

const Directory = ({ sections }) => {

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})


export default connect(mapStateToProps)(Directory)