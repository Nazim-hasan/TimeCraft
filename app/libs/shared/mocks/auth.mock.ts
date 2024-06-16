export const loginFormDefaultValues = {
  email: '',
  password: '',
};


export const passwordRequirements = [
  {
    label: `At least 8 characters',
    )}`,
    regex: /^.{8,}$/,
  },
  {
    label: `At least 1 Capital letter`,
    regex: /^(.*[A-Z].*)$/,
  },
  {
    label: `At least 1 lower letter`,
    regex: /^(.*[a-z].*)$/,
  },
  {
    label: `At least 1 Number`,
    regex: /^.*[0-9].*$/,
  },
  {
    label: `At least 1 symbol`,
    regex: /^(.*\W.*)$/,
  },
];
