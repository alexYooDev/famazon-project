import { useState, useEffect } from 'react';

const useEffectTest = () => {
  const [postName, setPostName] = useState(null);
  const [query, setQuery] = useState('"Eliseo@gardner.biz"');

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1/comments/?email=${}`
      );
      const resJson = await res.json()

    };
  },[]);
  return (
    <div>
      <p></p>
      <p></p>
    </div>
  );
};
