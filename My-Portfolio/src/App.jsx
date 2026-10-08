import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ProjectLibrary from "./pages/ProjectLibrary";

// This small component handles the "Watching" logic
function ScrollObserver() {
  const location = useLocation(); // This detects every time the URL changes

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        const animation = el.dataset.animation || 'fade-in-up';

        if (entry.isIntersecting) {
          el.style.animationDelay = el.dataset.delay || '0s';
          el.style.animationDuration = el.dataset.duration || '0.6s';
          el.classList.add(animation, 'opacity-100');
        } else {
          el.classList.remove(animation, 'opacity-100');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    const observeReveals = (root) => {
      if (root instanceof Element && root.matches('.reveal')) {
        observer.observe(root);
      }
      root.querySelectorAll?.('.reveal').forEach((element) => observer.observe(element));
    };

    observeReveals(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(observeReveals);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location]); // Re-run this whole block whenever the URL changes!

  return null; // This component doesn't show anything, it just "works" in the background
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollObserver /> {/* This stays active across all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectLibrary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;