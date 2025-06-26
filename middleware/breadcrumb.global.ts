export default defineNuxtRouteMiddleware(to => {
  const categoryStore = useCategoryStore()
  const productStore = useProductStore()

  // /catalog/[id]
  if (to.name === 'catalog-id' && typeof to.params.id === 'string') {
    const category = categoryStore.categoryMeta(to.params.id)
    to.meta.breadcrumbs = category?.name ?? 'Каталог'
  }

  // /catalog/[id]/[productId]
  if (to.name === 'catalog-id-productId' && typeof to.params.productId === 'string') {
    to.meta.breadcrumbs = 'Товар'
  }
})
