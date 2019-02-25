import db from '@/db'; 

export default function(name) {

    let account = null;
    let id = null;

    if (name === 'john') {

        account = {
            "accountNumber": "0000000001",
            "address": {  
                "city": "Phoenix",
                "state": "AZ",
                "street": "123 E Sesame St",
                "zip": 12345
            },
            "estatements": {
                "dates": {  
                    "canceled": "",
                    "enrollment": "01/01/1990",
                    "leadSavings": "01/01/1995",
                    "nextStatement": "03/01/2019",
                    "updated": "01/01/2000"
                },
                "disclosureAccepted": true,
                "eligible": true,
                "enrolled": true,
                "enrollmentStarted": true,
                "unenrollReason": ""
            },
            "member":{  
                "dateOfBirth": "01/01/1950",
                "email": "john.doe@test.com",
                "firstName": "John",
                "lastName": "Doe",
                "middleInitial": "A",
                "phone": "(602) 123-4567"
            }
        }
        id = "CVgHacm4em36suwolIZk"

    }

    if (name === 'jane') {

        account = {
            "accountNumber": "0000000002",
            "address": {  
                "city": "Scottsdale",
                "state": "AZ",
                "street": "321 W Sesame St",
                "zip": 54321
            },
            "estatements": {
                "dates": {  
                    "canceled": "",
                    "enrollment": "01/01/1992",
                    "leadSavings": "01/01/1998",
                    "nextStatement": "03/01/2019",
                    "updated": "01/01/2002"
                },
                "disclosureAccepted": true,
                "eligible": true,
                "enrolled": true,
                "enrollmentStarted": true,
                "unenrollReason": ""
            },
            "member":{  
                "dateOfBirth": "01/01/1974",
                "email": "jane.doe@test.com",
                "firstName": "Jane",
                "lastName": "Doe",
                "middleInitial": "A",
                "phone": "(602) 765-4321"
            }
        };
        id = "s1HGQ3Izf2hET01Db9Bv";

    }

    return db.collection('members').doc(id).update(account);

};