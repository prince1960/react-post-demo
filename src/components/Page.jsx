import MainHeader from "./MainHeader";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function Page() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  function modalOpenHandler(isOpen) {
    setModalIsOpen(isOpen);
  }
  
  return (
        <div>
            <MainHeader modalOpenHandler={modalOpenHandler}/>
            {modalIsOpen && <Modal modalOpenHandler={modalOpenHandler}>
                <NewPost modalOpenHandler={modalOpenHandler}/>
            </Modal>}
        </div>
    );
}

export default Page;
