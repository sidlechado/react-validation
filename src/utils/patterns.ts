export const regex = {
  Cellphone: {
    Pattern: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
  },
  Name: {
    Pattern: /^[A-Za-z]+$/,
  },
  BirthDate: {
    Pattern: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
  },
};
