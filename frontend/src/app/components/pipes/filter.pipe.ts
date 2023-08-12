import { Pipe, PipeTransform } from '@angular/core';
import Task from 'src/app/task.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: Task[], page: number = 0, search: string = ''): Task[] {
    if(search.length === 0)
      return tasks.slice(page, page + 6);

    const filterByStatus = tasks.filter( tsk => tsk.status_task.includes( search ));

    return filterByStatus.slice(page, page + 6);
  }

}
