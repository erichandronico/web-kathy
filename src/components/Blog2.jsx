import React, { useState, useEffect } from 'react';
import { client, GET_POSTS } from '../lib/hashnode';

const USERNAME = 'kathyco'; // reemplaza si es necesario

export const Blog2 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.request(GET_POSTS, { username: USERNAME, page: 0 })
      .then(data => {
        setPosts(data.user.publication.posts);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="blog" className="bg-white py-16 px-6 text-texto">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-vino mb-6 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`https://${USERNAME}.hashnode.dev/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="block border rounded-lg shadow-md hover:shadow-xl overflow-hidden"
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-petroleo">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(post.dateAdded).toLocaleDateString()}
                </p>
                <p className="text-texto text-sm">{post.brief}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};