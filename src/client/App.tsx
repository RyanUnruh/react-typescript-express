import * as React from "react";
import List from "./List";

import './scss/app'

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      name: null
    };
  }

  async componentWillMount() {
    try {
      let r = await fetch("/api/hello");
      let name = await r.json();
      this.setState({ name });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className='container my-5'>
        <List></List>
      </main>
    );
  }
}

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;