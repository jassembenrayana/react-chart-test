import React from 'react'

const Header = ({ regenerateData }) => {
    return (
        <div className="card-header">
            <button className="btn btn-success m-4" onClick={regenerateData}>Regenerate Data</button>
            <h2>Chart Line Generator</h2>
        </div>
    )
}

export default Header