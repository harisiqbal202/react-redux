export const fetchUser = async () => {
  const resposne = await fetch("http://localhost:3004/users");
  const res = resposne.json();
  return res;
};
export const fetchProduct = async () => {
  const resposne = await fetch("http://localhost:3004/products");
  const res = resposne.json();
  return res;
};
export const postData = async (product) => {
  const resposne = await fetch("http://localhost:3004/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const res = await resposne.json();
  console.log(res);
};
