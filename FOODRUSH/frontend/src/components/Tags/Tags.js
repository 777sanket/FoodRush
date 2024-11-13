import React from "react";
import classes from "./tags.module.css";
import { Link } from "react-router-dom";

// export default function Tags({ tags,forFoodPage }) {
//   return (
//    <div
//     className={classes.container}
//     style={{
//       justifyContent: forFoodPage ? 'start' : 'center',
//     }}
//    >
//       {tags.map(tag => (
//         <Link key={tag.name} to={`/tag/${tag.name}`}>
//           {tag.name}
//           {!forFoodPage && `(${tag.count})`}
//         </Link>
//       ))}
//    </div>
//   )
// }

export default function Tags({ tags, forFoodPage }) {
  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forFoodPage ? "start" : "center",
      }}
    >
      {Array.isArray(tags) ? (
        tags.map((tag) => (
          <Link key={tag.name} to={`/tag/${tag.name}`}>
            {tag.name}
            {!forFoodPage && `(${tag.count})`}
          </Link>
        ))
      ) : (
        <p>No tags available</p> // Fallback message if `tags` is not an array
      )}
    </div>
  );
}
