import React, { useEffect, useRef } from "react";

const Translate = () => {
  const googleTranslateRef = useRef(null);

  const initializeGoogleTranslate = () => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          includedLanguages: "en,ru,uz,ky",
        },
        googleTranslateRef.current
      );
    }
  };

  const applyStylesToTranslateWidget = () => {
    const widgetEl = document.querySelector(".goog-te-gadget-simple");

    if (widgetEl) {
      widgetEl.classList.add("custom-translate-widget");

      Object.assign(widgetEl.style, {
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "transparent",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "5px 10px",
        fontFamily: "'Arial', sans-serif",
      });

      const unnecessaryElements = widgetEl.querySelectorAll("img, .goog-te-gadget-icon");
      unnecessaryElements.forEach((el) => (el.style.display = "none"));

      const bannerFrame = document.querySelector(".goog-te-banner-frame.skiptranslate");
      if (bannerFrame) bannerFrame.style.display = "none";
    }
  };

  useEffect(() => {
    const googleTranslateElementInit = () => {
      initializeGoogleTranslate();
      applyStylesToTranslateWidget();
    };

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = googleTranslateElementInit;

      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      googleTranslateElementInit();
    }

    const observer = new MutationObserver(() => applyStylesToTranslateWidget());

    if (googleTranslateRef.current) {
      observer.observe(googleTranslateRef.current, { childList: true });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return <div ref={googleTranslateRef} className="google-translate-container"></div>;
};

export default Translate;
