

const isempty = (value)=>{
    if(typeof value === "undefined" || value === null ){
        return false
    }

    if(typeof value === "string" && value.trim().length === 0){
        return false
    }
}

const isValidName = (value)=>{
    const nameRegex = /^[a-zA-z]+$/
    return nameRegex.test(value)
}

const isValidEmail = (value)=>{
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(value)
}

const isValidPassword = (value)=>{
    const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(value)
}
module.exports = {isempty, isValidName, isValidEmail, isValidPassword}