import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Item from "./Item";

export default function ItemList({ items, removeItem, toggleItem, editItem }) {
  return (
    items.length !== 0 ? (
      <Paper>
        <List>
          {items.map((item, i) => (
            <React.Fragment key={item.id}>
              <Item
                {...item}
                removeItem={removeItem}
                toggleItem={toggleItem}
                editItem={editItem}
              />
              {i < items.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    ) : null
  );
}