export const fetchSalesGraph = async () => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/charts/sales`
  );

  return request.json();
};

export const fetchSalesByYear = async () => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/charts/salesByYear`
  );

  return request.json();
};
