<template>
  <h1>Product page.</h1>
  <div v-for="item in data.products">
    <div>ID: {{ item.id }}</div>
    <div>Name: {{ item.name }}</div>
    <button @click="handleClickAdd(item.id)">Add</button>
    <hr />
  </div>
</template>

<script setup>
import mockProduct from "~/data/mock-products.json"

const data = ref([])

const handleClickAdd = (productId) => {
  const ls = localStorage.getItem('products')
  const lsArray = JSON.parse(ls)
  const products = lsArray || []
  products.push(productId)
  const productsStr = JSON.stringify(products)
  localStorage.setItem('products', productsStr)
}

onMounted(() => {
  data.value = mockProduct
  console.log('assign done !')
})
</script>
