import React, { useState } from "react";
import CameraReact from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import CameraSVG from "../assets/Camera.svg";
import "./Camera.scss";

function Camera() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const handleTakePhoto = (dataUri) => {
    setCapturedImage(dataUri);
    setIsCameraOpen(false);
  };

  const openCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
  };

  return (
    <div>
      {isCameraOpen ? (
        <div>
          <CameraReact onTakePhoto={handleTakePhoto} isFullscreen />
          <button type="button" onClick={closeCamera}>
            Fermer la caméra
          </button>
        </div>
      ) : (
        <div>
          {capturedImage ? (
            <div>
              <img src={capturedImage} alt="Captured" />
              <button type="button" onClick={() => setCapturedImage(null)}>
                Reprendre la photo
              </button>
            </div>
          ) : (
            <button
              className="camera-button"
              type="button"
              onClick={openCamera}
              onKeyDown={openCamera}
              style={{ cursor: "pointer" }}
            >
              <img src={CameraSVG} alt="Camera icon" className="cameraIcon" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Camera;
