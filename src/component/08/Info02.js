import React from 'react'; 

function reducer(state, action){
    return{
        ...state,
        [action.name]: action.value // input 태그에서 name을 뜻함
    }
}


const Info = () => {
    const [state, dispatch] = React.useReducer(reducer,{
        name: '',
        nickname: ''
    });
    const { name , nickname } = state;
   
    React.useEffect(() => {
        console.log(`effect ${name}`);
        return () =>{
            console.log(`cleanup ${name}`);
        }
    },[name]);

    const onChange = e => {
        dispatch(e.target);
    };

        return(
            <div>
                <div>
                    <input name="name" value={name} onChange={onChange}></input>
                    <input name="nickname" value={nickname} onChange={onChange}></input>
                </div>
                <div>
                    <div>
                        <b>이름 :</b> {name}
                    </div>
                    <div>
                        <b>닉네임 :</b> {nickname}
                    </div>
                </div>
            </div>
    );
};




export default Info;