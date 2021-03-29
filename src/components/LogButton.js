import React from 'react'

const LogButton = (WrapperComponent,info) => {
    const clickHandler=(e)=>{
        console.log('Log Yaz Buttonuna click ettdin ....');
    }
    return (props)=> { 
        return (
            <div>
                <button onClick={clickHandler} className='btn btn-secondary'> Write Log</button>
                <WrapperComponent {...props}  />
            </div>
        )
    }
}

export default LogButton;