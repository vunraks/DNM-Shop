import { createSlice } from '@reduxjs/toolkit'

const load = () => {
  try {
    const raw = localStorage.getItem('cart_v1')
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

const save = (state) => {
  try { localStorage.setItem('cart_v1', JSON.stringify(state)) } catch {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: load(),
  reducers: {
    addToCart: (state, action) => {
      const found = state.find(p => p.id === action.payload.id)
      if (found) found.quantity += 1
      else state.push({ ...action.payload, quantity: 1 })
      save(state)
    },
    removeFromCart: (state, action) => {
      const next = state.filter(p => p.id !== action.payload)
      save(next)
      return next
    },
    increase: (state, action) => {
      const it = state.find(p => p.id === action.payload)
      if (it) { it.quantity += 1; save(state) }
    },
    decrease: (state, action) => {
      const it = state.find(p => p.id === action.payload)
      if (it && it.quantity > 1) { it.quantity -= 1; save(state) }
    },
    clearCart: () => {
      save([])
      return []
    }
  }
})

export const { addToCart, removeFromCart, increase, decrease, clearCart } = cartSlice.actions
export default cartSlice.reducer
