'use strict';

const e = React.createElement;

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInfo() {
    const info = { profile: 'TARGIR13', orga: 110 };
    return e('p', {}, `Profile: ${info.profile} Organization: ${info.orga}`);
  }
  render() {
    //const { orga, profile } = this.props;
    return e('div', {}, this.renderInfo());
  }
}

const domContainer = document.querySelector('#holder');
ReactDOM.render(e(Info), domContainer);
