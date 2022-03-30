import React from 'react'

function Header({text, bgColor, color}) {
    const headerStyle = {
        backgroundColor: bgColor, 
        color: color
    }
    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{ text }</h2>
            </div>
        </header>
    )
}

export default Header