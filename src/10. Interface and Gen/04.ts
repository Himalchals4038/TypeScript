interface student1{
    name: string,
    class: number,
    grade: number
}
interface student2{
    project: string,
    score: number,
    onRoll: boolean
}
interface master extends student1, student2{}