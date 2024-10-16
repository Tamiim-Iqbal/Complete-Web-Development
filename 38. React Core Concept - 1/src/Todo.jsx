// export default function Todo({task, isDone}) {
//     return (
//         <li>Task : {task}</li>
//     )
// }


// Conditional Rendering - 1
// export default function Todo({task, isDone}) {
//     if(isDone)
//         return <li>Finished : {task}</li>
//     else 
//         return <li>Work on : {task}</li>
// }


// Conditional Rendering - 2
// export default function Todo({task, isDone}) {
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//     return <li>Work on : {task}</li>
// }


// Conditional Rendering - 3 : ternary
// export default function Todo({task, isDone}) {
//     return (
//         <li>{isDone? "Finished" : "Work on"} : {task}</li>
//     )
// }


// Conditional Rendering - 4, && (True)
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task}{isDone && " : Done"}</li>
//     )
// }

// Conditional Rendering - 5, || (False)
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task}{isDone || ' : Do it'}</li>
//     )
// }


// Conditional Rendering - 6
export default function Todo({task, isDone}) {
    let listItem;
    if(isDone){
        listItem =  <li>Finished : {task}</li>
    }
    else{
        listItem = <li>Work on : {task}</li>
    }
    return listItem
}