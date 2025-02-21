type GenericFunction = (...args: any[]) => any;

export const throttle = <F extends GenericFunction>(func: F, wait: number): ((...args: Parameters<F>) => void) => {
    let timer: number | null = null;
    let queue: Parameters<F> | null = null;

    return function throttled(...args: Parameters<F>): void {
        if (timer === null) {
            timer = setTimeout(() => {
                if (timer) clearTimeout(timer);
                timer = null;

                if (queue !== null) {
                    func(...queue);
                    queue = null;
                }
            }, wait);

            func(...args);
        } else {
            queue = args;
        }
    };
};