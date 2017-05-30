import filter from './Filter';
import FilterOptions from './FilterOptions';
import assert from 'assert';
const deals = require('./../../public/deals.json').deals;

const fiftyTwoMegaBites = 53248;
const fiveGigaBites = 5242880;

it('GIVEN results WHEN filtering by Broadband THEN show the 3 broadband only deals', () => {
    let filteredDeals = filter(deals, new FilterOptions(true, false, false, -1));
    assert.equal(filteredDeals.length, 3);
});

it('GIVEN results WHEN filtering by Broadband AND Tv THEN show the 2 deals for broadbandand Tv only', () => {
    let filteredDeals = filter(deals, new FilterOptions(true, true, false, -1));
    assert.equal(filteredDeals.length, 2);
});

it('GIVEN results WHEN filtering by Broadband AND Mobile THEN show the single deal for broadband and Mobile only', () => {
    let filteredDeals = filter(deals, new FilterOptions(true, false, true, -1));
    assert.deepEqual(filteredDeals[0], deals[4]);
});

it('GIVEN results WHEN filtering by Mobile, Broadband, TV selected AND Mobile Data 5GBTHEN 0 results', () => {
    let filteredDeals = filter(deals, new FilterOptions(true, true, true, fiveGigaBites));
    assert.equal(filteredDeals.length, 0);
});

it('GIVEN results WHEN filtering by Broadband AND Speed 52MB THEN 1 result present', () => {
    let filteredDeals = filter(deals, new FilterOptions(true, false, false, fiftyTwoMegaBites));
    assert.equal(filteredDeals.length, 1);
});