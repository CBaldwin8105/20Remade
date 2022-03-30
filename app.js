function name() {
    var user = prompt("What is your name?")
    return user
}

function randNum() {
    var num = (Math.floor(Math.random() * 10) + 1)
    return num
}

function user(number) {

    var user = 0

    alert("It is the user's turn.")

    do {

        var number = randNum()

        if (number == 1) {
            var eleven = 11
            number = eleven
        }

        user += (number)

        if ((user > 20) && (eleven == 11)) {
            user -= 10
            eleven = 0
        }

        alert(`Your new number is ${number}.
        
        Your Current Total: ${user}.`)

        if (user > 20) {
            break;
        }

        var ask = prompt(`Would you like another number? If you would like to stop press 'n'.`)

    } while (ask != "n")

    return user
}

function comp() {

    var comp = 0

    alert(`Now... it is computer's turn.`)

    do {

        var number = randNum()

        if (number == 1) {
            var eleven = 11
            number = eleven
        }

        comp += (number)

        if ((comp > 20) && (eleven == 11)) {
            comp -= 10
            eleven = 0
        }

        alert(`The new number is ${number}.
            
        Computer Total: ${comp}.`)
            
    } while (comp < 16)

    alert(`Computer will stop at ${comp}.`)

    return comp
}

function compare(user, comp) {
    if (comp > 20) {
        alert(`The computer went over 20! You won!`)
    } else if (user > 20) {
        alert(`You went over 20! The computer won!`)
    } else if (user > comp) {
        alert(`You won!`)
    } else if (comp > user) {
        alert(`The computer won!`)
    } else {
        alert(`You tied! No points awarded.`)
    }

    var nothing = 0

    return nothing
}

function master() {
    do {
        compare(user(), comp())
        
        var quit = prompt("Do you want to play again? Type 'n' if not.")
    } while (quit != "n")
}

var name = name()

alert(`Hello ${name}.`)

master()