import React from "react";

const styleDevider = {
     margin: '16px 0px',
      width: '100%',
      height: '1px',
      backgroundImage: 'linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)'
    };

export default function Devider() {
    return (
        
        <div style={styleDevider}></div>
    )
}

