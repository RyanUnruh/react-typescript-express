import React from "react";
import { render } from "react-dom";

export default class List extends React.Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);
    this.state = {
      names: ["matt", "luke", "will"]
    };
  }

  render() {
    return;
    <ul className='list-group'>
      {this.state.names.map(name => {
        return <li className='list-group-item'>{name}</li>;
      })}
    </ul>;
  }
}

interface IListProps {}

interface IAppState {
  name: string;
}
