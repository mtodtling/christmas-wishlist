import { TextField } from "@material-ui/core";
import React from "react";
import useInputState from "../hooks/useInputState";

export default function EditForm({ id, item, editItem, toggleEditForm }) {
  const [ value, handleChange, reset ] = useInputState(item);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editItem(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ margin: "1rem", width: "50%" }}
    >
      <TextField value={value} onChange={handleChange} margin={"normal"} fullWidth autoFocus />
    </form>
  );
}