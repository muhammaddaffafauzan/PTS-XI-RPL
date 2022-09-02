import os from "os"

console.info(os.platform());
console.table(os.cpus());
console.info(os.release());
console.info(os.version());
console.info(os.hostname());
console.table(os.networkInterfaces());
console.info(os.type());
console.info(os.freemem());