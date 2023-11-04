import React from 'react'
import '../styles/Blog.css';

function Blog() {
    return (
        <div className="blog-container">
            <h1>Welcome to Kevin's Blog!</h1>
            <p>Work in progress...</p>
            
            <div className="content-section">
                <div className="left-section">
                    <h2>Archives by Topic:</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="right-section">
                    <h2>Best Posts:</h2>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <br></br><br></br><br></br>
                    <h2>Latest Posts:</h2>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog;
