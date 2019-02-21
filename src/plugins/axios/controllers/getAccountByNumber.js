import db from '@/db';
import processData from '@/plugins/axios/methods/processData';

export default function(accountNumber) {

    return db.collection('members').where('accountNumber', '==', accountNumber).get()
        .then(response => processData(response))

};