const chai = require('chai');
const chaiHttp = require('chai-http');
const topSpotsData = require('../server/data.json');
const app = require('../server/app');

const expect = chai.expect;
chai.use(chaiHttp);

describe("server module", function() {
  this.timeout(6500);
  it("GET / responds with a 200 response code", (done) => {
		chai.request(app)
  		.get('/')
  		.end((err, res) => {
  			expect(res).to.have.status(200);
  			expect(err).to.be.null;
  			expect(res).to.be.html;
  			done();
  		})
	});

  it("GET /data responds with all top spots", (done) => {
	  chai.request(app)
      .get('/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res.body).to.deep.equal(topSpotsData);
        done();
    })
	});
});
