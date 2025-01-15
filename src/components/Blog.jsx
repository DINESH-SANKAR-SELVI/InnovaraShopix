import React from 'react';
import '../styles/Blog.css';
import { Helmet } from 'react-helmet';

const Blog = () => {
    const posts = [
        { title: "Post 1", excerpt: "This is the first post..." },
        { title: "Post 2", excerpt: "This is the second post..." },
        { title: "Post 3", excerpt: "This is the third post..." },
    ];

    return (
        <>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Blog Of InnovaraShopix" />
            </Helmet>
            <section id="blog" style={{ padding: '20px' }}>
                <h2>Our Blog</h2>
                {posts.map((post, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <button onClick={() => alert(`Read more about ${post.title}`)}>Read More</button>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Blog;