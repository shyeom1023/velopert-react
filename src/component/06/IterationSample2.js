import React from 'react'; 


const IterationSample2 = () => {
    const realNames = [
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}
    ];

    const [names, setNames] = React.useState([
        ...realNames
    ]);
    const [inputText, setInputText] = React.useState('');
    const [findText, setFindText] = React.useState('');
    const [nextId, setNextId] = React.useState(5);

    const onChange = e => setInputText(e.target.value);
    const onFindChange = e => setFindText(e.target.value);
    
    const onClick = () => {
        if(inputText === ''){
            alert('글을 입력하세요');
            return;
        }
        const nextNames = names.concat({ // push는 기존 배열 자체를 변경 concat은 새로운 배열 생성 . 불변성 유지를 위해 concat사용
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };

    const onFindClick = () => {
        const nextNames = names.filter(name => name.text === findText);
        setNames(nextNames);

    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
        return(
            <div>
                <input value={findText} onChange={onFindChange} /> 
                <button onClick={onFindClick}>찾기</button>
                <br />
                <input value={inputText} onChange={onChange} />
                <button onClick={onClick}>추가</button>
                <ul>{namesList}</ul>
            </div>
    );
};




export default IterationSample2;