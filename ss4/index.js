import { createPost, displayPosts, searchPosts } from './managerPost.js';

createPost("Bài viết 1", "Nội dung của bài viết 1", "Tác giả A");
createPost("Bài viết 2", "Nội dung của bài viết 2", "Tác giả B");
createPost("Bài viết 3", "Nội dung của bài viết 3", "Tác giả C");
createPost("Bài viết 4", "Nội dung của bài viết 4", "Tác giả D");
createPost("Bài viết 5", "Nội dung của bài viết 5", "Tác giả E");
createPost("Bài viết 6", "Nội dung của bài viết 6", "Tác giả F");

displayPosts();

const searchResults = searchPosts("Bài viết 1");
console.log("Kết quả tìm kiếm:");
for (const post of searchResults) {
    console.log(`Tiêu đề: ${post.title}, Nội dung: ${post.content}, Tác giả: ${post.author}`);
}
