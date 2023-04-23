// import React from 'react';
// import { useParams } from 'react-router-dom';

// const posts = [
//   { id: 1, title: 'First Post', date: '2023-04-22', content: 'This is the full text of the first blog post.' },
//   { id: 2, title: 'Second Post', date: '2023-04-23', content: 'This is the full text of the second blog post.' },
//   { id: 3, title: 'Third Post', date: '2023-04-24', content: 'This is the full text of the third blog post.' },
// ];

// function FullBlogPost() {
//   const { id } = useParams();
//   const post = posts.find((p) => p.id === parseInt(id));

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.date}</p>
//       <p>{post.content}</p>
//     </div>
//   );
// }

// export default FullBlogPost;