// All or Nothing
function possiblyPerfect(key,answers) {
    let eredmeny = 0;
    let blank =0;
    for (let i = 0; i < key.length; i++) {
        if (key[i]=="_") {
            blank+=1
            continue;
        }
        if (key[i]==answers[i]) {
            eredmeny+=1
        }
        
    }
    if (eredmeny==0||eredmeny==key.length-blank) {
        return true;
    }
    return false
}

console.log(possiblyPerfect([..."A_C_B"],[..."ADCEB"]) + " >> true ");
console.log( possiblyPerfect([..."B_B"],[..."BDC"]) + " >> false ");
console.log( possiblyPerfect([..."T_FFF"],[..."FFTTT"]) + " >> true ");
console.log( possiblyPerfect([..."BA__"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABA_"],[..."BACC"]) + " >> true ");
console.log( possiblyPerfect([..."ABC_"],[..."BACC"]) + " >> false ");
console.log( possiblyPerfect([..."B_"],[..."CA"]) + " >> true ");
console.log( possiblyPerfect([..."BA"],[..."CA"]) + " >> false ");
console.log( possiblyPerfect([..."B"],[..."B"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TFFF"]) + " >> true ");
console.log( possiblyPerfect([..."_T__"],[..."TTFT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."TTFT"]) + " >> false ");
console.log( possiblyPerfect([..."_TTT"],[..."TTTT"]) + " >> true ");
console.log( possiblyPerfect([..."_TTT"],[..."FFFF"]) + " >> true ");
console.log( possiblyPerfect([..."____"],[..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    let half = Math.floor(numbers.length/2)
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum +=numbers[i]
    }
    let median = numbers.sort()[half]
    if (median >sum/numbers.length) {
        return "median"
    }
    else if (median <sum/numbers.length) {
        return "mean"
    }
    else {return "same"}
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    let eredmeny = []
    let half = Math.floor(arr.length/2)
    if (arr.length%2==1) {
        
        for (let i = half+1; i < arr.length; i++) {
            eredmeny.push(arr[i])
        }
        eredmeny.push(arr[half])

        for (let i = 0; i < half; i++) {
            eredmeny.push(arr[i])
        }
    }
    else{
        for (let i = half; i < arr.length; i++) {
            eredmeny.push(arr[i])
        }

        for (let i = 0; i < half; i++) {
            eredmeny.push(arr[i])
        }
    }
    return eredmeny
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);