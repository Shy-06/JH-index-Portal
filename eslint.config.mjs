import { createConfigForNuxt } from '@nuxt/eslint-config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default createConfigForNuxt({
  features: { tooling: true },
})
  .append({
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  })
  .append(eslintConfigPrettier)
