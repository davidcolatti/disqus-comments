import React from "react";
import ReactDisqusComments from "react-disqus-comments";

const App = () => {
  function handleNewComment(comment) {
    console.log(comment);
  }

  return (
    <ReactDisqusComments
      shortname="example"
      identified="something-unique-12345"
      title="Example Thread"
      url="http://localhost:3000/"
      category_id="123456"
      onNewComment={handleNewComment}
    />
  );
};

export default App;
