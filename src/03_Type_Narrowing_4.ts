type changeUsername = {
    username: string;
    userId: number;
    changeUsername: (newUsername: string) => void;
    changeUserId: (newUserId: number) => void;
}
const user1: changeUsername = {
    username: "John",
    userId: 123,
    changeUsername: (newUsername: string) => console.log(`Username changed to ${newUsername} for user ${user1.userId}`),
    changeUserId: (newUserId: number) => console.log(`User ID changed to ${newUserId} for user ${user1.username}`)
}
user1.changeUsername("Suman");
user1.changeUserId(456);