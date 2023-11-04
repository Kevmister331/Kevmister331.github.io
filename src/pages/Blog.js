import React from 'react'
import '../styles/Blog.css';
import {IoIosArrowRoundBack} from "react-icons/io";


function Blog() {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    React.useEffect(() => {
      document.body.className = theme === 'dark' ? 'dark-theme' : '';
    }, [theme]);
    return (
        <div className="blog-container">
            <button onClick={() => window.history.back()} className="icon-button">
                <IoIosArrowRoundBack size={50}/>
            </button>
            <div className="theme-switch-wrapper">
                <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === 'dark'} 
                />
                <span className="slider round"></span>
                </label>
            </div>
            <h1>Welcome to Kevin's Blog!</h1>
            <p>Work in progress...</p>
            
            <div className="content-section">
                <div className="left-section">
                    <h2>Archives by Topic:</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
 
                    </ul>
                </div>
                <div className="right-section">
                    <h2>Best Posts:</h2>
                    <ul>
                        <li></li>
                    </ul>
                    <br></br><br></br>
                    <h2>Latest Posts:</h2>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Blog;
