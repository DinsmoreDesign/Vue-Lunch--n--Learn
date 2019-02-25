/*
 * .NET CONTROLLER RETURNS VALUES:
 *
 {
     Address: String,
     Phone: String,
     DoB: String,
     MemberInfoModel: {
         Accountnumber: String,
         PersonId: String,
         Name: String,
         SubAccounts: [
             {
                 AccountNumber: String,
                 SubAccountNumber: String,
                 SubAccountSerial: String,
                 SubAccountType: String,
                 SubAccountName: String,
                 SubAccountDescription: String,
                 ProductType: String,
                 IsConsumer: String,
                 Members: [
                     {
                         PersonId: Long,
                         PersonLinkType: Enum
                     }
                 ]
             }
         ],
         SelectedAccount: String
     }
 }
 *
 */

export default function(data) {

    return {

        accountNumber: data.accountNumber,
        name: `${data.member.lastName}, ${data.member.firstName} ${data.member.middleInitial}.`,
        address: `${data.address.street}, ${data.address.state}, ${data.address.state} ${data.address.zip}`,
        phone: data.member.phone,
        dob: data.member.dateOfBirth

    };

}; 