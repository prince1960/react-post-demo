
import classes from "./Post.module.css";

function Post({title, content}) {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{title}</p>
            <p className={classes.text}>{content}</p>
        </li>
    );
}

export default Post;