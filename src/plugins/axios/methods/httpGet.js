import helpers from '../helpers';
import controllers from '../controllers';
import getRoutes from '../routes/getRoutes';
import transforms from '../transforms';

export default function(route) {

    // Test that route is valid and returns a string
    const controller = helpers.testValidRoute(route, getRoutes);

    // If the controller is returned as members, just get all the data
    if (controller === 'members') {

        return controllers.getMembers();

    };

    // If we're doing a search, or window.searchTerm doesn't exist, set it:
    if (controller === 'search' || !window.searchTerm) {

        window.searchTerm = route.substring(route.lastIndexOf("/") + 1, route.length);

    };

    // If window.memberData doesn't exist, set it
    async function getData(data) {

        let returnData = null;

        if (helpers.testEmail(data)) {

            returnData = await controllers.getAccountByEmail(data);
            window.memberData = returnData;

        } else {

            returnData = await controllers.getAccountByNumber(data);
            window.memberData = returnData;

        }

        return returnData;

    };

    // Mutate our returned data according to the route requested
    async function sendData() {

        if (controller === 'member') return [ await getData(route.substring(route.lastIndexOf("/") + 1, route.length)) ];
        if (controller === 'search') return transforms.searchResults(await getData(window.searchTerm));
        if (controller === 'accounts') return transforms.memberAccounts(window.memberData ? window.memberData : await getData(window.searchTerm));
        if (controller === 'details') return transforms.memberDetails(window.memberData ? window.memberData : await getData(window.searchTerm));

        throw 500;

    };
    
    return sendData();

};