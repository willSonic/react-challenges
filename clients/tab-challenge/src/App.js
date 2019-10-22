import React from 'react';
import PropTypes from "prop-types";

import "./App.css";

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

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array)
  };

  constructor(props) {
    super(props);

    this.state = {
      currentActiveTab: tabData[0].tabName
    };
  }

  handleTabSelected = tab => {
    this.setState({ currentActiveTab: tab });
  };

  render() {
    return (
      <Tabs>
        {tabData.map((item, index) => {
          return (
            <Tab
              key={index + item.tabName}
              label={item.tabName}
              activeTabSelect={this.handleTabSelected}
            />
          );
        })}
      </Tabs>
    );
  }
}


class App extends React.Component {


  render() {
    return (
       <Tabs/>
    )
  }
}
export default App;
