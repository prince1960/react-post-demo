import MainHeader from "./MainHeader";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import PostList from "./PostList";

function Page() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  function modalOpenHandler(isOpen) {
    setModalIsOpen(isOpen);
  }

  function addPostHandler(postData) {
    setPosts((prevPosts) => {
      return [...prevPosts, postData];
    });
  }
  //in ES5  - 
  /*function addPostHandler(postData) {
    setPosts(function (prevPosts) {
      return prevPosts.concat(postData);
    });
  } */


  return (
    <div>
      <MainHeader modalOpenHandler={modalOpenHandler} />
      {modalIsOpen && <Modal modalOpenHandler={modalOpenHandler}>
        <NewPost modalOpenHandler={modalOpenHandler} addPostHandler={addPostHandler} />
      </Modal>}
      <PostList posts={posts} />
    </div>

  );
}

export default Page;
