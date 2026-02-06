type PageSizeType = 'normal' | 'middle' | 'mini'

export const usePageStore = defineStore('page', {
  state: () => ({ pageSize: 'normal' as PageSizeType }),
})
