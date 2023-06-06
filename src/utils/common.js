export const buildUrl = (url, params) => {
  let urlWithParams = url;

  Object.entries(params).forEach(([key, value], idx) => {
    const sign = !idx ? '&' : '&';
    urlWithParams += `${sign}${key}=${value}`;
  });

  return urlWithParams;
};
