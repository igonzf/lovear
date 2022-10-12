import React, { useEffect, useRef } from 'react';

export default () => {
  const sceneRef = useRef(null);
  const vidRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const vidEl = vidRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    vidEl.play();
    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/targets.mind?v=1664465873533; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/card-example/card.png" />
        <video ref={vidRef} crossorigin="anonymous" id="noviembre" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/prueba.mov?v=1664547578554" type="video/mp4"></video>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-video src="#noviembre" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
    </a-scene>
  )
}
