import data from '../../fixtures/example.json'
/*

export default function loadData(email, password) {
  let dataUser =  cy.fixture(data).then(function(user) {
    this.email = user.email;
    this.password = user.password;
    email = this.email
    password = this.password
    // JSON.stringify(user.password );
  });
  return dataUser;
}
*/

/**
 * 
import data from '../../fixtures/example.json'
export default function loadData(email, password) {
  cy.fixture(data).then(function(user) {
    email = user.email;
    password = user.password;
    // JSON.stringify(user.password );
  });
  return {email, password};
}
 */