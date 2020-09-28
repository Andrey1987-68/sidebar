import React from 'react'
import './mainWindow.css'
function MainWindow(props){
    console.log(props.value)
    let a=(
        <div className='mainWindow'>
            <div className='colom'>{String(props.value)}</div>
            <div className='colom'>test 2</div>
            <div className='colom'>test3</div>
        </div>
    )
    let b=(
        <div className='mainWindow2'>
            <div className='colom'>{String(props.value)}</div>
        </div>
    )
    let c;
    if (props.value) c=a; else c=b;  
    return(
        c
    )    
}

    




export default MainWindow;