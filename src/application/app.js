import { NOT_LOADED } from './app.helpers'
import { reroute } from '../navigations/reroute'

/**
 *
 * @param {*} appName 应用名字
 * @param {*} loadApp 加载的应用
 * @param {*} activeWhen 当激活时会调用 loadApp
 * @param {*} customProps 自定义属性
 */
const apps = [] // 用来存放所有的应用

// 维护应用所有的状态 状态机
export function registerApplication(appName, loadApp, activeWhen, customProps) {
    apps.push({
        // 这里就将应用注册好了
        name: appName,
        loadApp,
        activeWhen,
        customProps,
        status: NOT_LOADED,
    })
    reroute() // 加载应用
}

export function getAppChanges() {}
