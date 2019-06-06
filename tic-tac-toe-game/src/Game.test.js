import { makeStepsDiff, NoDiff, MaxNo } from './Game'

describe('Game component', () => {
    it('makeStepsDiff should throw TypeError exception having non-array args', () => {
        expect(() => makeStepsDiff())
            .toThrowError(TypeError());
        expect(() => makeStepsDiff(1, '[]'))
            .toThrowError(TypeError());
        expect(() => makeStepsDiff({}, []))
            .toThrowError(TypeError());
        expect(() => makeStepsDiff([], {}))
            .toThrowError(TypeError());
    });

    it('makeStepsDiff should throw RangeError exception having different length on both arrays', () => {
        expect(() => makeStepsDiff([], [1]))
            .toThrowError(RangeError());
        expect(() => makeStepsDiff([1], []))
            .toThrowError(RangeError());
    });

    it('makeStepsDiff returns no diff for empty arrays', () => {
        expect(makeStepsDiff([], []))
            .toEqual(NoDiff);
    });

    it('makeStepsDiff returns no diff for arrays with the same items', () => {
        expect(makeStepsDiff(
            [1, '2', null, 3],
            [1, '2', null, 3])
            ).toEqual(NoDiff);
    });

    it('makeStepsDiff returns diff. Happy path!', () => {
        expect(makeStepsDiff(
            [1, '2', 3],
            [1, '2', 4])
            ).toEqual({
                index: 2,
                col: 3,
                row: 1,
            });
        expect(makeStepsDiff(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 0, 6, 7, 8, 9])
            ).toEqual({
                index: 4,
                col: 2,
                row: 2,
            });
    });
});