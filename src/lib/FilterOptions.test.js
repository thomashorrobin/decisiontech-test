import FilterOptions from './FilterOptions';
import assert from 'assert';

it('filter option with filters in it should not return true from nothingFiltered()', () => {
    let filterOptions = new FilterOptions(true, true, false, 100);
    assert.equal(filterOptions.nothingFiltered(), false);
});

it('filter option with filters in it should return true from nothingFiltered()', () => {
    let filterOptions = new FilterOptions(false, false, false, -1);
    assert.equal(filterOptions.nothingFiltered(), true);
});

it('filter option no filters but a minimum speed should return false from nothingFiltered()', () => {
    let filterOptions = new FilterOptions(false, false, false, 10);
    assert.equal(filterOptions.nothingFiltered(), false);
});

it('when speed == -1 speedNotFiltered() should return true', () => {
    let filterOptions = new FilterOptions(true, false, false, -1);
    assert.equal(filterOptions.speedNotFiltered(), true);
});

it('when speed anything other than: -1 speedNotFiltered() should return false', () => {
    let filterOptions = new FilterOptions(false, true, false, 231);
    assert.equal(filterOptions.speedNotFiltered(), false);
});