import React, { useEffect, useRef } from 'react';

export default () => {
  const sceneRef = useRef(null);
  const vidRef = useRef(null);
  const vidRef2 = useRef(null);
  const vidRef3 = useRef(null);
  const vidRef4 = useRef(null);
  const vidRef5 = useRef(null);
  const vidRef6 = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const vidEl = vidRef.current;
    const vidEl2 = vidRef2.current;
    const vidEl3 = vidRef3.current;
    const vidEl4 = vidRef4.current;
    const vidEl5 = vidRef5.current;
    const vidEl6 = vidRef6.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener('renderstart', () => {
      arSystem.start(); // start AR 
    });
    vidEl.play();
    vidEl2.play();
    vidEl3.play();
    vidEl4.play();
    vidEl5.play();
    vidEl6.play();
    return () => {
      arSystem.stop();
    }
  }, []);

  return (
    <a-scene ref={sceneRef} mindar-image="imageTargetSrc: https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/targets_6.mind?v=1665525438981; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;" color-space="sRGB" embedded renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <video ref={vidRef} crossOrigin="anonymous" id="noviembre" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/prueba.mov?v=1664547578554" type="video/mp4"></video>
        <video ref={vidRef2} crossOrigin="anonymous" id="diciembre" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/diciembre2%20(online-video-cutter.com).mp4?v=1665582197389" type="video/mp4"></video>
        <video ref={vidRef3} crossOrigin="anonymous" id="enero" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/IMG_6597%20(online-video-cutter.com).mp4?v=1665584548375" type="video/mp4"></video>
        <video ref={vidRef4} crossOrigin="anonymous" id="febrero" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/Mi%20pel%C3%ADcula%20(online-video-cutter.com).mp4?v=1665583392415" type="video/mp4"></video>
        <video ref={vidRef5} crossOrigin="anonymous" id="marzo" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/Mi%20pel%C3%ADcula%201%20(online-video-cutter.com).mp4?v=1665584753443" type="video/mp4"></video>
        <video ref={vidRef6} crossOrigin="anonymous" id="abril" autoPlay loop muted src="https://cdn.glitch.global/4516503e-ef27-4b0b-9505-185423e6507b/abril%20(online-video-cutter.com).mp4?v=1665584481599" type="video/mp4"></video>

      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 5">
        <a-video src="#noviembre" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1">
        <a-video src="#diciembre" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-video src="#enero" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 3">
        <a-video src="#febrero" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 4">
        <a-video src="#marzo" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 2">
        <a-video src="#abril" width="1" height="2" position="0 0 0" play="true"></a-video>
      </a-entity>

    </a-scene>
  )
}
