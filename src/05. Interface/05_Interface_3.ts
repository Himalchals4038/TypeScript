// type last_mile_type = "Close" | "Midway" | "Far" | "Far";
interface last_mile_type {
    distance: "Close" | "Midway" | "Far";
};
class Delivery2 implements last_mile_type{
    distance: "Close" | "Midway" | "Far" = "Far";
}

// type Response = {ok: true} | {ok: false};
// class myRes implements Response{
//     ok:boolean: true;
// }

type responseType = "Accepted" | "Rejected" | "Pending" | "Submitted";
function submitForm (response: responseType) {
    console.log(`Response: ${response}`);
}
submitForm("Accepted");
submitForm("Rejected");
submitForm("Pending");
submitForm("Submitted");