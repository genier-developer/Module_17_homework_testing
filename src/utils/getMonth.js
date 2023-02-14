export function getMonth(i) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    if (i > 0 && i <=12) {
        const result = (months[i-1]);
        // console.log(result);
        return result
    } else {
        result = "Input is not correct";
                // console.log(result);
                return result
    } 
}

