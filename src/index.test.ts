import { range } from './index';


const toList = (gen: Iterator<number>): number[] => {
    const list = [];
    // @ts-ignore
    for(const num of gen) {
        list.push(num);
    }

    return list
}

test('should provide 0 when range(0)', () => {
    const gen = range(0);
    expect(toList(gen)).toEqual([0])
});

test('should provide 0 when range(1)', () => {
    const gen = range(1);
    expect(toList(gen)).toEqual([0])
});

test('should provide 2 when range(2, 2)', () => {
    const gen = range(2, 2);
    expect(toList(gen)).toEqual([2])
});

test('should provide 0, -1 when range(-2)', () => {
    const gen = range(-2);
    expect(toList(gen)).toEqual([0, -1])
});

test('should provide 0, 1 when range(2)', () => {
    const gen = range(2);
    expect(toList(gen)).toEqual([0, 1])
});

test('should provide 0, 1, 2, 3 when range(4)', () => {
    const gen = range(4);
    expect(toList(gen)).toEqual([0, 1, 2, 3])
});

test('should provide 2, 3, 4 when range(2, 5)', () => {
    const gen = range(2, 5);
    expect(toList(gen)).toEqual([2, 3, 4])
});

test('should provide 0, 2, 4, 6, 8 when range(0, 10, 2)', () => {
    const gen = range(0, 10, 2);
    expect(toList(gen)).toEqual([0, 2, 4, 6, 8])
});

test('should provide 2, 2, 2 when range(2, 5, 0)', () => {
    const gen = range(2, 5, 0);
    expect(toList(gen)).toEqual([2, 2, 2])
});

test('should provide 0, -1, -2, -3 when range(-4)', () => {
    expect(toList(range(-4))).toEqual([0, -1, -2, -3]);
});

test('should provide 0, -1, -2, -3 when range(0, -4)', () => {
    expect(toList(range(0, -4))).toEqual([0, -1, -2, -3]);
})

test('should provide 0, -1, -2, -3 when range(0, -4, 1)', () => {
    expect(toList(range(0, -4, 1))).toEqual([0, -1, -2, -3]);
})

test('should provide 0, 1, 2, 3 when range(0, 4, -1)', () => {
    expect(toList(range(0, 4, -1))).toEqual([0, 1, 2, 3]);
})

test('should provide -3, -4, -5 when range(-3, -6)', () => {
    expect(toList(range(-3, -6))).toEqual([-3, -4, -5]);
})

test('should provide -3, -3, -3 when range(-3, -6, 0)', () => {
    expect(toList(range(-3, -6, 0))).toEqual([-3, -3, -3]);
})



