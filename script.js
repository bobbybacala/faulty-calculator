

// script to make functioning calculator

// taking input in the form of string
let strInp = ''

//  select all the classes of button
let buttons = document.querySelectorAll('.button')

// create an array from the buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        // base case, when we press '=', it should evalute the numbers
        if (e.target.innerHTML == '=') {

            // get the updated value of strInp
            let strInp = document.querySelector('input').value

            // function to introduce random errors
            function introduceErrors(expression) {

                // create a list of operators that can make mistakes
                const errors = ['+', '-', '*', '/']

                // create a random index, which picks any value from the errors list
                const randomIndx = Math.floor(Math.random() * errors.length)

                // a chance of 10% that cause the error
                const errorMargin = 0.2

                // if errorMargin is greateer, a error can be caused
                if (Math.random() < errorMargin) {

                    // select the operator using the random index from the list
                    let incorrectOperator = errors[randomIndx]

                    // replace the correct operator with inccorrect pne, if luck permits ,the inccorrect operator matches with correct operator
                    let incorrectExpr = expression.replace(/[+*/-]/, incorrectOperator)

                    // return the incorrect expression
                    return incorrectExpr
                }

                // ptherwise just return the corrent expression
                return expression
            }


            // base case, when someone presses '%' to get percent a number
            if (strInp.includes('%')) {
                // get the percent index
                let percentIndex = strInp.indexOf('%')

                let str_part1 = strInp.substring(0, percentIndex).trim()
                let str_part2 = strInp.substring(percentIndex + 1).trim()

                // convert integer to parsefloat to calculate percentage
                let part_1 = parseFloat(str_part1)
                let part_2 = parseFloat(str_part2)

                // calculaet the asnwer
                let answer = (part_1 * part_2) / 100

                // update the value of inout tag
                document.querySelector('.input').value = answer
            } else {

                // get the expression from the function, it coult be correct or wrong
                // pass the original string(expression) as parameter to the introduceErrors function
                let newExpression = introduceErrors(strInp)

                // catch the error
                try {
                    let result = eval(newExpression)
                    document.querySelector('.input').value = result
                } catch (error) {
                    console.log('Invalid Expression', error)
                }
            }

            // commenting this out, since it is placed in try and catch block
            // strInp = eval(strInp)
            // update the value of input tag with the asnwer
            // document.querySelector('.input').value = strInp
        }

        // base case, when we press 'C', it should evalute the numbers
        else if (e.target.innerHTML == 'C') {
            strInp = ""
            // update the value of input tag with the asnwer
            document.querySelector('.input').value = strInp
        }

        // base case, when someone presses 'D' to delete a number
        else if (e.target.innerHTML == 'D') {
            // update the str by deleting the last character
            strInp = strInp.substring(0, strInp.length - 1)

            // update the value of inout tag
            document.querySelector('.input').value = strInp
        }

        else {
            // console.log(e.target)
            // update the string from here
            strInp = strInp + e.target.innerHTML

            // update the value of input tag
            document.querySelector('.input').value = strInp
        }
    })
})