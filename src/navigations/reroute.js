import { started } from '../start'

// 核心应用处理方法
export function reroute() {
    // 需要获取要加载的应用
    // 需要获取要被挂载的应用
    // 哪些应用需要被卸载

    if (started) {
        // app装载 浏览器实际渲染执行
        return performAppChanges() // 根据路径来装载应用
    } else {
        // 注册应用时 需要预先加载
        return loadApps() // 预加载应用
    }

    async function loadApps() {}

    async function performAppChanges() {}
}
