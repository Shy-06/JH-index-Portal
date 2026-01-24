import { defineStore } from 'pinia';

export type PageType = "normal" | "middle" | "mini";

export const usePageStore = defineStore('page', {
  state: () => ({
    pageNow: 0,
    pageAdminNow: 0,
    oldScrollPosition: 0,
    pageType: 'normal' as PageType
  })
});
