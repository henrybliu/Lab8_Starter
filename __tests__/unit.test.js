// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2
//testing isPhoneNumber
test("working phone number 1", () => {
  phoneNumber = "949-949-9499";
  expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test("working phone number 2", () => {
  phoneNumber = "(687)-000-0001";
  expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test("non-working phone number 1", () => {
  phoneNumber = "911";
  expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test("non-working phone number 2", () => {
  phoneNumber = "1-2-3-4";
  expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

//testing isEmail
test("working email 1", () => {
  email = "henry@outlook.com";
  expect(functions.isEmail(email)).toBe(true);
});

test("working email 2", () => {
  email = "gertrude123@gmail.com";
  expect(functions.isEmail(email)).toBe(true);
});

test("non-working email 1", () => {
  email = "squack";
  expect(functions.isEmail(email)).toBe(false);
});

test("non-working email 2", () => {
  email = "@gmail";
  expect(functions.isEmail(email)).toBe(false);
});

//testing isStrongPassword
test("strong password 1", () => {
  pass = "gibber_ish";
  expect(functions.isStrongPassword(pass)).toBe(true);
});

test("strong password 2", () => {
  pass = "iHEARTcse110";
  expect(functions.isStrongPassword(pass)).toBe(true);
});

test("weak password 1", () => {
  pass = "12345678";
  expect(functions.isStrongPassword(pass)).toBe(false);
});

test("weak password 2", () => {
  pass = "thisistoolongofapassword";
  expect(functions.isStrongPassword(pass)).toBe(false);
});

//testing isDate
test("working date 1", () => {
  date = "12/1/2024";
  expect(functions.isDate(date)).toBe(true);
});

test("working date 2", () => {
  date = "1/1/2023";
  expect(functions.isDate(date)).toBe(true);
});

test("non-working date 1", () => {
  date = "1/1/1";
  expect(functions.isDate(date)).toBe(false);
});

test("non-working date 2", () => {
  date = "123/123";
  expect(functions.isDate(date)).toBe(false);
});

//testing isHexColor
test("working hex 1", () => {
  hex = "#fc9";
  expect(functions.isHexColor(hex)).toBe(true);
});

test("working hex 2", () => {
  hex = "#45ffaa";
  expect(functions.isHexColor(hex)).toBe(true);
});

test("non-working hex 1", () => {
  hex = "red";
  expect(functions.isHexColor(hex)).toBe(false);
});

test("non-working hex 2", () => {
  hex = "#1234468909132";
  expect(functions.isHexColor(hex)).toBe(false);
});
