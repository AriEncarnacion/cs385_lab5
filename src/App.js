import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {/* You'll want to `map` each post object to a `<tr>` like the following: */}
          <tr>
            <td>Sample Title</td>
            <td>Sample Body</td>
            <td>Sample Author</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
