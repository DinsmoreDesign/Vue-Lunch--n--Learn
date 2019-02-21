import db from '@/db';
import processData from '@/plugins/axios/methods/processData';

export default function(email) {

    return db.collection('members').where('member.email', '==', email).get()
        .then(response => processData(response))

};