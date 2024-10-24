import React from "react";
import AnimatedCursor from "react-animated-cursor"



export default function Cursor(){
    return(
        <>
        <AnimatedCursor
  color="#fff"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    mixBlendMode: 'exclusion'
  }}
/><AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 15,
            outerSize: 15,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
</>
    )
}