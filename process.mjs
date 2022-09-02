import process from "process";

process.addListener("exit", function (exitcode) {
  console.info(`NodeJS exit with code ${exitcode}`); 
});

console.info(process.versions)
console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(1);

console.info("Not Printed because already exit");