import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function UploadImages(props) {
  const { image, setImage } = useState("");
  const { loading, setLoading } = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "mascotas");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvw0vrnxp/image/upload",
      {
        method: "POST",
        body: data,
      }
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
    setLoading(false);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Subiendo Imagenes</h1>
        <Form>
          <input type="file" name="file" placeholder="Agrega Imagenes" />
          <button onClick={uploadImage}>UPLOAD</button>
          {loading ? (
            <h3>Cargando imagenes...</h3>
          ) : (
            <img src={image} style={{ width: "300px" }} />
          )}
        </Form>
      </div>
    </div>
  );
}
