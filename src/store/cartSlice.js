import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");
  const initialState = {
    items: [],
    singleItem: [],
    totalPrice: 0,
    totalQuantity: 0,
  };
  return cartData ? JSON.parse(cartData) : initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    goToProduct(state, action) {
      state.singleItem = [action.payload];
      localStorage.setItem("singleItem", JSON.stringify(state.singleItem));
    },

    getCartTotal(state) {
      const { totalPrice, totalQuantity } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );

      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseItemQuantity(state, action) {
      const itemToIncrease = state.items.find(
        (item) => item.id === action.payload
      );

      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.items.find(
        (item) => item.id === action.payload
      );   
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
      } else if (itemToDecrease && itemToDecrease.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
  },
});

export const {
  addToCart,
  goToProduct,
  getCartTotal,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
