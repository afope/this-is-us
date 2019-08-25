import React from 'react'

const Test = React.memo((props) => {
    return (
        <div className="row center-xs" >
            {props.children}
            {/* <div className="col-lg-4 col-xs-12">
                <div className="box" style={{border:'1px solid red'}}>auto</div>
            </div>
            <div className="col-lg-4 col-xs-12">
                <div className="box" style={{border:'1px solid red'}}>auto</div>
            </div>
            <div className="col-lg-4 col-xs-12">
                <div className="box" style={{border:'1px solid red'}}>auto</div>
            </div>
            <div className="col-lg-4 col-xs-12">
                <div className="box" style={{border:'1px solid red'}}>auto</div>
            </div> */}
        </div>
    )
});

export default Test;
