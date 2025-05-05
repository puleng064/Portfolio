import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const typingRef = useRef(null);
    const sectionsRef = useRef([]);
    const animationsContainerRef = useRef(null); // Ref for Spider Wipe Effect

    useEffect(() => {
        sectionsRef.current.forEach((section, index) => {
            if (section) {
                section.style.display = index === currentSectionIndex ? "block" : "none";
            }
        });

        typeText();
    }, [currentSectionIndex]);

    const navigate = (index) => {
        setCurrentSectionIndex(index);
    };

    const typeText = () => {
        const text = "A Web Developer";
        let index = 0;
        if (typingRef.current) typingRef.current.textContent = "";

        const type = () => {
            if (index < text.length) {
                typingRef.current.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        };
        type();
    };

    // 🕷 Spider Wipe Effect
    useEffect(() => {
        const mouseMoveHandler = (e) => {
            if (!animationsContainerRef.current) return;

            const wipe = document.createElement("div");
            wipe.className = "spider-wipe";
            wipe.style.left = `${e.clientX}px`;
            wipe.style.top = `${e.clientY}px`;
            animationsContainerRef.current.appendChild(wipe);

            setTimeout(() => wipe.remove(), 500); // Quick fade-out effect
        };

        window.addEventListener("mousemove", mouseMoveHandler);
        return () => window.removeEventListener("mousemove", mouseMoveHandler);
    }, []);

    return (
        <div>
            <main>
                <aside className="sidebar">
                    <h1 className="title">Portfolio</h1>
                    <ul className="menu">
                        {["Home", "About Me", "Services", "Resume", "Contact Me"].map((menuItem, index) => (
                            <li key={index} className={index === currentSectionIndex ? "active" : ""} 
                                onClick={() => navigate(index)}>
                                {menuItem}
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="content">
                    {["Home", "About Me", "Services", "Resume", "Contact Me"].map((section, index) => (
                        <div key={index} ref={(el) => (sectionsRef.current[index] = el)} className="section-box">
                            <h2>{section}</h2>
                        </div>
                    ))}
                </div>
            </main>

            {/* 🕷 Spider Wipe Effect Container */}
            <div ref={animationsContainerRef} id="animations" className="animations"></div>
        </div>
    );
};

export default App;
