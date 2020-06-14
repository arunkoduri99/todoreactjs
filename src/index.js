import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Todolist extends React.Component{
    constructor(props){
        super(props);
        const todolist = { 'todolist': [], 'search': '', 'task': '','editid':false};
        this.state =todolist;
    }

    render(){
        return(
            <div>
                <div id="myDIV" className="header">
                        <h2> My To Do List </h2> 
                        <div>
                            <form method="post" onSubmit={this.handleSubmit }>    
                                <input type="text" name="title" id="title" placeholder="Title..." required value={this.state.task} onChange={this.handletaskchange}/>
                                <input type="submit" className="addBtn" value="submit" style={{ marginBottom: '20px' }}/>
                            </form>
                        </div>
                        <div>
                            <form method="post" onSubmit={this.handlesearch}>
                            <input type="text" name="search" id="search" placeholder="Search Task..." value={this.state.search} onChange={this.handlesearchchange}/>
                                <input type="submit" className="addBtn" value="search" style={{ marginBottom: '20px' }}/>
                            </form>
                        </div>
                </div>
                <ul id="myUL">{ this.state.todolist.map((todolist,index)=>{return this.Createlist({'title':todolist.title,'id':index,'toggle':todolist.toggle})})}
                </ul>
            </div>
        );
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const title = document.getElementById('title').value;
        const todoState = this.state;
        if (todoState.editid!==false){
            todoState.todolist[todoState.editid].title=title;
            todoState.editid = false;
        }else{
            todoState.todolist.push({'title':title,'toggle':false});
        }
        todoState.task='';
        this.setState(todoState);
    }

    handletaskchange = (e)=> {
        this.setState({ task: e.target.value });
    }
    
    handlesearchchange = (e)=> {
        this.setState({ search : e.target.value });
    }
    
    handlesearch = (event) =>{
        event.preventDefault();
        const searchinput = this.state.task;
        const todolist = this.state;
        todolist.search=searchinput;
        this.setState(todolist);
    }
    
    deletelist = (id) => {
        const todoState = this.state;
        todoState.todolist.splice(id,1);
        this.setState(todoState);
    }

    edit = (id) => {
        const todoState = this.state;
        todoState.editid = id;
        todoState.task = todoState.todolist[id].title;
        this.setState(todoState);
    }
    
    toggleClass(id){
        const todoState = this.state;
        todoState.todolist[id].toggle=true;
        this.setState(todoState);
    }

    Createlist = (props) => {        
        let title = props.title;
        let search = this.state.search;
        if (title.toLowerCase().includes(search.toLowerCase())){
            return (
                <li key={props.id} className={props.toggle ? 'checked' : ''}>{props.title}<span className="deletebtn" style={{ marginLeft: '5px' }} onClick={() => { this.deletelist(props.id); }}>&#x2718;</span><span className="donebtn" onClick={() => { this.toggleClass(props.id); }}>&#x2705;</span><span onClick={() => { this.edit(props.id); }}>&#x270E;</span></li>
            );
        }
    }
}

ReactDOM.render(<Todolist/>, document.getElementById('root'));

