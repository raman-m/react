import { makeStepsDiff, NoDiff } from './Game'

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

    it('makeStepsDiff returns no diff for empty arrays', () => {
        expect(makeStepsDiff([], []))
            .toEqual(NoDiff);
    });
});