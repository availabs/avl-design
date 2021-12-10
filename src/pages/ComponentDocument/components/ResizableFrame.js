import React, { useState, useRef, useEffect } from "react";
import Frame from "react-frame-component";
import { Resizable } from "re-resizable";

const ResizableFrame = ({ children }, props) => {
  const frameRef = useRef(null);
  const [frameSize, setFrameSize] = useState({ height: 0, width: 0 });
  const [initWidth, setInitWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!frameRef || !frameRef.current) return;
      setFrameSize({
        height: frameRef.current.offsetHeight,
        width: frameRef.current.offsetWidth,
      });
      setInitWidth(frameRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [frameRef]);

  return (
    <div className="mx-4">
      <div
        ref={frameRef}
        className=" ring-opacity-5 h-full  w-full"
        style={{ height: 860 }}
      >
        <div className="h-full fixed">
          <Resizable
            className="h-full shadow-lg "
            size={{ width: frameSize.width, height: frameSize.height }}
            // bounds="parent"
            minWidth="329px"
            maxWidth={`${initWidth}px`}
            onResizeStop={(e, direction, ref, d) => {
              setFrameSize({
                width: frameSize.width + d.width,
                height: frameSize.height,
              });
            }}
            handleComponent={{
              right: (
                <div
                  className="relative sr-only sm:not-sr-only sm:border-l sm:bg-gray-200 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4"
                  style={{ cursor: "ew-resize" }}
                >
                  <div className="absolute inset-y-0 -inset-x-2"></div>
                  <svg
                    className="h-4 w-4 text-gray-600 pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
                  </svg>
                </div>
              ),
            }}
          >
            <div className="bg-white h-full border mr-3">
              <Frame
                style={{
                  width: "100%",
                  height: "100%",
                }}
                head={
                  <>
                    <link
                      type="text/css"
                      rel="stylesheet"
                      href="/css/tailwind.css"
                    />
                    <link
                      type="text/css"
                      rel="stylesheet"
                      href="/css/frame.css"
                    />
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="/css/highlight.css"
                    />
                    <link
                      type="text/css"
                      rel="stylesheet"
                      href="/css/os-icons.css"
                    />
                  </>
                }
              >
                {children}
              </Frame>
            </div>
          </Resizable>
        </div>
      </div>
    </div>
  );
};

export default ResizableFrame;
