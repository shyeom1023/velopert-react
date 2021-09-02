import React from 'react'; 
import './ValidationSample.css'


const ValidationSample = () => {
    const [password, setPassword] = React.useState('');
    const [clicked, setClicked] = React.useState(false);
    const [validated, setValidated] = React.useState(false);

    const onchange = e => {
        setPassword(e.target.value);
    };

    const onClick = () => {
        setClicked(true);
        setValidated(password === '0000');
    };
        return(
            <div>
                <input 
                
                    type="password"                
                    value={password}
                    onChange={onchange}
                    className={clicked ? (validated ? 'success' : 'failure') : ''}
                />
                <button onClick = {onClick}>검증하기</button>
            </div>
    );
};




export default ValidationSample;