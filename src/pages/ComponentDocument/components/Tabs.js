import React from "react";

export const RenderTabs = (view, setView) => {
    const tabs = [
        {name: 'Preview', href: '#', current: view === 'Preview', icon: 'fad fa-eye'},
        // {name: 'Props', href: '#', current: view === 'Props', icon: 'fad fa-brackets-curly'}, 
        {name: 'Source', href: '#', current: view === 'Source', icon: 'fad fa-code'},
        // {name: 'Component', href: '#', current: view === 'Component', icon: 'fad fa-code-branch'}     
    ];
    
    return (
        
        <div className="h-12 mb-4">
            <div className="-mb-px h-full flex items-center px-4">
                <div className='group p-0.5 rounded-lg flex bg-gray-100 hover:bg-gray-200'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            href={tab.href}
                            aria-current={tab.current ? 'page' : undefined}
                            onClick={e => setView(tab.name)}
                        >
                            <span className={`p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm text-gray-700 ${tab.current ? 'bg-white shadow-sm ring-1 ring-black ring-opacity-5' : ''}` }>
                                <span className={`px-1 ${tab.icon} ${tab.current ? 'text-blue-500' : ''}`}/><span>{tab.name}</span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
       
    )
}