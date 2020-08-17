const numbers = {
  integer: /^\d+$/
}

const letters = {
  accentAndSpaces: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/
}

const date = {}

const password = {
  easy: '',
  medium: '',
  hard: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,20}$/
}

const characters = /[^\s\w,.:&\/()+%'`@-]/;

const email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const alphanumeric = /^[a-zA-Z0-9]*$/

export default {
  numbers,
  letters,
  date,
  password,
  characters,
  alphanumeric,
  email
}