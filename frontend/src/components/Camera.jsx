import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

function Camera() {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Faites quelque chose avec l'image capturée, par exemple, affichez-la ou téléchargez-la.
    console.info(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button type="button" onClick={capture}>
        Capturer l'image
      </button>
    </div>
  );
}

export default Camera;
