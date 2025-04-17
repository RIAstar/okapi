import { isSemver } from './semver';


describe('semver', () => {

    describe('isSemver', () => {

        it(`returns false for stringy strings`, () => {
            expect(isSemver('gobbledygook')).toBe(false);
        });

    });

});
