import axios from "axios";

const fetch_all_post = async () => {
    const posts =  await axios.get(" https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/");
    return posts;
}

const API  = {
    fetch_all_post
}

export default API;