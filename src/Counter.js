import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // useEffect(() => {
  //   console.log("Total click", like, dislike);
  // }, [like, dislike]);

  return (
    <div>
      {/* onClick - camelCase */}
      <IconButton
        aria-label="like-btn"
        color="primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="like-btn"
        color="error"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
