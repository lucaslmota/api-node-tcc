/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('Teste GET', () => {
    it('deve receber os jogos da api', done => {
        chai.request(app)
            .get('/projects')
            .end((err, res) => {
                res.should.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('Teste POST ', () => {
    it('deve criar um autor', done => {
        const game = {
            title: 'teste',
            owner: 'Lucas teste',
        };
        chai.request(app)
            .post('/projects')
            .type('json')
            .send(game)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done(err);
                }
                res.should.have.status(200);

                done();
            });
    }); // <= AQUI NO FINAL
});

describe('Teste GET/:id', () => {
    it('Teste buscando por ids', done => {
        const id = '917bd99c-1bb4-40d4-bf38-858a718c1118';
        chai.request(app)
            .get(`/projects/${id}`)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                    done(err);
                }
                res.should.have.status(200);
                done();
            });
    });
});
