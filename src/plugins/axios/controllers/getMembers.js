import db from '@/db';
import processData from '@/plugins/axios/methods/processData';

export default function() {

    return db.collection('members').get()
        .then(response => processData(response))

};