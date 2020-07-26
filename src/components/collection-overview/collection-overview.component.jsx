//--Libraries--------------------
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//--Components-------------------
import { selectShopCollections } from "../../redux/shop/shop.selector";
import "./collection-overview.style.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest}></CollectionPreview>
      ))}
    </div>
  );
};

const mapState = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapState)(CollectionOverview);
