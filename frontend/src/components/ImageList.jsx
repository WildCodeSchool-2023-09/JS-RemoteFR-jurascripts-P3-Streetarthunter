import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageList() {
  const [captures, setCaptures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/captures");
        setCaptures(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des captures", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {captures.map((capture) => (
        <div key={capture.id}>
          <img
            src={`/api/captures/${capture.id}`}
            alt={`Capture ${capture.id}`}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageList;
