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
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
