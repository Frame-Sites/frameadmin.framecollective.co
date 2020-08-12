const getDate = date => {
  if (date === 'Present') return date;
  return `${date.slice(5)}/${date.slice(0, 4)}`;
};

export default getDate;
