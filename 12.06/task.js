// FIRST TASK: REPLICATE .MAP() METHOD WITH .FOREACH()


function replicateMapMethod() {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}
    ]

    /////////////////  MAP() METHOD /////////////////////

    // const personAgeArr = personDetailsArr.map((person) => {
    //     return person.age;
    // })

    // console.log(personAgeArr);



    ////////////// SAME WITH FOREACH() METHOD ////////////

    const personAgeArr = [];

    personDetailsArr.forEach((person) => {
        return personAgeArr.push(person.age);
    })

    console.log(personAgeArr);

}

replicateMapMethod();




// SECOND TASK: REPLICATE .FILTER() METHOD WITH .FOREACH()

function replicateFilterMethod() {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}

    ]

    /////////////////  FILTER() METHOD /////////////////////

    // const personAgeArr = personDetailsArr.filter(person => person.age >= 18);
    // const personNameArr = personAgeArr.map(person => person.name)

    // console.log(personNameArr);



    ////////////// SAME WITH FOREACH() METHOD ////////////

    const personAgeArr = [];

    personDetailsArr.forEach((person) => {
        if (person.age >= 18) {
            return personAgeArr.push(person.name);
        }
    })

    console.log(personAgeArr);

}

replicateFilterMethod();



// THIRD TASK: REPLICATE .EVERY() METHOD WITH .FOREACH()

function replicateEveryMethod() {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}
    ]

    /////////////////  EVERY() METHOD /////////////////////

    // console.log(personDetailsArr.every(person => person.age >= 18));



    ////////////// SAME WITH FOREACH() METHOD ////////////

    let everyIsAdult = true;
    personDetailsArr.forEach((person) => {
        if (person.age < 18) {
            everyIsAdult = false;
        } 
    });

    return everyIsAdult;

    }   

console.log(replicateEveryMethod());




// // FOURTH TASK: REPLICATE .SOME() METHOD WITH .FOREACH()

function replicateSomeMethod() {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}
    ]

    /////////////////  SOME() METHOD /////////////////////

    // console.log(personDetailsArr.some(person => person.age < 18));

    ////////////// SAME WITH FOREACH() METHOD ////////////

    let someIsUnderage = false;
    personDetailsArr.forEach((person) => {
        if (person.age < 18) {
            someIsUnderage = true;
        } 
    });

    return someIsUnderage;
    
}

console.log(replicateSomeMethod());



///// BONUS TASK: REPLICATE .REDUCE() METHOD WITH .FOREACH()


function replicateReduceMethod() {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}
    ]

    /////////////////  REDUCE() METHOD /////////////////////

    // const sumOfAge = (personDetailsArr.reduce((accumulator, currentSum) => accumulator + currentSum.age, 0));
    // const averageAge = (sumOfAge / personDetailsArr.length).toFixed(0);
    // console.log( averageAge);
    

    ////////////// SAME WITH FOREACH() METHOD ////////////

    let sumOfAge = 0;
    personDetailsArr.forEach((person) => {
      sumOfAge += person.age;
    });

    const averageAge = (sumOfAge / personDetailsArr.length).toFixed(0);
    return averageAge;
}

console.log(replicateReduceMethod());




/////////////////////// HOME TASK ///////////////////////////////

function replicateSortMethod () {

    const personDetailsArr = [
        {name: "Robert", age: 24},
        {name: "Sasha", age: 13},
        {name: "Christina", age: 45},
        {name: "Martha", age: 18},
        {name: "Sara", age: 32},
        {name: "John", age: 17}
    ]


    ////////////// SORT() METHOD ///////////////

    // ///////////// Sorted by age ///////////////
    // const sortedAge = personDetailsArr.sort((a, b) => a.age - b.age);
    // console.log(sortedAge);
    // ///////////// Sorted by names //////////////
    // const sortedNames = personDetailsArr.sort((a,b) => {
    //     if (a.name < b.name) {
    //         return -1
    //     }
    //     if (a.name > b.name) {
    //         return 1
    //     }
    //     return 0;
    // });
    // console.log(sortedNames);


    ///////////// SAME WITH FOR LOOP /////////////////////



        for (let i = 0; i < personDetailsArr.length - 1; i++) {
   
            if (personDetailsArr[i].age > personDetailsArr[i + 1].age) {
   
                let temp = personDetailsArr[i].age;
                personDetailsArr[i].age = personDetailsArr[i + 1].age;
                personDetailsArr[i + 1].age = temp;

                i = -1;
            }
        }
   
        console.log(personDetailsArr);
}

replicateSortMethod();