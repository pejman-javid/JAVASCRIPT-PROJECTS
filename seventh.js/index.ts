type userType = {
    id : string | number
    firstName : string
    lastName : string
    age : number
    Gender : "male" | "female"
    phoneNumber : number | string
    maritalStatus? : "married" | "single"
    occupation? : string
    Height? : number | string
    weight? : number | string
}

const userList: Array<userType> = [
    {
        id : 77434,
        firstName : "reza",
        lastName : "samet",
        age : 34,
        Gender : "male",
        phoneNumber : "09179160783",
        maritalStatus : "single",
        Height : "186 cm",
        weight : "86 kg"
    },
    {
        id : 67835 ,
        firstName : "elnaz",
        lastName : "razi",
        age : 42,
        Gender : "female",
        phoneNumber : "0912566789",
        maritalStatus : "single",
        Height : "156 cm",
        weight : "63 kg"
    }
]




//creat user
const creatUser = (user : userType): void => {
    userList.push(user)
}


creatUser({
        id : "nmd-892346",
        firstName : "moeteza",
        lastName : "javadi",
        age : 22,
        Gender : "male",
        phoneNumber : "09335091291",
    })
    

//update user 
const updateUser = (id : userType["id"] , user: userType) => {
    const userIndex : number = userList.findIndex((item) => item.id === id)
    userList[userIndex] = {...userList[userIndex] , ...user} 
}

updateUser(23455) , {
        firstName : "shadi",
        lastName : "shaban",
        age : 28,
        Gender : "female",
        phoneNumber : "0916986736",
        maritalStatus : "single",
        Height : "169 cm",
        weight : "73 kg"
}

//delete user 
const deleteUser = (id:userType["id"]) => {
    const deleteUser = userList.filter((item) => item.id !== id)
    return deleteUser
}

console.log( deleteUser(23455));
userList.sort()
console.log(userList)