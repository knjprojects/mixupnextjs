import React, {useEffect} from 'react'
 
type Props = {
    url:any
}

const UseExternal = (url:string) => {
    useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", url);
    head!.appendChild(script);

    return () => {
      head!.removeChild(script);
    };
    }, [url]);
    //Don't use the return snippet if your script is used in multiple components throughout your app. 
    //The function returned by the hook is a cleanup function, which is executed when a component is unmounted.
    //Hence, we don't require it if we have to use the source at multiple places.
  return (
    <div>UseExternal</div>
  )
}

export default UseExternal