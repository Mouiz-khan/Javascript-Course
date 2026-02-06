let student = {
     id : 1,
     personalInfo : {
        firstName : "Mouiz",
        lastNmae : 'Khan',
        contactInfo : {
            email : "mouizkhan7@gmail.com",
            phone : "123-456-789"
        }
     },
     addressInfo : {
        address : "Landhi | Karachi"
     }

}

console.log(student.personalInfo.firstName);
console.log(student.addressInfo.address);
console.log(student.personalInfo.contactInfo.phone);
