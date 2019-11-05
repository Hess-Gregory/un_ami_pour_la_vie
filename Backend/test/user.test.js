const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const faker = require('faker');
const chai = require('chai');
const server = require('../server');

const expect = chai.expect;
chai.config.includeStack=true;

after((done)=>{
   process.exit();
   done();
});

 describe('#User APIs', () => {
     let user = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
     };
    describe('#POST /api/auth/register', () => {
        it('devrait créer un nouvel utilisateur', (done) => {
            request(server)
                .post('/api/auth/register')
                .send(user)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.token).to.not.equal('');
                    expect(res.body.token).to.not.equal(undefined);
                    expect(res.body.username).to.equal(user.username);
                    expect(res.body.email).to.equal(user.email);
                    expect(res.body.password).to.equal(undefined);//mot de passe doit être supprimé
                    user=res.body;
                    user.token=res.body.token;
                    done();
                })
        })
    });

    describe('#GET /api/users/:id', () => {
        it('devrait obtenir les détails de l\'utilisateur',(done)=>{
            request(server)
                .get(`/api/users/${user.id}`)
                .set({Authorization:`Bearer ${user.token}`})
                .expect(httpStatus.OK)
                .then((res)=>{
                    expect(res.body.email).to.equal(user.email);
                    expect(res.body.username).to.equal(user.username);
                    expect(res.body.isActive).to.equal(user.isActive);
                    expect(res.body.role).to.equal(user.role);
                    expect(res.body.password).to.equal(undefined);//mot de passe doit être supprimé
                    done();
                }).catch(done)
        });

        it('devrait signaler une erreur avec un message - Non trouvé, lorsque l\'utilisateur n\'existe pas', (done) => {
            request(server)
                .get('/api/users/0')
                .set({ Authorization: `Bearer ${user.token}` })
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Un tel utilisateur n\'existe pas!');
                    done();
                })
                .catch(done);
        });
    });

    describe('#PUT /api/users/:id',() => {
        it('l\'utilisateur devrait-il être mis à jour',(done)=>{
            request(server)
                .put(`/api/users/${user.id}`)
                .set({ Authorization: `Bearer ${user.token}` })
                .send(user)
                .expect(httpStatus.OK)
                .then((res)=>{
                    expect(res.body.message).to.equal('Mis à jour avec succés');
                    done();
                })
                .catch(done);
        })
    });

    describe('# GET /api/users/',()=>{
        it('devrait obtenir tous les utilisateurs',(done)=>{
            request(server)
                .get('/api/users/')
                .set({Authorization:`Bearer ${user.token}`})
                .expect(httpStatus.OK)
                .then((res)=>{
                    expect(res.body).to.be.an('array');
                    done();
                })
        })
    });

    describe('#DELETE /api/users/:id',() => {
        it('devrait supprimer l\'utilisateur',(done)=>{
            request(server)
                .delete(`/api/users/${user.id}`)
                .set({ Authorization: `Bearer ${user.token}` })
                .expect(httpStatus.OK)
                .then((res)=>{
                    expect(res.body.message).to.equal('Utilisateur supprimé');
                    done();
                })
                .catch(done);
        })
    })
});
