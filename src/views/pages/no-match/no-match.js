import React from 'react'

const NoMatch = ({ location }) => {
    return (
        <p>{location.pathname} not found.</p>
    )
}

export default NoMatch