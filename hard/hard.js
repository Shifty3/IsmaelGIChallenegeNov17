//create a function that contains a name and ssn
//make sure ssn is not accessible from outside hte closure 
//the name can be accessed anywhere
function createPatient(name, ssn){
    //the PII cannot be accessed directly
    const PII = {
        name: name,
        ssn: ssn
    };

    //How to publicly access the name
    return {
        getName: function(){
            return PII.name;
        },

        //public method to access the SSN (testing purpose)
    //this can be removed or restricted as per the requirements
        getSSN: function(){
        return PII.ssn;
    }
 };
}

//creating a patient object
const patient2 = createPatient('John', '123-45-6789');

//accessing properties
console.log(patient2.names);
console.log(patient2.ssn);
console.log(patient2.getName());
console.log(patient2.getSSN())