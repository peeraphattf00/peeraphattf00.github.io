<template>
  <h1>Index pages</h1>
  <p>
    <span>Name: </span>
    <span>{{ name }}</span>
  </p>
  <p>
    <span>Age: </span>
    <span>{{ age }}</span>
  </p>
  <button @click="handleClick">rename</button>
  <button @click="handleShowLogName">console.log name</button>
  <button @click="handleAddAge">บวกอายุ</button>
</template>

<script setup>
const name = ref("init")
const age = ref(0)

const handleAddAge = () => {
  //logic
  let newAge = age.value
  newAge = newAge + 2

  age.value = newAge
}

const handleShowLogName = () => {
  // get
  const nameValue = name.value
  console.log(nameValue)
}

const handleClick = () => {
  // logic
  console.log('worked from handleClick function')
  // set
  // วิธีการเปลี่ยนค่า
  name.value = "Peeraphat"
}
</script>