export default interface Task{
    id: number,
    title: string,
    description: string,
    created: Date,
    task_status:  'to_do' | 'in_progress' | 'done',
    task_update_date:Date
}