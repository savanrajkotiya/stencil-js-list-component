import { Component, h, Listen } from '@stencil/core';
import { ListData } from "../../shared/data/listdata";


@Component({
    tag: 'root-component',
    shadow: true
})


export class RootComponent {
    public listData = ListData;

    render() {
        return (
            <div>
                <list-component listdata={this.listData} renderkey="name" ></list-component>
            </div>
        )
    }

    @Listen('clickListElement')
    clickListElement(event: CustomEvent) {
        console.log('this is event from child!', event);
    }
}