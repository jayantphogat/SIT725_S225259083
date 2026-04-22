const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');
const { calculateDiscount } = require('../utils/calculator');

describe('REST API Tests', () => {

    it('should return all products', (done) => {
        request(app)
            .get('/api/products')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(3);
                done();
            });
    });

});

describe('Calculation Function Tests', () => {

    it('should calculate discounted price correctly', () => {
        const result = calculateDiscount(100, 10);
        expect(result).to.equal(90);
    });

    it('should return same price when discount is 0', () => {
        const result = calculateDiscount(100, 0);
        expect(result).to.equal(100);
    });

    it('should throw error for negative price', () => {
        expect(() => calculateDiscount(-100, 10)).to.throw("Price and discount cannot be negative");
    });

    it('should throw error when discount is more than 100', () => {
        expect(() => calculateDiscount(100, 120)).to.throw("Discount cannot be more than 100");
    });

});