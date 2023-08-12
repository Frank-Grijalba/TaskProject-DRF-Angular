export default interface Task{
    id: number,
    title: string,
    description: string,
    created?: Date,
    status_task:string,
    update_date_task?:Date
}