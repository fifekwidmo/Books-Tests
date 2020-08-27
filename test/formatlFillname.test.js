const formatFullname = require('../utils/formatFullname.js');
const expect = require('chai').expect;
describe('FormatFullname', () => {
	it('should return an error if "fullName" arg is empty', () => {
		expect(formatFullname([])).to.equal('Error');
	})
	it('should return an error if "fullName" is not a string', () => {
		expect(formatFullname(12)).to.equal('Error');
		expect(formatFullname({})).to.equal('Error');
		expect(formatFullname([])).to.equal('Error');
		expect(formatFullname(function () { })).to.equal('Error');
	})
	it('should return an error if "fullName" arg has more than 2 words', () => {
		expect(formatFullname('John')).to.equal('Error');
		expect(formatFullname('John Bon Covid')).to.equal('Error');
	})
	it('should return an correct FullName', () => {
		expect(formatFullname('john bon')).to.equal('John Bon');
		expect(formatFullname('jOHn BoN')).to.equal('John Bon');
	})
})