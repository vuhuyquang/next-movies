import { Component } from 'react';

const DefaultOnSSR = () => <span></span>;

class NoSSR extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      canRender: false,
    };
  }

  componentDidMount() {
    this.setState({ canRender: true });
  }

  render() {
    const { children, onSSR = <DefaultOnSSR /> } = this.props;
    const { canRender } = this.state;

    return canRender ? children : onSSR;
  }
}

export default NoSSR;
