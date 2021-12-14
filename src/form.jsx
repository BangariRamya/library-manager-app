import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Form = ({ add, setAdd }) => {
  const [inputs, setInputs] = useState({});
  const [formOpen, setFormOpen] = useState(false);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdd([...add, inputs]);
    //console.log(inputs);
    setInputs({});
    setFormOpen(false);
  };

  return (
    <div>
      <center>
        <button onClick={() => setFormOpen(true)} className="form-button">
          Click to add new book
        </button>
      </center>

      {formOpen && (
        <Modal isOpen modalClassName="modal">
          <ModalHeader className="form-heading">Add New Book</ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <label>Title :</label>
              <input
                type="text"
                placeholder="Enter title"
                name="title"
                value={inputs.title || ""}
                onChange={handleInputs}
              />{" "}
              <br />
              <label>Author :</label>
              <input
                type="text"
                placeholder="Enter author name"
                name="author"
                value={inputs.author || ""}
                onChange={handleInputs}
              />{" "}
              <br />
              <label>Subject :</label>
              <input
                type="text"
                placeholder="Enter subject name"
                name="subject"
                value={inputs.subject || ""}
                onChange={handleInputs}
              />{" "}
              <br />
              {
                <input
                  type="submit"
                  disabled={!inputs.title || !inputs.author || !inputs.subject}
                />
              }
              {/* {inputs.title&&inputs.author&&inputs.subject && <input type="submit"/>} */}
            </form>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
};
export default Form;
