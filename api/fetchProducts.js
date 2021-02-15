import axios from "axios";
const baseurl = "https://api.uza360.com/commerce/products";
let products;

//fetch all products
const fetchProducts = async () => {
  try {
    let res = await axios({
      url: baseurl,
      method: "GET",
      params: {
        limit: 12,
      },
    });
    products= res.data.data
    console.log(products)
  } catch (error) {
    console.log(error);
  }
};

export { products, fetchProducts };
