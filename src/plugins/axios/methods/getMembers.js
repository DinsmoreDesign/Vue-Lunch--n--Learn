import db from '@/db';
import processData from './processData';

export default function() {

    return db.collection('members').get()
        .then(response => processData(response))

};