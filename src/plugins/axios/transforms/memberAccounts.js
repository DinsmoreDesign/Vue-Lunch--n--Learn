/*
 * .NET CONTROLLER RETURNS VALUES:
 *
 {
     AccountsList: [
         {
             AccountNumber: String,
             Email: String,
             Description: String,
             Eligible: Boolean,
             Enrolled: Boolean,
             EnrollmentStarted: Boolean
         }
     ]
 }
 *
 */

export default function(data) {

    const accounts = data.constructor === Array ? data : [ data ];
    let newData = [];
    
    for (let account of accounts) {

        newData.push({

            accountNumber: data.accountNumber,
            email: data.member.email,
            eligible: data.estatements.eligible,
            disclosureAccepted: data.estatements.disclosureAccepted,
            enrollmentStarted: data.estatements.enrollmentStarted

        });

    }

    return newData;

}; 