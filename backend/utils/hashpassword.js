import bcrypt from "bcrypt";

const hashPassword = async (userPass) => {
  const result = await bcrypt.hash(userPass, 10);
  return result;
};

const comparePassword = async (pwd, hashedpassword) => {
  const resultcompare = await bcrypt.compare(pwd, hashedpassword);
  return resultcompare;
};

export { hashPassword, comparePassword };
