//--Libraries-------------------------
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//--Styles-------------------------
import "./directory.styles.scss";
//--Components---------------------
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

function Directory({ sections }) {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
}

const mapState = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapState)(Directory);
