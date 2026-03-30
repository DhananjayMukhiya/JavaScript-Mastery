const accountId = 123456
let accountEmail = "coders@dhananjay.com";
var accountPassword = "12356"
accountCity = "Patna"
let accountState;

//accountId = 2 //not allowed

accountEmail = "dhananjay@coders.com"
accountPassword = "11111"

/* Prefer not to use var because of issue in block scope and functional scope */

accountCity = "Motihari Bihar"

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])