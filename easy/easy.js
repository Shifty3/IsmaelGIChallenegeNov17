//outer function that returns a closure funcion
function exercise(workout){
    //closure function that reutrn the workout of the day
    return function(){
        console.log(`todays exercide: ${workout}`);
    };
}

//exercise funciotn with different exercises
const runningWorkout =  exercise("Running");
const swimmingWorkout = exercise("Swimming");
const dancingWorkout = exercise("Dancing");
const fencingWorkout = exercise('Fencing');


//call the closure functions to log exercises
runningWorkout();
swimmingWorkout();
dancingWorkout();
fencingWorkout();
