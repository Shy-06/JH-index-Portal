import { defineStore } from 'pinia';

export type PageType = "normal" | "middle" | "mini";

export const usePageStore = defineStore('page', {
  state: () => ({
    currentPageNo: 0,
    pageType: 'normal' as PageType
  })
});
