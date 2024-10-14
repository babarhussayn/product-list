import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ImageType {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface CartItem {
  id: string;
  name: string;
  image: ImageType;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increament: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreament: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increament, decreament } = cartSlice.actions;

export default cartSlice.reducer;
