import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import { PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, id }) => {
  const navigate = useNavigate();

  const { path, route } = useParams();

  return (
    <div className="flex flex-column w-screen flex-wrap items-center p-[14px] mt-24">
      <h1
        className="w-screen text-3xl font-thin mb-[25px] ml-[60px] p-0 lg:p-5 cursor-pointer font-sans h-2 bg-gradient-to-r from-rose-800/5 to-rose-900 flex flex-row items-start justify-start lg:items-center hover:text-rose-300 text-left"
        onClick={() => navigate(`${path}/${route}`)}
      >
        {title}
      </h1>
      <PreviewContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </PreviewContainer>
    </div>
  );
};

export default CollectionPreview;
