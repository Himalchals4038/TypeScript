let value:any;
value = 36.15;
value = true;
value = [48, 37, 95, 20, 64];
value = "abc";
value.toUpperCase();

let newValue:unknown;
newValue = 36.15;
newValue = true;
newValue = [48, 37, 95, 20, 64];
newValue = "abc";
// newValue.toUpperCase();
if (typeof newValue === "string") newValue.toUpperCase();