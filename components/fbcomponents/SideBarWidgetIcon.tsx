import React from 'react'


const SideBarWidgetIconText=({Icon,title}:any)=>{
    return <div className='sidebarwidget'>
        <Icon className='sidebarwidgeticon'/>
        <h1 className='sidebarwidgettext'>{title}</h1>
    </div>
}

export default SideBarWidgetIconText