/* dynamic sort using object propery */
export const dynamicSort = (property) => {
    let sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export const isMatchGlobalSearch = (transaction, searchInputValue) => {
    const searchInput = searchInputValue.toLowerCase();
    const transactionVal = transaction.toLowerCase();
    const pattern = new RegExp(`${searchInput}`, 'g');

    return pattern.test(transactionVal);
};

/* filter transaction for transaction object with 4 key */
export const filterTransaction = (transaction, searchInputValue) =>
    transaction.filter(tx => isMatchGlobalSearch(tx.ownerName, searchInputValue) ||
        isMatchGlobalSearch(tx.amount, searchInputValue) ||
        isMatchGlobalSearch(tx.bankSource, searchInputValue) ||
        isMatchGlobalSearch(tx.bankDestination, searchInputValue)
    );

const month = ["January","February","March","April",
    "May","June","July","August","September","October","November","December"];

export const getDate = (timestamp) =>{
    const d = new Date(parseInt(timestamp));
    return d.getDate() + ' ' + (month[d.getMonth()]) + ' ' + d.getFullYear();
}

export default {dynamicSort, filterTransaction, isMatchGlobalSearch}
