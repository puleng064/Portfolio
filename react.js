import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const typingRef = useRef(null);
    const sectionsRef = useRef([]);
    const animationsContainerRef = useRef(null);

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

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            if (!animationsContainerRef.current) return;

            const wipe = document.createElement("div");
            wipe.className = "spider-wipe";
            wipe.style.left = `${e.clientX}px`;
            wipe.style.top = `${e.clientY}px`;
            animationsContainerRef.current.appendChild(wipe);

            setTimeout(() => wipe.remove(), 500);
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
                            {index === 0 && (
                                <div>
                                    <h1 ref={typingRef} style={{ color: "#4caf50" }}></h1>
                                    <p>Highly motivated software developer with a passion for creating innovative solutions.</p>
                                </div>
                            )}
                            {index === 1 && (
                                <p>I’m a motivated individual with a passion for software management and continuous learning.</p>
                            )}
                            {index === 2 && (
                                <p>Creating beautiful and responsive designs.</p>
                            )}
                            {index === 3 && (
                                <li><a href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:a1810506-6b29-4de8-8903-f489e2f49576">Resume</a></li>
                            )}
                            {index === 4 && (
                                <div>
                                    <h3>Contact Me</h3>
                                    <p>Phone: +27 629 313 765</p>
                                    <p>Email: calforniahpuleng@gmail.com</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            <div ref={animationsContainerRef} id="animations" className="animations"></div>
        </div>
    );
};

export default App;