import {SubmissionError} from "redux-form";

const initialState =  {
    users: [1,2,3,4],
    usersById: {
        1: {
            id:1,
            name:'Theodor',
            login:'theo',
            pass:'dor'
        },
        2: {
            id:2,
            name:'Valkiriya',
            login:'valki',
            pass:'riya'
        },
        3: {
            id:3,
            name:'John',
            login:'jo',
            pass:'hn'
        },
        4: {
            id:4,
            name:'123',
            login:'123',
            pass:'123'
        }
    }
}


function find(arr,val) {
    if(!arr) {return;}

    let arrKeys = Object.keys(arr);
    for(let i = 0;i < arrKeys.length; i++) {
        for(var j in arr[arrKeys[i]]) {
            if(arr[arrKeys[i]][j] === val) {
                return arr[arrKeys[i]];
            }
        }
    }


}
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default function users(state = initialState, action) {
    switch(action.type) {
        case 'USER_ADD':
            const newId = state.users[state.users.length-1] + 1;
            return {
                users: state.users.concat(newId),
                usersById: {
                    ...state.usersById,
                    [newId]: {
                        name: action.name,
                        login: action.login,
                        pass: action.pass
                    }
                }
            }
        case 'USER_LOG_IN':
             // const loginValid = state.usersById.includes(action.login);
            console.log( state );
            // console.log(state.usersById["4"].login === (action.login) );
                (function()  {
                    let login = find(state.usersById, action.login);
                    let pass = find(state.usersById, action.pass);
                    if (!login) {
                        console.log('wrong login');
                        throw new SubmissionError({
                            login: 'Wrong login',
                            _error: 'Wrong login!'
                        });

                    } else if (!pass) {
                        console.log('wrong password');
                        throw new SubmissionError({
                            password: 'Wrong password',
                            _error: 'Wrong password!'
                        });

                    } else {
                        console.log(login.name + ' Log in successful');
                        alert(login.name + ' Log in successful');
                    }
                }());

            return state;
        default:
            return state;
    }
}