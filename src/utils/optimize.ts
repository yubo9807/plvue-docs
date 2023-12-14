/**
 * 节流
 * @param handler 
 * @param wait 
 * @returns 
 */
export function throttle<A extends any[], R>(handler: (...args: A) => R, wait: number) {
	let lastTime = 0;
	return function (...args: A) {
		let nowTime = new Date().getTime();
		if (nowTime - lastTime > wait) {
			handler.apply(this, ...args);
			lastTime = nowTime;
		}
	}
}
