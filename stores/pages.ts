import { defineStore } from "pinia";

export const usePageStore = defineStore('page', {
  state: () => ({
    pageNow: 0,
    pageAdminNow: 0,
    oldScrollPosition: 0,
    pageType: 'normal' as 'normal' | 'middle' | 'mini',
    token: '',
    admin: '',
  }),
});