/*
 * .NET CONTROLLER RETURNS VALUES:
 *
 {
     UnrollReason: String
     EnrollMemberViewModel: {
         EnrollmentStatus: Int,
         DisclosureAccepted: Boolean,
         EnrollmentDate: Date,
         UpdateDate: Date,
         CancelationDate: Date,
         LeadSavingsDate: Date,
         NextStatementDate: Date,
         Email: String,
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
     },
     CreateUser: String,
     UpdateUser: String,
     HistoryLink: String

 }
 *
 */

export default function(data) {

    return {

        accountNumber: data.accountNumber,
        name: `${data.member.lastName}, ${data.member.firstName} ${data.member.middleInitial}.`,
        enrolled: data.estatements.enrolled,
        disclosureAccepted: data.estatements.disclosureAccepted,
        enrollmentDate: data.estatements.dates.enrollment,
        updateDate: data.estatements.dates.updated,
        cancellationDate: data.estatements.dates.canceled,
        leadSavingsDate: data.estatements.dates.leadSavings,
        nextStatement: data.estatements.dates.nextStatement,
        email: data.member.email,
        unenrollReason: data.estatements.unenrollReason

    };

};