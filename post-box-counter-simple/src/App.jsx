import { useState } from "react";

const MAX = 100;

export default function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const over = text.length > MAX;
  const disabled = text.trim() === "" || over;

  const handlePost = () => {
    setPosts([text.trim(), ...posts]);
    setText("");
  };

  return (
    <div className="app">
      <h1>Post Box</h1>
      <div className="box">
        <textarea
          className={over ? "error" : ""}
          placeholder="What's on your mind?"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="row">
          <span className={over ? "counter red" : "counter"}>
            {text.length} / {MAX}
          </span>
          <button onClick={handlePost} disabled={disabled}>Post</button>
        </div>
        {over && <p className="red">Limit exceeded</p>}
      </div>

      <ul>
        {posts.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}
