import Business from './Business'

describe('Business Logic', () => {

    it('makeStepsDiff should throw TypeError exception having non-array args', () => {
        // Arrange
        let sut = new Business();

        expect(() => sut.makeStepsDiff())
            .toThrowError(TypeError());
        expect(() => sut.makeStepsDiff(1, '[]'))
            .toThrowError(TypeError());
        expect(() => sut.makeStepsDiff({}, []))
            .toThrowError(TypeError());
        expect(() => sut.makeStepsDiff([], {}))
            .toThrowError(TypeError());
    });

    it('makeStepsDiff should throw RangeError exception having different length on both arrays', () => {
        // Arrange
        let sut = new Business();

        expect(() => sut.makeStepsDiff([], [1]))
            .toThrowError(RangeError());
        expect(() => sut.makeStepsDiff([1], []))
            .toThrowError(RangeError());
    });

    it('makeStepsDiff returns no diff for empty arrays', () => {
        // Arrange
        let sut = new Business();

        expect(sut.makeStepsDiff([], []))
            .toEqual(Business.noDiff);
    });

    it('makeStepsDiff returns no diff for arrays with the same items', () => {
        // Arrange
        let sut = new Business();

        expect(sut.makeStepsDiff(
            [1, '2', null, 3],
            [1, '2', null, 3])
            ).toEqual(Business.noDiff);
    });

    it('makeStepsDiff returns diff. Happy path!', () => {
        // Arrange
        let sut = new Business(3);

        expect(sut.makeStepsDiff(
            [1, '2', 3],
            [1, '2', 4])
            ).toEqual({
                index: 2,
                col: 3,
                row: 1,
            });
        expect(sut.makeStepsDiff(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [1, 2, 3, 4, 0, 6, 7, 8, 9])
            ).toEqual({
                index: 4,
                col: 2,
                row: 2,
            });
    });
});