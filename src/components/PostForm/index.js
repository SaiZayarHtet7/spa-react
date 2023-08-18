import React from "react";
import "./index.css";
import { useState } from "react";

export default function PostForm({ addPost }) {


  let [title, setTitle] = useState("");
  let [status,setStatus ]= useState("upcoming");

  let resetForm = () => {
    setTitle("");
    console.log("updated successfully");
  };

  let uploadPost = (e) => {
    e.preventDefault(); // prevent refresh page
    let post = {
      id: Math.floor(Math.random() * 100000),
      title: title,
      status:status,
    };
    addPost(post);
    resetForm();
    console.log(post);
  };

  return (
    <form className="post-form" onSubmit={uploadPost}>
      <h1>Create Post </h1>
      <div className="form-control">
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={(v) => setTitle(v.target.value)}
          value={title}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Status</label>
        <select name="" id="" value={status} onChange={(e)=>setStatus(e.target.value)}>
          <option value="dropped">Dropped</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">UpComing</option>
        </select>
      </div>

      <div className="form-control">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
