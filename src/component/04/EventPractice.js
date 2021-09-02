import React from 'react'; 



const EventPractice = () => {
    const [message, setMessage ] = React.useState('');
    const [username, setUsernaem ] = React.useState('');
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }; 
    const onChangeUsername = (e) => {
        setUsernaem(e.target.value);
    }; 
    const onClick = () => {
        alert(username + ': ' + message);
        setMessage('');
        setUsernaem('');
    };
    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={username}
                    onChange={ onChangeUsername }
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={message}
                    onChange={ onChangeMessage }
                    onKeyPress={onKeyPress}
                />
                <button
                    onClick={ onClick }            
                >확인</button>
            </div>
    );
};


export default EventPractice;