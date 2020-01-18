import React, { useEffect, useRef } from "react";

export function WebMap() {
  const elementRef = useRef();

  useEffect(() => {
    async function fetchData (){
        let cleanup;
        // lazy load the module that loads the JSAPI  and initialize it
        const app = await import("../data/MapConfig")
        cleanup = app.initialize(elementRef.current)
        return () => cleanup && cleanup();
    }
    fetchData();
  });

  // assign elementRef to the ref of our component
  return (
    <div className="MapView" ref={elementRef}>
    </div>
  );
}