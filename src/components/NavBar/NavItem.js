import React from "react";
import PropTypes from "prop-types";
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function NavItem({ children, ...props }) {
  return (
    <Link variant="menu" as={NavLink} {...props}>
      {children}
    </Link>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
};

export default NavItem;
