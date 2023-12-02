import { createContext, useContext, useEffect, useState } from "react";
import MainData from "../../Data/Product";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // for filter category
  const fData = MainData.filter((curElem) => curElem.feature === "true");
  // console.log(fData)
//   const Menu = [{ name: "All" }, { name: "vegetable" }, { name: "fruit" }];
  const totalData = MainData;
  const [filterData, setFilterData] = useState(fData);
  const [selectedCategory, setSelectedCategory] = useState("fruit");
  const [cartNumber, setCartNumber] = useState(0);
  const [wishNumber, setWishNumber] = useState(0);
//   const [menu, setMenu] = useState();

  // filter sale data

  const filterSale = MainData.filter((curElem) => curElem.sale === "true");
  const [sale, setSale] = useState(filterSale);

// for filter category ------------------------------------------------------------->
const FindCategory = totalData.reduce((acc , obj)=>{
  if(!Array.isArray(acc)){
    acc = [];
  }
if(!acc.find(curElem => curElem.category === obj.category)) {
    acc.push(obj);
}
    return acc;
})
const Menu = FindCategory;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
      const filteredData = fData.filter((nData) => {
        return nData.category === category;
      });
      setFilterData(filteredData);
  };
  const DefaultFeature = Menu.filter((curElem)=>curElem.category === "fruit" )
//   console.log("1st category", DefaultFeature)

// for add to  cart ------------------------------------------------------------->

  const [cart, setCart] = useState([]);
//   console.log("cart item", cart);

  const addCart = (id) => {
    const cartFind = totalData.find((curElem) => curElem.id === id);

    setCart((curElem) => {
      const toLocal = [...curElem, cartFind];
      localStorage.setItem("cartItem", JSON.stringify(toLocal));
      // update cart item number
      const cartNum = toLocal.length;
      setCartNumber(cartNum);
      return toLocal;
    });
  };

// get cart data from localstorage ------------------------------------------------------------->
  const CartBtn = () => {
    const savedData = JSON.parse(localStorage.getItem("cartItem"));
    setCart(savedData);
    // console.log("storage", savedData);
  };

// remove all cart data ------------------------------------------------------------->

  const removeAllCart = () => {
    setCart((curElem) => {
      const removeAll = [];
      // set data to local storage
      localStorage.setItem("cartItem", JSON.stringify(removeAll));
      const cartNum = removeAll.length;
      setCartNumber(cartNum);
      return removeAll;
    });
  };

// remove a single cart data ------------------------------------------------------------->
  const dltSingleData = (id) => {
    const dltSingle = cart.findIndex((curElem) => curElem.id === id);
    const singleDelete = [...cart];
    if (dltSingle !== -1) {
      singleDelete.splice(dltSingle, 1);
      setCart(singleDelete);
      // set to local storage
      localStorage.setItem("singleRemove", JSON.stringify(cart));
    }
  };

// load cart data at the time page loads ------------------------------------------------------------->
  useEffect(() => {
    // fetch cart data
    const savedData = JSON.parse(localStorage.getItem("cartItem"));
    setCart(savedData);
    // fetch cart item number
    const cartNum = savedData.length;
    setCartNumber(cartNum);
  }, []);

// for add to wishlist ------------------------------------------------------------->

  const [wish, setWish] = useState([]);
//   console.log("wishlist", wish);
  const addWish = (id) => {
    const foundItem = totalData.find((curElem) => curElem.id === id);

// for save wish data to local storage ------------------------------------------------------------->

    setWish((curElem) => {
      const newWish = [...curElem, foundItem];
      localStorage.setItem("wishItem", JSON.stringify(newWish));

      // count wish number

      const wishNum = newWish.length;
      setWishNumber(wishNum);
    });
  };

  const getWish = () => {
    const savedWish = JSON.parse(localStorage.getItem("wishItem"));
  };

  return (
    <ProductContext.Provider
      value={{
        selectedCategory,
        handleCategoryClick,
        filterData,
        Menu,
        totalData,
        sale,
        addWish,
        addCart,
        cart,
        CartBtn,
        cartNumber,
        getWish,
        wishNumber,
        removeAllCart,
        dltSingleData,
        FindCategory
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, useProductContext };
