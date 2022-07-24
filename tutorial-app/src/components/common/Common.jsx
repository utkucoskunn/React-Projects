import React from "react";

function Common({title}) {
    return (
        <div>
            <div className='sideHeading'>
                <h1>
                    <i className='fas fa-minus'></i>
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default Common;