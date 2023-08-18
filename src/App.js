import "./index.css";
import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostList/index";
import PostForm from "./components/PostForm/index";
import Modal from "./components/ModalComponents/index";
//hook useState

function App() {
  let [showModal, setShowModal] = useState(false);


  
  let [posts, setPosts] = useState([
    { id: 1, title: "First Post" ,status:"ongoing"},
    { id: 2, title: "Second Post",status:"upcoming"},
  ]);


  let addPost = (post) => {
    setPosts(prev => [...prev,post], );
    setShowModal(false);
  }


  return (
    <>
      <Navbar setShowModal = {setShowModal}/>
      <PostsList posts={posts} />
      {/* <Modal>
        <h1>Zoom class is available now.</h1>
        <p>
          feel free to <a href=""> join</a> here
        </p>
      </Modal> */}
      { showModal &&
        <Modal setShowModal = {setShowModal}>
          <PostForm addPost={addPost}/>
      </Modal>
      }
      
    </>
  );
}

export default App;
