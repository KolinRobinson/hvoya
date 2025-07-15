export default defineNuxtRouteMiddleware(to => {
  const categoryStore = useCategoryStore()
  const productStore = useProductStore()

  // catalog/[category]
  if (to.name === 'catalog-category' && typeof to.params.category === 'string') {
    const category = categoryStore.categoryMeta(to.params.category)
    to.meta.breadcrumbs = [
      { label: 'Catalogue', to: '/catalog' }, // <-- ти вже визначив це в index.vue
      { label: category?.name ?? 'Category', to: to.fullPath },
    ]
  }

  // catalog/[category]/[product]
  if (
    to.name === 'catalog-category-product' &&
    typeof to.params.category === 'string' &&
    typeof to.params.product === 'string'
  ) {
    const category = categoryStore.categoryMeta(to.params.category)
    const product = productStore.productMeta(to.params.product)

    console.log(category)

    to.meta.breadcrumbs = [
      { label: 'Catalogue', to: '/catalog' },
      { label: category?.name ?? 'Category', to: `/catalog/${to.params.category}` },
      { label: product?.name ?? 'Product', to: to.fullPath },
    ]
  }
})
