import {titleCase} from './index.js';
import chai from 'chai';

const {expect, should, assert} = chai;

describe('GIVEN titleCase function', () => {
    describe('GIVEN an empty title and no minorWords', () => {
        it('SHOULD return an empty string', () => {
            expect(titleCase('')).to.equal('');
        });
    });

    describe(`GIVEN a title 'a clash of KINGS' and minor words 'a an the of'`, () => {
        it('SHOULD return the correct title casing', () => {
            expect(titleCase('a clash of KINGS', 'a an the of')).to.equal('A Clash of Kings');
        });
    });

    describe(`GIVEN a title of 'the quick brown fox'`, () => {
        it('SHOULD return the correct title casing', () => {
            expect(titleCase('the quick brown fox')).to.equal('The Quick Brown Fox');
        })
    })

    describe(`GIVEN a title of 'the quick brown fox'`, () => {
        it('SHOULD return the correct title casing', () => {
            expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).to.equal('The Wind in the Willows');
        })
    })
});
