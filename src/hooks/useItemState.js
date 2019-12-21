import useLocalStorageState from "./useLocalStorageState";

export default initialItems => {
  const [ items, setItems ] = useLocalStorageState(initialItems);

  return {
    items,
    addItem: newItemText => {
      const nextId = items.length === 0 ? 1 : items[items.length - 1].id + 1;
      setItems([ ...items, { id: nextId, item: newItemText, completed: false } ]);
    },
    removeItem: id => {
      const updated = items.filter(item => item.id !== id);
      setItems(updated);
    },
    toggleItem: id => {
      const updated = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item);
      setItems(updated);
    },
    editItem: (id, newItem) => {
      const updated = items.map(item => item.id === id ? { ...item, item: newItem } : item);
      setItems(updated);
    }
  }
}