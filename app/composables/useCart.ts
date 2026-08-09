const CART_KEY = 'byte-store-cart'
type CartItem = { id: string; quantity: number }
export const useCart = () => {
  const items = useState<CartItem[]>('cart-items', () => [])
  const ready = useState('cart-ready', () => false)
  const save = () => { if (import.meta.client) localStorage.setItem(CART_KEY, JSON.stringify(items.value)) }
  const initialize = () => { if (!import.meta.client || ready.value) return; try { const stored = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); items.value = Array.isArray(stored) ? stored.filter(i => i?.id && i.quantity > 0) : [] } catch { items.value = [] }; ready.value = true }
  const addItem = (id: string) => { initialize(); const item = items.value.find(i => i.id === id); item ? item.quantity++ : items.value.push({ id, quantity: 1 }); save() }
  const updateQuantity = (id: string, quantity: number) => { const item = items.value.find(i => i.id === id); if (!item) return; quantity <= 0 ? items.value = items.value.filter(i => i.id !== id) : item.quantity = quantity; save() }
  const removeItem = (id: string) => { items.value = items.value.filter(i => i.id !== id); save() }
  const totalItems = computed(() => items.value.reduce((sum, i) => sum + i.quantity, 0))
  return { items, totalItems, initialize, addItem, updateQuantity, removeItem }
}
