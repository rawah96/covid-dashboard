export const sortData = data => {
    // copy data into array
    const sortedData = [...data];

    // grabs first data and calls it a, then second and calls it b
    sortedData.sort((a,b) => {
        if(a.cases > b.cases) {
            return -1;
        } else {
            return 1;
        }
    })
    return sortedData;
}