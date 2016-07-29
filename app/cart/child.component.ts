/**
 * Created by namita on 7/28/16.
 */

import {Component} from '@angular/core';
import {Item} from '../items/item';


@Component({
    selector: 'child-component',
    template: `
    <div class="col-md-4 box mt14">
        <span class="fs4">Cart</span>
        <div>
            <ul class="items col-md-12">
                <li *ngFor="let item of items let index=index">
                    <span class="text col-md-6">{{item.name}}</span>
                    <span class="text col-md-2">{{item.quantity}}</span>
                   <span class="glyphicon glyphicon-plus col-md-1 smallIcon" (click)="addToCart(item)"></span>
                   <span class="glyphicon glyphicon-minus col-md-1 smallIcon" (click)="editItem(item,index)"></span>
                   <span class="glyphicon glyphicon-trash col-md-1 smallIcon" (click)="removeItem(item,index)"></span>
                   <span class="col-md-1"></span>
                </li>
            </ul>
            <div *ngIf="!items.length">
                Your cart is empty!
            </div>
        </div>
    </div>
    `
})

export class ChildComponent {
    private items = [];
    private obj:Object = {};
    addToCart(item){
        var _this = this;
        if(_this.obj[item.id]){
            _this.obj[item.id]+=1;
            _this.items.forEach(function(value,key){
                if(value.id==item.id){
                    value.quantity = _this.obj[item.id];
                }
            })
        }else{
            _this.obj[item.id] = 1;
            item.quantity = _this.obj[item.id];
            _this.items.push(item);
        }
    }
    editItem(item,index){
        var _this = this;
        if(_this.obj[item.id]==1){
            delete _this.obj[item.id];
            _this.items.splice(index,1);
        }else{
            _this.items[index].quantity=_this.items[index].quantity-1;
        }
    }

    removeItem(item,index){
        var _this=this;
        delete _this.obj[item.id];
        _this.items.splice(index,1);

    }

}