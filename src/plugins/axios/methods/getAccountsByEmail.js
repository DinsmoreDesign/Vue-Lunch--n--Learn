import db from '@/db';
import processData from './processData';

export default function(email) {

    return db.collection('members').where('member.email', '==', email).get()
        .then(response => processData(response))

};