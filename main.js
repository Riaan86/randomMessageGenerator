const salutations = ['Good day', 'Welcome', 'Namaste', 'Good to see you again'];
const reminders = ['Remember to focus on your breathing today', 'Don\'t create double trouble for you today', 'Be mindfull today', 'Examine your assumptions'];
const quotes = ['This too shall pass', 'It\'s darkest before the dawn', 'Hope conquers all'];

const randomiser = arr => {
    let randomNumber = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomNumber];
}

const messageCreator = (arr1, arr2, arr3) => {
    console.log(`${randomiser(arr1)} \n${randomiser(arr2)} \n${randomiser(arr3)}`);
}

messageCreator(salutations, reminders, quotes);
