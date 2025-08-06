export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-CA'); // YYYY-MM-DD format
};

export const formatNumber = (number: number): string => {
  return number.toLocaleString();
};
