import React from "react";
declare type useOutsideEventProps = {
    refs: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[];
    onClickOutside: () => void;
};
declare const useOutsideEvent: ({ refs, onClickOutside }: useOutsideEventProps) => void;
export default useOutsideEvent;
