export default function(querySnapshot) {

    if (!querySnapshot.empty) {

        let results = [];

        querySnapshot.forEach(memberQuery => {

            let member = memberQuery.data();
                member.id = memberQuery.id;
            window.documentId = memberQuery.id;

            results.push(member)

        });

        if (results.length > 1) return results;
        return results[0];

    }
    
    throw('No account found. Please try again.');

};