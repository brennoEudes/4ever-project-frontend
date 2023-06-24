import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import Button from "react-bootstrap/Button";

export function CreateCapsule() {
  const navigate = useNavigate();

  const [caps, setCaps] = useState({
    /* Usar abaixo os msms nomes das chaves definidas no model no backend */
    capsuleTitle: "",
    capsuleDescription: "",
    capsuleReceiverName: "",
    capsuleReceiverEmail: "",
    capsuleReceiverPhone: 0,
    capsuleDeliveryDate: "",
    capsuleSpecialMessage: "",
    capsuleAttachedDocument: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setCaps({ ...caps, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  // função upload img
  async function handleUploadImage(e) {
    const uploadData = new FormData(); // classe do JS

    uploadData.append("picture", img);

    const response = await api.post("/uploadImage", uploadData);

    return response.data.url;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgUrl = await handleUploadImage(); // nessa const. ficará salva a url da img

      await api.post("/capsule", { ...caps, capsuleAttachedDocument: imgUrl }); //Alexandre só usou "/post"!!! (obs: antes de inserir upload img)

      // se tudo certo, navegue p/:
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }
  console.log(caps);

  return (
    <>
      <div className="">
        <div className="">
          <h1 className="">Create a new capsule!</h1>
          <form className="" onSubmit={handleSubmit}>
            <label htmlFor="inputCapsuleTitle">Capsule Title:</label>
            <input
              id="inputCapsuleTitle"
              type="text"
              required="true"
              name="capsuleTitle"
              value={caps.capsuleTitle}
              onChange={handleChange}
            />
            <label htmlFor="inputCapsuleDescription">Description:</label>
            <input
              id="inputCapsuleDescription"
              type="text"
              name="capsuleDescription"
              value={caps.capsuleDescription}
              onChange={handleChange}
            />
            <label htmlFor="inputReceiverName">Receiver Name:</label>
            <input
              id="inputReceiverName"
              type="text"
              required="true"
              name="capsuleReceiverName"
              value={caps.capsuleReceiverName}
              onChange={handleChange}
            />
            <label htmlFor="inputReceiverEmail">Receiver Email:</label>
            <input
              id="inputReceiverEmail"
              type="email"
              required="true"
              name="capsuleReceiverEmail"
              value={caps.capsuleReceiverEmail}
              onChange={handleChange}
            />
            <label htmlFor="inputReceiverPhone">Receiver Phone:</label>
            <input
              id="inputReceiverPhone"
              type="number"
              name="capsuleReceiverPhone"
              value={caps.capsuleReceiverPhone}
              onChange={handleChange}
            />
            <label htmlFor="inputDeliveryDate">Delivery Date:</label>
            <input
              id="inputDeliveryDate"
              type="date"
              name="capsuleDeliveryDate"
              value={caps.capsuleDeliveryDate}
              onChange={handleChange}
            />
            <label htmlFor="inputSpecialMessage">Special Message:</label>
            <input
              id="inputSpecialMessage"
              type="text"
              required="true"
              name="capsuleSpecialMessage"
              value={caps.capsuleSpecialMessage}
              onChange={handleChange}
            />
            <label htmlFor="inputAttachedDocument">Attached Document:</label>
            <input
              id="inputAttachedDocument"
              type="file"
              name="capsuleAttachedDocument"
              value={caps.capsuleAttachedDocument}
              onChange={handleImage}
            />
            <div className="">
              <Button type="submit" variant="primary" size="lg">
                Create New Capsule
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
