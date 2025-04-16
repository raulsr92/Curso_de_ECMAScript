
function newUser(name, age, country) {
    
    var name = name || "Raul";
    var age = age || 29
    var country = country || "Perú"

    console.log(name, age, country)
    
}

newUser("Amalia", 45, "Peru")


function newTeacher(name , age, country = "Perú") {
    
    var name = name;
    var age = age

    console.log(name, age, country)
    
}

newTeacher("Jhon", 47)

newTeacher("Carolina", 37, "Chile")
