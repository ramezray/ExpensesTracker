import React from "react";
import Jan from "./AllTabs/JanTab";
import Feb from "./AllTabs/FebTab";
import March from "./AllTabs/MarTab";
import April from "./AllTabs/AprTab";
import May from "./AllTabs/MayTab";
import June from "./AllTabs/JuneTab";
import July from "./AllTabs/JulyTab";
import Aug from "./AllTabs/AugTab";
import Sep from "./AllTabs/SepTab";
import Oct from "./AllTabs/OctTab";
import Nov from "./AllTabs/NovTab";
import Dec from "./AllTabs/DecTab";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Jan
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Feb
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              March
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "4" })}
              onClick={() => {
                this.toggle("4");
              }}
            >
              April
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "5" })}
              onClick={() => {
                this.toggle("5");
              }}
            >
              May
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "6" })}
              onClick={() => {
                this.toggle("6");
              }}
            >
              June
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "7" })}
              onClick={() => {
                this.toggle("7");
              }}
            >
              July
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "8" })}
              onClick={() => {
                this.toggle("8");
              }}
            >
              August
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "9" })}
              onClick={() => {
                this.toggle("9");
              }}
            >
              September
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "10" })}
              onClick={() => {
                this.toggle("10");
              }}
            >
              October
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "11" })}
              onClick={() => {
                this.toggle("11");
              }}
            >
              November
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "12" })}
              onClick={() => {
                this.toggle("12");
              }}
            >
              December
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Jan />
          </TabPane>
          <TabPane tabId="2">
            <Feb />
          </TabPane>
          <TabPane tabId="3">
            <March />
          </TabPane>
          <TabPane tabId="4">
            <April />
          </TabPane>
          <TabPane tabId="5">
            <May />
          </TabPane>
          <TabPane tabId="6">
            <June />
          </TabPane>
          <TabPane tabId="7">
            <July />
          </TabPane>
          <TabPane tabId="8">
            <Aug />
          </TabPane>
          <TabPane tabId="9">
            <Sep />
          </TabPane>
          <TabPane tabId="10">
            <Oct />
          </TabPane>
          <TabPane tabId="11">
            <Nov />
          </TabPane>
          <TabPane tabId="12">
            <Dec />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
