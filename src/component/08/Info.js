import React from 'react'; 


const Info = () => {
    const [name, setName] = React.useState('');
    const [nickname, setNickname] = React.useState('');
    React.useEffect(() => {
        console.log(`effect ${name}`);
        return () =>{
            console.log(`cleanup ${name}`);
        }
    },[name]);

        return(
            <div>
                <div>
                    <input value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
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