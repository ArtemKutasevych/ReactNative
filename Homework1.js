// Homework

// Task 1
console.log(add(1,3))

function add(a, b) {
 return a + b
}

function addMultiple() {
var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(addMultiple(5, 8, 12, 6))

// Task 2

String.prototype.myCustomContact = function (word) {
    return this + ' my ' + word
};

const result = 'hello'.myCustomContact('world')
console.log(result) // hello my world

const result2 = 'I lost'.myCustomContact('phone')
console.log(result2) // I lost my phone

// Task 3

async function newAsync() {
  return 1;
}

newAsync()
.then( value => console.log(value) )
.catch( error => console.log(error) )


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 500);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

// Task 4

function convertToObject(nameField, identifier) {
    return Object.fromEntries( nameField.map( x => [x[identifier], x.value]) )
}

function convertToArray(data, identifier) {
 return Object.keys(data).map( key => [ 
   { [identifier]: key, value: data[key] } ] )
}

const formFields = [
  { id: 'login', value: 'john.doe' },
  { id: 'password', value: 'secret' }
]

const formData = convertToObject(formFields, 'id')
console.log(formData)
// /**
//  * {
//  *   login: 'john.doe',
//  *   password: 'secret'
//  * }
//  */

const backConverted = convertToArray(formData, 'name')
console.log(backConverted)
// /**
//   * [
//   *   { name: 'login', value: 'john.doe' },
//   *   { name: 'password', value: 'secret' }
//   * ]
//  */
