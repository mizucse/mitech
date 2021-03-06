import React, { useState } from 'react';
import { Spin } from 'antd';

const styles = theme => ( {
    spinner: {
        margin: '20px 0',
        marginBottom: '20px',
        padding: '30px 50px',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: '4px',
    },
  } );

export function Loader() { 
    return <> 
        {/* <Spin size="large" /> */}
        <div className="loader-container">
            <div className="loader"></div>
        </div> 
    </>
}

