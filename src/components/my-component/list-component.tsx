import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'list-component',
  styleUrl: 'list-component.css',
  shadow: false
})
export class ListComponent {

  @Prop() listdata: any;

  @Prop() renderkey: any;
  

  @Event() clickListElement: EventEmitter;

  componentDidLoad() {
    console.log(this.listdata);
  }

  render() {
    return (
      <div class="shopping-list">
        <h1>Stencil Web Component List</h1>
        <ul>
          {this.listdata.map((el: any) => <li onClick={() => this.onClickList(el)}>{el[this.renderkey]}</li>)}
        </ul>
      </div>);
  }

  public onClickList = (data) => {
    console.log('Click list', data);
    this.clickListElement.emit(data);
  }
}
