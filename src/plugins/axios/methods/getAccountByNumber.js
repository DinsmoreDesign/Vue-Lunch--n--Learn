import db from '@/db';
import processData from './processData';

export default function(accountNumber) {

    return db.collection('members').where('accountNumber', '==', accountNumber).get()
        .then(response => processData(response))

};