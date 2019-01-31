import { Component } from '@angular/core';

interface TableData
{
    value:number;
    index:number;
    result:number;
};

@Component({
    selector: 'st-table',
    templateUrl: './table.component.html'
})
export class TableComponent  
{
    values : TableData[] = [];
    constructor() { }

    generate_table(number, size) 
    {
       this.values = [];
       for(var i = 1; i <= size; i ++) 
       {
          this.values.push( { value : number, index : i , result : i * number });
       }
    } // function
} // class 

