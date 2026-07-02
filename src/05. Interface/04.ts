type submitName = {name: string};
type submitID = {id: number};
type submitForm = submitName & submitID;
const form1: submitForm = {name: "Sastry", id: 1};

type formSubmit = {
    name: string,
    id: number,
    biodata?: string
};
function submitForm1 (form: formSubmit) {
    console.log(`Name: ${form.name}`);
    console.log(`ID: ${form.id}`);
    if (form.biodata) console.log(`Biodata: ${form.biodata}`);
}
submitForm1({name: "Sastry", id: 1});
submitForm1({name: "Sastry", id: 1, biodata: "Hello"});