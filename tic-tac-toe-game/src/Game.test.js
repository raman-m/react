import { makeStepsDiff, NoDiff } from './Game'

describe('Game component', () => {
    it('makeStepsDiff returns no diff for empty arrays', () => {
        expect(makeStepsDiff([], []))
            .toEqual(NoDiff);
    });
});