import React from 'react'

const ResponsiveGrid = React.memo((props) => {
    return (
        <div className="row center-xs" >
            {props.children}
        </div>
    )
});

export default ResponsiveGrid;
