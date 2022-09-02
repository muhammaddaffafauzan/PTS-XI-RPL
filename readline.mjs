import ReadLine  from "readline";
import process from "process";

const input = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("siapa nama anda? : ", function (name) {
    console.info(`halo ${name}`);
    input.close();
});