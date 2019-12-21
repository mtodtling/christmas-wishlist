import { useEffect, useState } from "react";

export default (key, defaultValue) => {
  const [ state, setState ] = useState(() => {
    let value;

    try {
      value = JSON.parse(window.localStorage.getItem("items") || "[]");
    } catch (e) {
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [ key, state ]);

  return [ state, setState ];
}