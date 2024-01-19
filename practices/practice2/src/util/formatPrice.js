export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);
  return `${formattedPrice}원`;
};
