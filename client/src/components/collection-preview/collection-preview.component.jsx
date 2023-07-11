import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";
import { PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, id}) => {
  const navigate = useNavigate();

  const { path, route } = useParams();

  return (
    <div className="flex flex-column w-screen flex-wrap items-center p-[14px] mt-24">
      <h1
        className="relative w-screen text-7xl font-thin mb-[25px] -ml-5 lg:-mt-36 p-0 lg:p-12 cursor-pointer font-sans h-8 bg-gradient-to-l from-rose-800/5 to-rose-900 flex flex-row items-start justify-start lg:items-center text-rose-50 hover:text-rose-500 text-left"
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
