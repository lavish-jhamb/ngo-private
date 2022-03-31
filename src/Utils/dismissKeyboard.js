export const dismissKeyboard = (e) => {
  if (e.key === "Enter") {
    e.target.blur();
  }
};
