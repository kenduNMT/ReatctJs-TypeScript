let listPost = [];

const MAXPOST = 5;

const createPost = (title, content, author) => {
    if (listPost.length >= MAXPOST) {
        console.log("Danh sách bài viết đã đầy");
        return;
    }

    const newPost = {
        title: title,
        content: content,
        author: author
    };

    listPost = [...listPost, newPost];
};

const displayPosts = () => {
    console.log("Danh sách bài viết:");
    for (const post of listPost) {
        console.log(`Tiêu đề: ${post.title}, Nội dung: ${post.content}, Tác giả: ${post.author}`);
    }
};

const searchPosts = (keyword) => {
    return listPost.filter(post =>
        post.title.includes(keyword) ||
        post.content.includes(keyword) ||
        post.author.includes(keyword)
    );
};

export { createPost, displayPosts, searchPosts };
