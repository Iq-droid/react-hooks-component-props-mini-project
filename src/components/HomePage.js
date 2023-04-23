import React from 'react';
import BlogPost from './BlogPost';

const posts = [
  { id: 1, title: 'First Post', date: '2023-04-22', summary: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', date: '2023-04-23', summary: 'This is the second blog post.' },
  { id: 3, title: 'Third Post', date: '2023-04-24', summary: 'This is the third blog post.' },
];

function HomePage() {
  return (
    <div>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;