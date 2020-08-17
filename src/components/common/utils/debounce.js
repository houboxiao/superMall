export function
//防抖动函数
//返回值为函数
debounce(func, delay){
    let timer = null;
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}