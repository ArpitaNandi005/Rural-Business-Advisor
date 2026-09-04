import { useState } from "react";

function AIAdvisor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAdvice = () => {
    if (question.trim() === "") {
      setAnswer("Please enter a business question first.");
      return;
    }

    setAnswer(
      "Based on your question, BIZNEX recommends reviewing your costs, understanding your local market, and planning your next business step carefully."
    );
  };

  return (
    <div className="ai-page">
      <div className="ai-header">
        <div>
          <h1>BIZNEX</h1>
          <p>YOUR AI-POWERED BUSINESS PARTNER</p>
        </div>
      </div>

      <div className="ai-content">
        <h2>🤖 AI Business Advisor</h2>

        <p className="ai-description">
          Ask questions about your business and get helpful guidance.
        </p>

        <div className="ai-card">
          <label>Your Business Question</label>

          <textarea
            placeholder="Example: How can I increase my business profit?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button onClick={getAdvice}>
            Get Business Advice
          </button>

          {answer && (
            <div className="ai-answer">
              <h3>BIZNEX Advice</h3>
              <p>{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIAdvisor;