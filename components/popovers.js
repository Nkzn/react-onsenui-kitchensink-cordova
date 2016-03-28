const React = require('react');
const Ons = require('react-onsenui');

class Popovers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  showPopover() {
    this.setState({
      isOpen: true
    });

    setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 1000);
  }

  getTarget() {
    return this.refs.target;
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="left">
            <Ons.BackButton>Back</Ons.BackButton>
          </div>
        </Ons.Toolbar>

        <div style={{textAlign: 'center'}}>
          <br />
          <div
            onClick={this.showPopover.bind(this)}
            style={{
            width: '100px',
            height: '100px',
            display: 'inline-block',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            color: 'rgba(0, 0, 0, 0.6)',
            lineHeight: '100px'
          }} ref="target">
            Click me!
          </div>
        </div>
        <Ons.Popover
          direction="down"
          isOpen={this.state.isOpen}
          getTarget={this.getTarget.bind(this)}>
          <div style={{
            textAlign: 'center',
            lineHeight: '100px'
          }}>
            I'm a popover!
          </div>
        </Ons.Popover>
      </Ons.Page>
    );
  }
}

module.exports = Popovers;