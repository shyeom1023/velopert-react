import React from 'react'; 

/**
 * 
 * 이렇게 짜면 너무 비효율 적이다.
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

    const onChange = e => {
        setNumber(e.target.value);
    };
    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };
    const onClear = e => {
        setList([]);
    };

        return(
            <div>
                <input value={number} onChange={onChange} />
                <button onClick={onInsert}>등록</button>
                <button onClick={onClear}>초기화</button>
                <ul>
                    {list.map((value,index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <div>
                    <b>합산 값:</b>{getSum(list)} <br />
                    <b>평균 값:</b>{getAverage(list)}
                </div>
            </div>
    );
};




export default Average;