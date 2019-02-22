export default function(inputRoute, matchingRoutes, returnInput) {

    for (let route of matchingRoutes) {

        const returnRoute = returnInput ? inputRoute : route;

        if (inputRoute.startsWith(route)) return returnRoute.substring(returnRoute.lastIndexOf("/") + 1, returnRoute.length);

    }

    throw 'Request failed with status code 404.';

};