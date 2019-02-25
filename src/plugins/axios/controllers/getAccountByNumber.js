import db from '@/db';
import helpers from '../helpers';

export default function(accountNumber) {

    return db.collection('members').where('accountNumber', '==', accountNumber).get()
        .then(response => helpers.processData(response))

};