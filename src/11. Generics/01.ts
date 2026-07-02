function wrapInArray<T>(item: T): T[]{
    return [item];
}
wrapInArray("Laxmi");
wrapInArray(123);
wrapInArray(true);
wrapInArray({name: "Laxmi"});

function pair<A, B>(a: A, b: B): [A, B]{
    return [a, b];
}
pair("Laxmi", 123);
pair(false, {id: 3615});
pair({role: "Admin"}, {salary: 35126});