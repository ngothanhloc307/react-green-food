export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'curency',
    currency: 'USD',
  }).format(number / 100);
};
