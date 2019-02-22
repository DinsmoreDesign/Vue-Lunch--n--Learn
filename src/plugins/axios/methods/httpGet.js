import helpers from '../helpers';
import controllers from '../controllers';

export default function(route) {

    if (route === '/members') return controllers.getMembers();

    const validRoute = helpers.testValidRoute(route, ['/member/accountNumber', '/member/email']);
    const searchTerm = route.substring(route.lastIndexOf("/") + 1, route.length);

    if (validRoute === 'accountNumber') return controllers.getAccountByNumber(searchTerm);
    if (validRoute === 'email') return controllers.getAccountByEmail(searchTerm);

};