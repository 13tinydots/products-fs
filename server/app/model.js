const validate = ({ price, stocked = true, name = "" } = {}) => {
  const ret = [];

  if (price < 0.01) {
    ret.push("Price must be non-zero");
  }

  if (typeof stocked !== "boolean") {
    ret.push("Invalid stocked");
  }

  if (!name.length) {
    ret.push("Name must be non-empty");
  }

  return ret;
};

const withStringifiedPrice = ({ price, ...product }) => ({
  ...product,
  price: `$${price.toFixed(2)}`,
});

export default ({ stocked = true, ...newProduct }) => {
  const errors = validate(newProduct);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }

  return withStringifiedPrice({ ...newProduct, stocked });
};
