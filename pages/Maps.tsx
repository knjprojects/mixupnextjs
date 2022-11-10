import React from 'react'
import Iframe from 'react-iframe'// doesnt seem to work for maps, but havent tried components
import CustomIframe from '../components/gps/CustomIframe';//created using dom and portal - built in but no tailwind
//another alternative react-frame-component
type Props = {}

const Maps = (props: Props) => {
  //<iframe src="https://embed.waze.com/iframe?zoom=16&lat=&lon=-61.449932&ct=livemap" width="600" height="450" allowfullscreen></iframe>
    
    const lat="10.266375";
    const long="-61.449932";
    const language="en/"//sets the language , fr, en, etc
    //zoom 3-17
    //https://embed.waze.com/${language}iframe?zoom=12&lat=${lat}&lon=${long}
return (
    <div>
        <iframe src={`https://embed.waze.com/${language}iframe?zoom=12&lat=${lat}&lon=${long}`}
        width="700" height="500" allowFullScreen></iframe>

        
        <hr />
        
    
















{//below are react-iframe specific code  
        /*<Iframe url="https://www.waze.com/live-map/directions/tt/penaldebe-regional-corporation/union-hall-1st-street?utm_campaign=iframe_search&utm_medium=lm_share_directions&utm_source=direct_link&to=place.EiZVbmlvbiBIYWxsIDFzdCBTdCwgVHJpbmlkYWQgYW5kIFRvYmFnbyIuKiwKFAoSCffRouc1jDWMEUuJVJVSVpHuEhQKEgnFtlBjlwc2jBEn8TnGVSgI_w&from=ll.10.2674111%2C-61.4404939"
        width="640px"
        height="320px"
        id="1"
        className=""
        display="block"
        position="relative"
allow='geolocation'/>*/}
{/*
loading='eager'    --  sets how the content is loader, eager or lazy
sandbox='allow-scripts allow-modal'   allows the embeded pages to open scripts and modalss, use this for security
title adds a decsription
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
    <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" title="A Youtube video"></iframe>
*/
//end of react-iframe specific code
}



    <CustomIframe>
        <p style={{'color':'red'}}>Yoo it works but tailwind doesnt apparently this is the regular styles</p>
    </CustomIframe>
    </div>
)
}

export default Maps
//https://www.waze.com/live-map/directions/tt/penaldebe-regional-corporation/union-hall-1st-street?utm_campaign=iframe_search&utm_medium=lm_share_directions&utm_source=direct_link&to=place.EiZVbmlvbiBIYWxsIDFzdCBTdCwgVHJpbmlkYWQgYW5kIFRvYmFnbyIuKiwKFAoSCffRouc1jDWMEUuJVJVSVpHuEhQKEgnFtlBjlwc2jBEn8TnGVSgI_w&from=ll.10.2674111%2C-61.4404939