const files = (require as any).context('.', true, /\.ts$/)
interface Config {
  [name: string]: any
}
const config: Config = {}

files.keys().forEach((key: string) => {
  if (key !== './index.ts') {
    const name = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    // 读取出文件中的default模块})
    config[name] = files(key).default
  }
})

export default config // 抛出一个国际化配置
