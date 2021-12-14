import { useState } from "react";
import Form from "./form";

const Home = () => {
  const [add, setAdd] = useState([
    {
      title: "Differential Calculus",
      author: "Dr.P.K.Mittal",
      subject: "Mathematics",
    },
    { title: "Infinite Powers", author: "Steven Strogatz", subject: "Science" },
    {
      title: "You are Unique",
      author: "A.P.J Abdul Kalam",
      subject: "English",
    },
    {
      title: "Cloud and waves",
      author: "Rabindranath Tagore",
      subject: "Inspirational",
    },
    {
      title: "Towards Freedom",
      author: "Jawaharlal Nehru",
      subject: "Autobiography",
    },
    {
      title: "To the Youth of India",
      author: "Swami Vivekananda",
      subject: "Inspirational",
    },
    { title: "Chaos", author: "James Gleick", subject: "Science" },
    {
      title: "Inspiring Thoughts",
      author: "Mahatma Gandhi",
      subject: "Inspirational",
    },
    { title: "Forbidden", author: "J.Douglas Kenyon", subject: "Science" },
    {
      title: "Survival Math",
      author: "Mitchell S. Jackson",
      subject: "Mathematics",
    },
    { title: "Zero to One", author: "Peter Thiel", subject: "Motivational" },
    {
      title: "The Math Book",
      author: "Clifford A. Pickover",
      subject: "Mathematics",
    },
  ]);

  const [editing, setEditing] = useState(null);
  const [editInputs, setEditInputs] = useState({});

  const handleDelete = (indexPassed) => {
    const filterValue = add.filter((item, index) => index !== indexPassed);
    setAdd(filterValue);
  };

  const handleEditInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditInputs((prev) => ({ ...prev, [name]: value }));
  };

  const submitEdit = (indexValue) => {
    const editedInputs = add.map((editItem, index) => {
      if (index === indexValue) {
        editItem.title = editInputs.title;
        editItem.author = editInputs.author;
        editItem.subject = editInputs.subject;
      }
      return editItem;
    });
    setAdd(editedInputs);
    setEditing(null);
    setEditInputs({});
    //console.log(editedInputs);
  };

  return (
    <>
      <h1>
        <center>Library Manager App</center>
      </h1>

      <Form add={add} setAdd={setAdd} />

      <div className="home">
        {add.map((item, index) => (
          <div key={index} className="home-items">
            <div className="home-children">
              {editing === index ? (
                <div className="home-child">
                  <input
                    type="text"
                    name="title"
                    placeholder="New title"
                    value={editInputs.title || ""}
                    onChange={handleEditInputs}
                  />
                  {/* {console.log(editInputs)} */}
                  <input
                    type="text"
                    name="author"
                    placeholder="New author"
                    value={editInputs.author || ""}
                    onChange={handleEditInputs}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="New subject"
                    value={editInputs.subject || ""}
                    onChange={handleEditInputs}
                  />
                </div>
              ) : (
                <>
                  <p>{item.title}</p>
                  <p>{item.author}</p>
                  <p>{item.subject}</p>
                </>
              )}
            </div>

            <div className="home-children">
              {editing === index ? (
                <div className="home-children-sc">
                  <button
                    onClick={() => submitEdit(index)}
                    className="submit-edit"
                  >
                    Submit Edits
                  </button>
                  &nbsp; &nbsp;
                  <button onClick={() => setEditing(null)} className="cancel">
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="home-children-buttons">
                  <button
                    onClick={() => {
                      setEditing(index);
                      setEditInputs(item);
                    }}
                    className="edit"
                  >
                    Edit
                  </button>
                  &nbsp; &nbsp;
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
