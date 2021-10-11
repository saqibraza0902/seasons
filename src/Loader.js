import React from 'react';

const loader = (props) =>{
return(
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
        </div>
    );
};

loader.defaultProps = {
    message:"loading..."
};

export default loader;