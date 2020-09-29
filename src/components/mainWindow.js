import React from 'react'
import './mainWindow.css'
import $ from "jquery";
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
            <div className='disp colom'> 
             <iframe className='disp'  src="http://teplotehnika68.ru/radugnoe/pic.php" frameBorder="0"></iframe>
            </div>
        </div>
    )
    let c;
    if (props.value) c=a; else c=b;  
    return(
        c
    )    
}

    




export default MainWindow;
