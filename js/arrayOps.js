function arraySummarize(ar) {
    // Takes an array of values and return two arrays, one with unique values in the array and a second with counts of those unique values.
    var arUnique = [];
    var arCount = [];
    for (var i=0;i<ar.length;i++) {
        var idx = arUnique.indexOf(ar[i]);
        if (idx<0) {
            arUnique.push(ar[i]);
            arCount.push(1);
        } else {
            arCount[idx] = arCount[idx]+1
        }
    }
    return [arUnique, arCount];
}

function arraySum(ar) {
    // Calculate the total of the input arrays.
    var total=0;
    for (var i=0;i<ar.length;i++) {
        if (!isNaN(ar[i])) {
            total=total+ar[i];
        }
    }
    return total;
}

function arrayMin(ar) {
    // return the minimum value from an array
    var min = ar[0];
    for (var i=0;i<ar.length;i++) {
        if (ar[i]<min) {
            min=ar[i];
        }
    }
    return min;
}
function arrayMax(ar) {
    // return the maximun value from an array
    var max = ar[0];
    for (var i=0;i<ar.length;i++) {
        if (ar[i]>max) {
            max=ar[i];
        }
    }
    return max;
}

function arrayShannon(ar) {
    // Calculate shannon's diversity index for an array of count values
    var total = arraySum(ar);
    var sum = 0;
    for (var i=0;i<ar.length;i++) {
        var pi = ar[i]/total;
        sum += (pi*Math.log(pi));
    }
    return sum*(-1);
}

function arraySimpson(ar) {
    // Calculate simpson's diversity index for an array of count values
    var total = arraySum(ar);
    var sum = 0;
    for (var i=0;i<ar.length;i++) {
        var pi = ar[i]/total;
        sum += (pi*pi);
    }
    return sum;
}

function arraySimpsonSm(ar) {
    // Calculate simpson's diversity index for sparse data for an array of count values
    var total = arraySum(ar);
    var sum = 0;
    for (var i=0;i<ar.length;i++) {
        var ni = ar[i];
        sum += (ni*(ni-1));
    }
    return sum/(total*(total-1));
}
