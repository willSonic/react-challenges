import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';
import * as serviceWorker from './serviceWorker';

const tabData = [
  { tabName: "Hats", tabContent: "Hats in all sizes and shapes" },
  { tabName: "Shirts", tabContent: "Shirts  in all sizes and patterns" }
];

class Tab extends React.Component {
  static propTypes = {
    activeTab: PropTypes.string,
    label: PropTypes.string,
    activeTabSelect: PropTypes.func
  };

  handleOnClick = () => {
    const { label, activeTabSelect } = this.props;
    activeTabSelect(label);
  };

  render() {
    const {
      props: { activeTab, label }
    } = this;

    let classStyleName = "tab-list-item";

    if (activeTab === "lable") {
      classStyleName += "tab-list-active";
    }

    return (
      <li className={classStyleName} onClick={this.handleOnClick}>
        {label}
      </li>
    );
  }
}




class App extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      activeTab: tabData[0].tabName,
    };
  }

  handleTabSelected= (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
    <div>
        {tabData.map((item, index) => {
          return (
          <>
              <ol>
                  <Tab
                    key={index + item.tabName}
                    label={item.tabName}
                    activeTabSelect={this.handleTabSelected}
                  />
              </ol>
              <div className="tab-content">
                { item.tabName === activeTab ? item.tabName : ''}
              </div>
            </>
          );
        })}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
