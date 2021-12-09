import { useState } from "react";
import Form from "./form";

const Home = () => {

    const [add, setAdd] = useState([
                                     
                                    {title: 'title1', author: 'author1', subject: 'sub1'},
                                    {title: 'title2', author: 'author2', subject: 'sub2'},
                                    {title: 'title3', author: 'author3', subject: 'sub3'},
                                    {title: 'title4', author: 'author4', subject: 'sub4'}
                                    
                                    ])
    
    const [editing, setEditing] = useState(null); 
    const [editInputs, setEditInputs] = useState({});

    const handleDelete = (indexPassed) => {
        const filterValue = add.filter((item,index) => index !== indexPassed);
        setAdd(filterValue);
    }                                 

    

    const handleEditInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditInputs((prev) => ({...prev, [name]:value}));
    } 
    
    const submitEdit = (indexValue) => {
         const editedInputs = add.map((editItem,index) => {
                                                if(index === indexValue)
                                                {
                                                    editItem.title = editInputs.newTitle;
                                                    editItem.author = editInputs.newAuthor;
                                                    editItem.subject = editInputs.newSubject;
                                                }
                                                return editItem;
                                            } )
        setAdd(editedInputs);                                 
        setEditing(null);  
        setEditInputs({});  
        //console.log(editedInputs);
    }

    return(

        <>
           <h1>Library Manager App</h1>  <hr/>

           <Form add={add} setAdd={setAdd}/>  <hr/>

            {add.map((item,index) => (
                              <div key={index}>
                                  
                                    {editing === index 
                                     
                                     ?
                                     ( 
                                        <>
                                            <input type="text" name="newTitle"  placeholder="Enter new title" value={editInputs.newTitle || ""}  onChange={handleEditInputs}/>
                                            <input type="text" name="newAuthor" placeholder="Enter new author" value={editInputs.newAuthor || ""}  onChange={handleEditInputs}/>
                                            <input type="text" name="newSubject" placeholder="Enter new subject" value={editInputs.newSubject || ""}  onChange={handleEditInputs}/>
                                        </>
                                      )     
                                     : 
                                     (
                                        <>
                                            <td>{item.title}</td> 
                                            <td>{item.author}</td>
                                            <td>{item.subject}</td>
                                        </>
                                     )
                                   }

                                  {editing === index 
                                  ?
                                  (<button onClick={() => submitEdit(index)}>Submit Edits</button>)
                                  :
                                  (<button onClick={() => setEditing(index)}>Edit</button>) 
                                  }
                                  

                                  <button onClick={() => handleDelete(index)}>Delete</button>    <hr/>
                              </div>
                             ))} 

           
        </>
    )
}
export default Home;