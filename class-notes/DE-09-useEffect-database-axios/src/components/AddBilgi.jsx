import { useState } from "react";




const AddBilgi = ({postBilgi}) => {
 // todo parantez icine post bilgi yazinca sanki asagidaki satirlari buraya getirdi
  // const postBilgi = async () => {
  //   await axios.post(url, {
  //     title: "hayat bilgisi",
  //     description: "naber",
  //   });
  // };
 

  const[title, setTitle] = useState("")
  const[desc,setDesc] = useState("")

  const gonder = (e)=> {
    e.preventDefault()
    // postBilgi(title,desc)
    postBilgi({title:title, description:desc})
  }

  

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={gonder} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e)=>setTitle(e.target.value)}
          
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            onChange={(e)=>setDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBilgi;
