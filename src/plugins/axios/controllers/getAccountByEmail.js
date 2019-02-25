import db from '@/db';
import helpers from '../helpers';

export default function(email) {

    return db.collection('members').where('member.email', '==', email).get()
        .then(response => helpers.processData(response))

};