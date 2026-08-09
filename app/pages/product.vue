<script setup lang="ts">
import data from '~/data/mock-products.json'; const search = ref(''); const category = ref('all'); const cats: Record<string, string> = { 'CAT-001': 'โน้ตบุ๊ก', 'CAT-002': 'เดสก์ท็อป', 'CAT-003': 'จอมอนิเตอร์', 'CAT-004': 'สมาร์ตโฟน', 'CAT-005': 'แท็บเล็ต', 'CAT-006': 'อุปกรณ์จัดเก็บข้อมูล', 'CAT-007': 'อุปกรณ์เครือข่าย', 'CAT-008': 'คีย์บอร์ดและเมาส์', 'CAT-009': 'เครื่องเสียง', 'CAT-010': 'อุปกรณ์เสริม' }; const products = computed(() => data.products.filter(p => (category.value === 'all' || p.categoryId === category.value) && (!search.value.trim() || `${p.name} ${p.brand}`.toLowerCase().includes(search.value.toLowerCase().trim())))); useHead({ title: 'สินค้าทั้งหมด — Byte Store' })
</script>
<template>
  <section class="page">
    <div class="section-head">
      <div>
        <p class="eyebrow">ALL PRODUCTS</p>
        <h1>สินค้าทั้งหมด</h1>
        <p>พบ {{ products.length }} จาก {{ data.products.length }} รายการ</p>
      </div>
    </div>
    <div class="filters"><label><span>ค้นหาสินค้า</span><input v-model="search" type="search"
          placeholder="ค้นหาชื่อหรือแบรนด์..."></label><label><span>หมวดหมู่</span><select v-model="category">
          <option value="all">ทุกหมวดหมู่</option>
          <option v-for="(name, id) in cats" :key="id" :value="id">{{ name }}</option>
        </select></label></div>
    <div v-if="products.length" class="product-grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
    <div v-else class="empty-state">
      <h2>ไม่พบสินค้าที่ค้นหา</h2>
      <p>ลองเปลี่ยนคำค้นหาหรือเลือกหมวดหมู่อื่น</p><button class="primary-button"
        @click="search = ''; category = 'all'">ล้างตัวกรอง</button>
    </div>
  </section>
</template>
<style
  scoped>
  .filters {
    margin-bottom: 34px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 14px;
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 16px
  }

  label span {
    display: block;
    margin-bottom: 7px;
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700
  }

  input,
  select {
    width: 100%;
    height: 46px;
    padding: 0 14px;
    border: 1px solid var(--line);
    border-radius: 9px;
    outline: none;
    background: white
  }

  input:focus,
  select:focus {
    border-color: var(--green);
    box-shadow: 0 0 0 3px #0f5b3b1a
  }

  @media(max-width:650px) {
    .filters {
      grid-template-columns: 1fr
    }
  }
</style>
