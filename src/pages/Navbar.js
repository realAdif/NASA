import { createMedia } from "@artsy/fresnel";
import React from "react";
import { Link } from "react-router-dom";

import { render } from "react-dom";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
    widescreen: 1920
  }
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
  const {
    children,
    leftItems,
    onPusherClick,
    onToggle,
    rightItems,
    visible
  } = props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems,  } = props;

  return (
    <Menu fixed="top" inverted>
      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}
    </Menu>
  );
};

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

class NavBar extends React.Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
      </div>
    );
  }
}

const leftItems = [
  { as: Link, content: "HOME", key: "home", to:'/' },
  { as: Link, content: "MARS",key: "mars", to: "/mars" }
];



    
export default function Navbar(){
    
    return(  
      <>
        <style>{mediaStyles}</style>
            <MediaContextProvider>
            <NavBar leftItems={leftItems}>
            </NavBar>
        </MediaContextProvider>
      </>
    )
}
