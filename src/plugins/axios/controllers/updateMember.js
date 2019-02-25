import db from '@/db';

export default function(id, params) {

    return db.collection('members').doc(id).update(params);

};