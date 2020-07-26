//--Dependency-----------------------
import React from "react";

//--Component------------------------
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shop.selector";
// import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match, collection }) => {
  console.log(collection);
  return (
    <div className="category">
      <h2>Hello</h2>
    </div>
  );
};

const mapState = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapState)(CollectionPage);
