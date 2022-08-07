import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

function Root() {
  const Routers = [
    { path: '/', name: 'Home', Component: App, exact: true },
    { path: '/about', name: 'About', Component: About, exact: false },
    { path: '/contact', name: 'Contact', Component: Contact, exact: false },
    { path: '/blog', name: 'Blog', Component: Blog, exact: true },
    { path: '/blog/:id', name: 'Post', Component: BlogPost, exact: false },
    { path: '*', name: 'No Match', Component: NoMatch, exact: false },
  ];
  return (
    <Router>
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            {/* <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NoMatch />} /> */}
            {Routers.map(({ path, name, Component, exact }, index) => (
              <Route key={index} path={path} element={<Component />} exact={exact} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Root;
