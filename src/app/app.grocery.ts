import { Component } from '@angular/core';


@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    task = {
        name: '',
        id: 0
    };
    tasks = [];


    onClick = () => {
        if (this.task.id == 0) {
            this.tasks.push({ id: (new Date()).getTime(), name: this.task.name });
            this.task = {
                name: '',
                id: 0
            };
        }
        this.task = {
            name: '',
            id: 0
        };

    }

    onEdit(item) {
        this.task = item;
    }

    onDelete(item) {
        for(var i = 0; i <= this.tasks.length; i++) {
            console.log(this.tasks.length)
            console.log(item)
            console.log(this.tasks[i])
            if(item.id == this.tasks[i].id) {
                console.log(item)
                this.tasks.splice(i,1)
                break;
            }
        }
    }
}
