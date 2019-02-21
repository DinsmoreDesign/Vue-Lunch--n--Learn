import controllers from './controllers';
import methods from './methods';

export default {

    get(route) {

        if (route === '/members') return methods.getMembers();

        const validRoute = methods.testValidRoute(route, ['/member/accountNumber', '/member/email']);
        const searchTerm = route.substring(route.lastIndexOf("/") + 1, route.length);

        if (validRoute === 'accountNumber') return methods.getAccountByNumber(searchTerm);
        if (validRoute === 'email') return methods.getAccountByEmail(searchTerm);

    },
    post(route, params) {

        const id = methods.testValidRoute(route, ['/member/update'], true);

        if (id) return methods.updateMember(id, params);

    }

}