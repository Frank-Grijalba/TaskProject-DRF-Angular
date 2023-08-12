export default interface Task{
    id: number,
    title: string,
    description: string,
    created?: Date,
    task_status:string,
    task_update_date?:Date
}