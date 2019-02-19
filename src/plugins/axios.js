import db from '@/db';

export default {

    get(route) {

        if (route === '/members') return this.getMembers();

        const validRoute = this.testValidRoute(route, ['/member/accountNumber', '/member/email']);
        const searchTerm = route.substring(route.lastIndexOf("/") + 1, route.length);

        if (validRoute === 'accountNumber') return this.getAccountByNumber(searchTerm);
        if (validRoute === 'email') return this.getAccountByEmail(searchTerm);

    },
    post(route, params) {

        const id = this.testValidRoute(route, ['/member/update'], true);

        if (id) return this.updateMember(id, params);

    },
    testValidRoute(inputRoute, matchingRoutes, returnInput) {

        for (let route of matchingRoutes) {

            const returnRoute = returnInput ? inputRoute : route;

            if (inputRoute.startsWith(route)) return returnRoute.substring(returnRoute.lastIndexOf("/") + 1, returnRoute.length);

        }

        throw 'Request failed with status code 404.';

    },
    processData(querySnapshot) {

        if (!querySnapshot.empty) {

            let results = [];

            querySnapshot.forEach(memberQuery => {

                let member = memberQuery.data();
                    member.id = memberQuery.id;

                results.push(member)

            });

            if (results.length > 1) return results;
            return results[0];

        }
        
        throw('No account found. Please try again.');

    },
    updateMember(id, params) {

        return db.collection('members').doc(id).update(params);

    },
    getMembers() {

        return db.collection('members').get()
            .then(response => this.processData(response))

    },
    getAccountByNumber(accountNumber) {

        return db.collection('members').where('accountNumber', '==', accountNumber).get()
            .then(response => this.processData(response))

    },
    getAccountByEmail(email) {

        return db.collection('members').where('member.email', '==', email).get()
            .then(response => this.processData(response))

    }

}