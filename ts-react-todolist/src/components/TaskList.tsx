import * as React from 'react';
import { ITask } from './Task'

class TaskList extends React.Component<any, any> {

    render(): JSX.Element[]{
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                
                    <div className="card card-body mt-2">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <button className="btn btn-danger" onClick={() => this.props.deleteTask(task.id)}>Delete</button>
                    </div>
                
            )
        })
    }
}

interface ITaskListProps {
    tasks: ITask[];
    deleteTask: (id: number) => void;
}

export default TaskList