/**
  * Creates a range generator.
  *
  * @param start
  * @param stop(optional) default value to param start
  * @param step(optional) default value will be 1 or -1
  * @example
  *     range(0, 5, 2) -> 0, 2, 4
  *     range(5) -> 0, 1, 2, 3, 4
  *     range(1, 3) -> 1, 2
  *     range(-1, -4) -> -1, -2, -3
  *     range(-4) -> 0, -1, -2, -3
  */
export function* range(start: number, stop: number = null, step: number = null): Generator<number> {
    if(stop === null) {
        stop = start
        start = 0
    }

    // For cases like (0) or (1, 1), etc
    if(Math.abs(start - stop) === 0){
        yield start;
        return;
    }

    step = step === null ? (start < stop ? 1 : -1) : step;
    // For cases like (0, -4, 1)
    step = step > 0 && start > stop ? -step : step;
    // For cases like (0, 4, -1)
    step = step < 0 && start < stop ? Math.abs(step) : step;
    let len = Math.max(Math.ceil(Math.abs(stop - start) / (Math.abs(step) || 1)), 0);

    while (len--) {
        yield start;
        start += step
    }
}


