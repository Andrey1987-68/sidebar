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
            <div>
             <iframe className='disp'  src="http://teplotehnika68.ru/radugnoe/pic.php" frameBorder="0"></iframe>
             <p className='disptext'>Диспетчеризация реального объекта. Система мониторинга любой сложности. Перед вами реальный объект.
                модульная котельная, город Тамбов. Сигнал передается через канал gprs каждые 10 секунд, данные складываются
                в базу данных и далее отображаются в виде мнемосхемы.</p>
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
