//callbacks
let username = sendHttpRequest('getUser');
console.log(username);

function logUsername(user){
    console.log(user);
}

sendHttpRequest('getUser', logUsername);

//Promise with anonymis function because the function does not have a name
doSomethingThatReturnsAPromise()
    .then((value) => {
        console.log(value);
    }).catch((err) => {
        console.error(err);
    });

//alternatively if you dont want an anyomis function

function handleEvent{
    console.log(value);
}

function handleError{
    console.error(err);
}

doSomethingThatReturnsAPromise()
    .then(handleEvent)
    .catch(handleError);

//both of those promise functions do the same thing
//promises avoid getting too nested with callbacks (callback hell)