import helpers from '../helpers';
import updateMember from '../controllers/updateMember';

export default function(route, params) {

    if (route === '/member/update' && window.memberData.id) {

        let postObject = null;

        // If we're updating the enrolled data:
        if (params.enrolled === true || params.enrolled === false) {

            postObject = {

                'estatements.enrolled': params.enrolled

            }

            if(params.enrolled === false) {

                postObject['estatements.dates.canceled'] = helpers.getToday();

            }
        
        // If we just submitted changes:
        } else {

            postObject = {

                'estatements.dates.updated': helpers.getToday(),
                'estatements.unenrollReason': params.unenrollReason,
                'member.email': params.email

            }

        }

        return updateMember(window.memberData.id, postObject);

    } else if (!window.memberData.id) {

        throw 'Invalid session. Try again.';

    }

    throw 'Request failed with status code 404.';

};