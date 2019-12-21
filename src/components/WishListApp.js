import React from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import ItemList from "./ItemList";
import AddForm from "./AddForm";
import useItemState from "../hooks/useItemState";

export default function WishListApp() {
  const initialItems = [];
  const { items, addItem, editItem, removeItem, toggleItem } = useItemState(initialItems);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "red",
      }}
      elevation={0}
    >
      <AppBar position='static' style={{ height: "64px", backgroundColor: "green" }}>
        <Toolbar>
          <Typography color='inherit'>CHRISTMAS WISH LIST</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify={"center"} style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <AddForm addItem={addItem} />
          <ItemList items={items} removeItem={removeItem} toggleItem={toggleItem} editItem={editItem} />
        </Grid>
      </Grid>
    </Paper>
  );
}