import helpers from '../helpers';
import updateMember from '../controllers/updateMember';

export default function(route, params) {

    const id = helpers.testValidRoute(route, ['/member/update'], true);

    if (id) return updateMember(id, params);

};