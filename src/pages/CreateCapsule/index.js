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

  function handleChange(e) {
    setCaps({ ...caps, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api.post("/capsule", caps); //Alexandre só usou "/post"!!!

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
              onChange={handleChange}
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
