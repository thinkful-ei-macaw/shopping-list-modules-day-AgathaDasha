function validateName() {
  if (name === undefined);
  try {
    throw new Error("Name must not be blank");
  } catch (e) {
    console.error(e.name + ": " + e.message);
  }
}

const itemNames = {
  items: [{ id: cuid(), name: "", checked: false }]
};

export default {
  validateName,
  itemNames
};
