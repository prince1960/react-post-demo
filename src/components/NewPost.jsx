
import classes from "./NewPost.module.css";

function NewPost({modalOpenHandler, addPostHandler}) {

    function submitHandler(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const id = crypto.randomUUID();
        const content = event.target.content.value;
        const post = {title, content, id};
        addPostHandler(post);
        modalOpenHandler(false);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="title">Title</label>
                <input required type="text" id="title" />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea required rows={3} id="content"></textarea>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={() => modalOpenHandler(false)}>Cancel</button>
                <button type="submit">Post</button>
            </div>

        </form>
    );
}

export default NewPost;