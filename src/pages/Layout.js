import React  from "react"
import {/*useTheme,*/ TopNav} from '@availabs/avl-components'
// import AuthMenu from 'pages/Auth/AuthMenu'

const Layout = ({children}) => {
	// const theme = useTheme()
	return (
	  	<div className={`flex items-start flex-col min-h-screen`}>
            <div className='w-full fixed bg-white z-10'>
		  		<TopNav
		  			logo={<div className='text-gray-200 px-4 text-sm font-medium'>AVAIL Design</div>}
		  			menuItems={[
		    			{
			                name: 'Components',
			                path: `/methods`,
			                //icon: 'fa fa-edit',
			                className: 'font-medium text-lg z-50'
			            },
			            {
			                name: 'Dev',
			                path: `/comdocdev`,
			                //icon: 'fa fa-edit',
			                className: 'font-medium text-lg z-50'
			            },
		    		]}
		    	/>
		    </div>
            <div className={`w-full h-full flex-1 mt-12 bg-gray-100`}>
	    		{children}
	    	</div>
		</div>
	)
}

export default Layout

//{/*rightMenu={<div className='border-b border-gray-200 pb-3'><AuthMenu /></div>}*/}
		    		