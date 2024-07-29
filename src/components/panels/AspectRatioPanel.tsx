"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { AspectRatioResource } from "../entity/AspectRatioResource";

export const AspectRatioPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedElement = store.selectedElement;

  return (
    <>
      <div className="text-sm text-white px-[16px] pt-[16px] pb-[8px] font-semibold">
        Aspect Ratio
      </div>
      {selectedElement ? (
        <AspectRatioResource editorElement={selectedElement} />
      ) : null}
    </>
  );
});