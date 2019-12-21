import React from "react";
import { ListItemText } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "../hooks/useToggleState";
import EditForm from "./EditForm";

export default function Item({ id, item, completed, removeItem, toggleItem, editItem }) {
  const [ isEditing, toggle ] = useToggleState();
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditForm editItem={editItem} id={id} item={item} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleItem(id)} />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{item}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label={"Edit"} onClick={() => toggle()}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label={"Delete"} onClick={() => removeItem(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}