function hi (person) {
    return "Hello, " + person
}

let user: string = "Buddy";

if (typeof document === "undefined") {
    console.log(hi(user));
} else {
    document.body.textContent = hi(user);
}
