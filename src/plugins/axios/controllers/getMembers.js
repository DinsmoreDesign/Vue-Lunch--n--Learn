import db from '@/db';
import helpers from '../helpers';

export default function() {

    return db.collection('members').get()
        .then(response => helpers.processData(response))

};