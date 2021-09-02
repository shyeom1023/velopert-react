import React from 'react'; 


const RefSample = () => {
    const input = React.createRef();
    
    const onFocus = () => {
        input.current.focus();
    }
        return(
            <div>
                <input ref={onFocus} />
            </div>
    );
};




export default RefSample;