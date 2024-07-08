import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart.slice'



export const store = configureStore({
  reducer: {
    shop: cartSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch








// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       shop: cartSlice
//     },
//   })
// }

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']