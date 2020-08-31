// 描述应用的整个状态
export const NOT_LOADED = 'NOT_LOADED' // 应用初始状态
export const LOADING_SOUTCE_CODE = 'LOADING_SOUTCE_CODE' // 加载资源
export const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED' // 还没有调用bootstrap方法
export const BOOTSTRAPPING = 'BOOTSTRAPPING' // 启动中
export const NOT_MOUNTED = 'NOT_MOUNTED' // 没有调用mount方法
export const MOUNTING = 'MOUNTING' // 正在挂载中
export const MOUNTED = 'MOUNTED' //挂载完毕
export const UPDATING = 'UPDATING' // 更新中
export const UNMOUNTING = 'UNMOUNTING' // 解除挂载
export const UNLOADING = 'UNLOADING' // 完全卸载中
export const LOAD_ERR = 'LOAD_ERR'
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN'

// 当前应用是否被激活
export function isActive(app) {
    return app.status === MOUNTED
}

// 当前这个应用是否要被激活
export function shouldBeActive(app) {
    return app.activeWhen(window.location)
}
