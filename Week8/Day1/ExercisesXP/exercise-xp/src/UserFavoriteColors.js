import React from "react";

export function UserFavoriteColors({ favorites }) {
  return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
}
