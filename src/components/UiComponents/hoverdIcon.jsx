//مكون لاستخدام الايقونات عند hover والactive//

import { useState,useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const HoverLottie = ({ src, active }) => {
    const [instance, setInstance] = useState(null);
  
    useEffect(() => {
      if (instance) {
        active ? instance.play() : instance.pause();
      }
    }, [active, instance]);
  
    return (
      <DotLottieReact
        src={src}
        dotLottieRefCallback={(dotLottie) => setInstance(dotLottie)}
        style={{ width: "50px", height: "50px" }}
      />
    );
  };