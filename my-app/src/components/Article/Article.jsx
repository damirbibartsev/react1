import React from "react";
const { useState, useEffect } = React;

const Article = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h1>Title</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "visible" : "unvisible"}
      </button>

      {visible && <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        molestiae facere quis cum est quos, culpa adipisci aliquam laborum
        placeat velit aliquid asperiores nemo labore atque iste sint quo vel
        voluptate doloremque in optio. Molestiae, voluptatem eaque aliquid
        possimus cupiditate asperiores aspernatur nam id sint velit fugiat optio
        voluptatibus in amet ullam est! Velit eius quibusdam, esse facilis,
        cupiditate sapiente magni molestiae dolore et, dicta ut! Quod soluta
        neque dignissimos sed laudantium consequuntur nesciunt enim animi ab
        fugit vel, eos cupiditate reprehenderit voluptates commodi harum
        voluptas iste est similique suscipit possimus! Saepe velit molestiae
        enim commodi sapiente nisi quasi sequi!
      </p>}
    </div>
  );
};

export default Article;
