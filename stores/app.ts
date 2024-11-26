import type { WebConfig } from '~/configs/web-configs'

export const useAppStore = defineStore('app', () => {
  /** 网站配置 */
  const webConfig = ref<WebConfig>({} as WebConfig)

  return {
    webConfig,
  }
})