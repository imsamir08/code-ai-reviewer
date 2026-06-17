import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import axios from "axios";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const reviewCode = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/ai/get-review", {
        code,
      });

      setReview(response.data.review || response.data);
    } catch (error) {
      console.error(error);
      setReview("Failed to generate review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) =>
              Prism.highlight(
                code,
                Prism.languages.javascript,
                "javascript"
              )
            }
            padding={15}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 16,
              minHeight: "100%",
            }}
          />
        </div>

        <button
          className="review-btn"
          onClick={reviewCode}
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review Code"}
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default Home;