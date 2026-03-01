import Post from "./Post";
import classes from "./PostList.module.css";
function PostList({posts}) {
    return (
        <ul className={classes.posts}>
        {posts.map(post => {
            return (<li>
                <Post key={post.id} title={post.title} content={post.content} />
            </li>)
        })}
        </ul>
    );
}

export default PostList;