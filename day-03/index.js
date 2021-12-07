"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const powerBinaries_1 = require("./powerBinaries");
const testData = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "00010",
    "01010",
];
// Creates a new array containing each binary value
// Pushes binary array into container array
const splitArrayIntoArrayOfValues = (data) => {
    let arrayContainer = [];
    for (let index = 0; index < data.length; index++) {
        arrayContainer.push(data[index].split(""));
    }
    return arrayContainer;
};
// Counts and returns number of times value appears in array
const getOccurrenceOfValue = (array, value) => {
    return array.filter((v) => v === value).length;
};
const getLengthOfLongestArrayElement = (array) => {
    const longestElement = array.reduce((prev, curr) => prev.length > curr.length ? prev : curr);
    console.log(longestElement.length);
    return longestElement.length;
};
// Takes array containing arrays of string values and returns columns of values
// Loop value needs to be length of longest child array
const createArrayOfColumnValues = (arrContainer, numberOfColumns) => {
    let columns = [];
    for (let binaryPosition = 0; binaryPosition < numberOfColumns; binaryPosition++) {
        let singleColumn = [];
        for (let i = 0; i < arrContainer.length; i++) {
            singleColumn.push(arrContainer[i][binaryPosition]);
        }
        columns.push(singleColumn);
    }
    return columns;
};
// Pass array of binary values to count number of times 0 or 1 appears in column
// Returns deconstructed object containing two arrays of binary values
const generatyBinaryInverseBinaryArrayFromColumn = (columnArray) => {
    let primaryArray = [];
    let inverseArray = [];
    // Push either a 1 or 0 into array depending on occurence of value
    for (let index = 0; index < columnArray.length; index++) {
        const Zero = getOccurrenceOfValue(columnArray[index], "0");
        const One = getOccurrenceOfValue(columnArray[index], "1");
        if (One > Zero) {
            primaryArray.push(1);
            inverseArray.push(0);
        }
        else {
            primaryArray.push(0);
            inverseArray.push(1);
        }
    }
    return { primaryArray, inverseArray };
};
// Provide two binary arrays and multiple them together
const multipleTwoBinaryValueArrays = (array1, array2) => {
    let array1Binary = array1.join("");
    let array2Binary = array2.join("");
    let array1Value = parseInt(array1Binary, 2);
    let array2Value = parseInt(array2Binary, 2);
    return array1Value * array2Value;
};
const arrayOfBitValues = splitArrayIntoArrayOfValues(powerBinaries_1.powerBinaries);
const columnNumber = getLengthOfLongestArrayElement(arrayOfBitValues);
const columnValues = createArrayOfColumnValues(arrayOfBitValues, columnNumber);
const { primaryArray, inverseArray } = generatyBinaryInverseBinaryArrayFromColumn(columnValues);
const powerConsumption = multipleTwoBinaryValueArrays(primaryArray, inverseArray);
console.log(powerConsumption);
