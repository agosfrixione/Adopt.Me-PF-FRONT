import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function UploadImages(props) {
  const { image, setImage } = useState("");
  const { loading, setLoading } = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new Form();
    data.append("file", files[0]);
    data.append("upload_preset", "mascotas");
    setLoading(true);
    const res = await axios(
      "https://api.cloudinary.com/v1_1/dvw0vrnxp/mascotas/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Subiendo Imagenes</h1>
        <Form>
          <input
            type="file"
            name="file"
            placeholder="Agrega Imagenes"
            onChange={uploadImage}
          />
        </Form>
      </div>
    </div>
  );
}
