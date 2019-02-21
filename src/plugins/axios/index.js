import controllers from './controllers';
import methods from './methods';

export default {

    get(route) {

        if (route === '/members') return controllers.getMembers();

        const validRoute = methods.testValidRoute(route, ['/member/accountNumber', '/member/email']);
        const searchTerm = route.substring(route.lastIndexOf("/") + 1, route.length);

        if (validRoute === 'accountNumber') return controllers.getAccountByNumber(searchTerm);
        if (validRoute === 'email') return controllers.getAccountByEmail(searchTerm);

    },
    post(route, params) {

        const id = methods.testValidRoute(route, ['/member/update'], true);

        if (id) return controllers.updateMember(id, params);

    }

}