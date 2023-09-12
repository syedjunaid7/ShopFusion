import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
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
    },
    increaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
