function samplePromise() {
    return Promise.resolve("daffa");
}

const nama = await samplePromise();
console.info(nama);