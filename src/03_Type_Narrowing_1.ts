function getRecord(person: string | number) {
    if (typeof person === "string") return { name: person };
    else return { id: person };
};
console.log(getRecord("John"));
console.log(getRecord(123));

function sendMessage(msg?: string | number) {
    if (msg){
        if (typeof msg === "string") console.log(`Message: ${msg}`);
        else if (typeof msg === "number") console.log(`ID: ${msg}`);
    }
    else console.log("No message");
    // console.log("Message sent");
};
sendMessage("Hello");
sendMessage(123);
sendMessage();