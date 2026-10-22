// 14. Create a Like button using the useState hook. When clicked, it should toggle between "Like" and "Liked".

import { useState } from "react";

export default function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <button className="m-8 py-1 px-3" onClick={() => setLiked(!liked)}>
      {liked ? <h1>Liked</h1> : <h1>Like</h1>}
    </button>
  );
}