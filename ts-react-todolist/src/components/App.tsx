import * as React from 'react';
import TaksForm from './TaskForm'
import TaskList from './TaskList'
import { ITask } from './Task';

export class App extends React.Component <IProps, IState> {

    constructor(props: IProps){
        super(props);
        this.state = {
            tasks: []
        };
        this.addNewTask = this.addNewTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
    }

    addNewTask(task: ITask){
        console.log(task)
        this.setState({
            tasks: [...this.state.tasks, task]
        })
    }

    deleteTask(id: number){
        const updatedTasks: ITask[] = this.state.tasks.filter((task: ITask) => task.id !== id)
        this.setState({tasks: updatedTasks})
    }

    render(){
        return(
            <div>
                <nav className="navbar">
                    <a className="" href="/">{this.props.title}</a>
                </nav>

                <div className="container p-4">
                    
                    <div className="my-container">
                        <TaksForm addNewTask={this.addNewTask}/>
                    </div>
                    
                    <div className="my-container">  
                        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>  
                    </div>
                </div>
            </div>
        )
    }
}

interface IProps {
    title?: string;
}

interface IState {
    tasks: ITask[];
}