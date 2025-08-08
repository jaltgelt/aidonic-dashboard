export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-CA'); // YYYY-MM-DD format
};
export const formatNumber = (number) => {
    return number.toLocaleString();
};
