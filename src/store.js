import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

const initialState = {
    items: [],
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  const totalQuantity = useSelector((state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0)
);

export default store
