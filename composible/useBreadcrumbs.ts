import { useRoute } from 'vue-router'
import { useProductData } from '~/composible/useProductData'

export function useBreadcrumbs() {
  const route = useRoute()
  const { product } = useProductData()

  return computed(() => {
    const base = [{ label: 'Home', to: '/' }]
    const name = route.name?.toString() ?? 'Page'

    if (route.name === 'catalog') {
      return [...base, { label: 'Catalogue', to: route.fullPath }]
    }

    if (route.name === 'catalog-category') {
      const category = route.params.category?.toString() ?? 'Category'
      return [
        ...base,
        { label: 'Catalogue', to: '/catalog' },
        { label: category, to: route.fullPath },
      ]
    }

    if (route.name === 'catalog-category-product') {
      const category = route.params.category?.toString() ?? 'Category'
      const productName = product.value?.name ?? 'Product'
      return [
        ...base,
        { label: 'Catalogue', to: '/catalog' },
        { label: category, to: `/catalog/${category}` },
        { label: productName, to: route.fullPath },
      ]
    }

    if (route.name?.toString().includes('profile')) {
      return [...base, { label: 'Profile', to: route.fullPath }]
    }

    if (Array.isArray(route.meta?.breadcrumbs)) {
      return [...base, ...route.meta.breadcrumbs]
    }

    return [...base, { label: name, to: route.fullPath }]
  })
}
