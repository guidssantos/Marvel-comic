import { createReducer } from '@reduxjs/toolkit';
import { addToCart, removeFromCart, updateAmount } from './actions';

export const cart = createReducer([], {
  [addToCart]: (state, action) => {
    const { payload } = action;
    const { id } = payload;

    const comicExist = state.find((comic) => comic.id === id);

    if (comicExist) {
      comicExist.amount += 1;
    } else {
      payload.amount = 1;
      state.push(payload);
    }
  },
  [removeFromCart]: (state, action) => {
    const productIndex = state.findIndex(
      (comic) => comic.id === action.payload
    );

    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
  },
  [updateAmount]: (state, action) => {
    const { id, amount } = action.payload;
    const comicExist = state.find((comic) => comic.id === id);

    if (comicExist) {
      console.log(action.payload);
      const comicIndex = state.findIndex((comic) => comic.id === comicExist.id);

      if (comicIndex >= 0 && amount >= 0) {
        state[comicIndex].amount = Number(amount);
      }
    }
    return state;
  },
});
