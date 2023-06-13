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