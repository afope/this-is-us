import React from 'react'

const ResonsiveGrid = React.memo((props) => {
    return (
        <div className="row center-xs" >
            {props.children}
        </div>
    )
});

export default ResonsiveGrid;
