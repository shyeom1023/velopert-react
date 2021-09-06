import React from 'react'; 

/**
 * 
 * 이렇게 짜면 너무 효율 적이다.
 *
 */

const getSum = numbers => {
    console.log('합산 계산중..');
    if(numbers.length === 0){
        return 0;
    }
    const sum = numbers.reduce((a,b) => a + b);
    return sum;

}

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if(numbers.length === 0){
        return 0;
    }
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;

}

const Average = () => {
    const [list, setList] = React.useState([]);
    const [number, setNumber] = React.useState('');

    const onChange = React.useCallback( e => {
        setNumber(e.target.value);
    },[]); // 컴포넌트가 렌더링 될때만 실행

    const onInsert = React.useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    },[number, list]);
    const onClear = e => {
        setList([]);
    };    

    const avg = React.useMemo(()=> getAverage(list) , [list]);
    const sum = React.useMemo(()=> getSum(list) , [list]);


        return(
            <div>
                <input value={number} onChange={onChange} />
                <button onClick={onInsert} >등록</button>
                <button onClick={onClear} >초기화</button>
                <ul>
                    {list.map((value,index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <div>
                    <b>합산 값:</b>{sum} <br />
                    <b>평균 값:</b>{avg}
                </div>
            </div>
    );
};




export default Average;