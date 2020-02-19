import item from "./item.js";

const store = {
  items: [],
  hideCheckedItems: false
};
console.log(item);
console.log(foo);

//In store.js, create a findById function that accepts an id as its argument:
//Use the Array find() method to return the specific item from store.items.

const findById = function(id) {
  return this.items.find(currentItem => currentItem.id === id);
};

/*Create an addItem function that accepts a name as its argument.

Use a try/catch block.
Validate the name and create the item.
Push the created item to this.items. */
const addItem = function(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(error.message);
  }
};

/* Create a findAndToggleChecked function that accepts an id as its argument.
Use this.findById() to fetch the item and toggle its checked attribute. */

const findAndToggleChecked = function(id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
};

/* Create a findAndUpdateName function that accepts id and newName as its arguments.

Use a try/catch block.
Inside the try block, validate the name and then use findById() to fetch the item and update its name.
Inside the catch block, log the following message to the console: Cannot update name: ${error.message}. */

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const currentItem = this.findById(id);
    currentItem.name = name;
  } catch (error) {
    console.log("cannot update name");
  }
};
/* Create a findAndDelete function that accepts an id as its argument.

Find the item by its id, and then remove it from this.items.
Hint: You can use Array method .filter() or a combination of .findIndex() and .splice(). */

const findAndDelete = function(id) {
  this.items = this.items.filter(currentItem => currentItem.id);
};

export default {
  items,
  hideCheckedItems,
  findById,
  findAndToggleChecked,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete
};
