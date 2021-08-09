import React, { useRef,useEffect, useState}  from "react"
// import {useFalcor} from '@availabs/avl-components'
// import { Link } from 'react-router-dom'
import Layout from '../Layout'
import Frame from 'react-frame-component';
// import { ResizableBox } from 'react-resizable';
import { Resizable } from "re-resizable";
// import get from 'lodash.get'

import Doc from 'modules/avl-components/src/components/Nav/Side.docs.js'

const CompDoc = () => {
  const {Component, props} = Doc
  const frameRef = useRef(null);
  const [frameSize, setFrameSize] = useState({height:0,width:0});
   useEffect(() => {
      // const height = ;
      console.log('Input height', frameRef.current.offsetHeight,frameRef.current.offsetWidth);  
      setFrameSize({
        height: frameRef.current.offsetHeight,
        width: frameRef.current.offsetWidth
      })
   }, [frameRef]);


  return (
    <Layout>
      <div className='flex min-h-screen justify-center'>
          <div className=' w-96 px-8 border-r border-gray-300'>Left</div>
          <div className='flex-1 max-w-7xl pt-4'>
              <div className="relative bg-gray-500 ring-1 ring-gray-900 ring-opacity-5 h-full" style={{height: 900}}>
                <div ref={frameRef} className="block h-full">
                  <Resizable
                    className='h-full'
                    size={{ width:frameSize.width, height:frameSize.height }}
                    bounds="parent"
                    minWidth="329px"
                    onResizeStop={(e, direction, ref, d) => {
                      setFrameSize({
                        width: frameSize.width+d.width, 
                        height: frameSize.height
                      })
                    }}
                    handleComponent={{
                      right: (
                        <div  className="sr-only sm:not-sr-only sm:border-l sm:bg-gray-200 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4" style={{cursor: 'ew-resize'}}>
                          <div className="absolute inset-y-0 -inset-x-2"></div>
                          <svg className="h-4 w-4 text-gray-600 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
                          </svg>
                        </div>)
                    }}
                  
                  >
                    <div className="bg-white h-full" >
                      <Frame>
                        <h2>Component</h2>
                      </Frame>
                    </div>
                  </Resizable>
                </div>
              </div>
              
          </div>
        </div>	
	  </Layout>
  )
}

export default {
  path: "/comdocdev",
  exact: true,
  auth: false,
  component: CompDoc,
  layout: 'Simple'
}
