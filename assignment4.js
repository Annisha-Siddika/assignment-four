// This function will return a mathematical solution


function mindGame(num) {
    if (num >= 0 && typeof (num) === 'number') {

        let result = (((num * 3) + 10) / 2) - 5;
        return result;
    }
    else {
        return 'Please input a positive number';
    }

}


// This function will return if the length of the given string's charecter is even or odd

function evenOdd(str) {
    if (str.length % 2 === 0 && typeof (str) === 'string') {
        return 'even';
    }
    else if (str.length % 2 !== 0 && typeof (str) === 'string') {
        return 'odd';
    }
    else {
        return 'Please input a String';
    }
}


// This function will return the value of a number that is less or greater than seven

function isLGSeven(num) {
    let difference = num - 7;
    if (typeof (num) === 'number') {
        if (difference < 7) {
            return difference;
        }
        else if (difference >= 7) {
            return num * 2;
        }
    }
    else {
        return 'Please input a number';
    }
}


// This function is for finding bad data

function findingBadData(arr) {
    if (Array.isArray(arr) === true) {
        let badData = [];
        for (let i = 0; i < arr.length; i++) {
            let elements = arr[i];
            if (elements < 0) {
                badData.push(elements);
            }
        }
        return badData.length;
    }
    else {
        return 'Please input an Array';
    }

}



// This function is for convert three friends gems into diamond

function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
    if (typeof (friend1Gems, friend2Gems, friend3Gems) === 'number') {
        let totalDiamond = (friend1Gems * 21) + (friend2Gems * 32) + (friend3Gems * 43);
        if (totalDiamond < (1000 * 2)) {
            return totalDiamond;
        }
        else if (totalDiamond > (1000 * 2)) {
            let remainingDiamond = totalDiamond - 2000;
            return remainingDiamond;
        }
    }
    else {
        return 'You have to input 3 valid numbers'
    }

}
