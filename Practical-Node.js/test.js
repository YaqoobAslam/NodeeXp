const serviceBase = {
  port: 3000,
  url: "azat.co",
};
const getAccounts = () => {
  return [1, 2, 3];
};
const accountService = {
  __proto__: serviceBase,
  getUrl() {
    return "http://" + this.url + ":" + this.port;
  },

  toString() {
    return JSON.stringify(super.valueOf());
  },
  ["valueOf_" + getAccounts().join("_")]: getAccounts(),
};
console.log(accountService);
