import { IGlobalModalMessageRef } from "@src/common";
import { RefObject } from "react";

let modalRef: RefObject<IGlobalModalMessageRef | null> | null = null;

export const ModalMessageProvider = {
  setRef: (ref: RefObject<IGlobalModalMessageRef | null>) => {
    modalRef = ref;
  },
  showModalMsg: (msg: Parameters<IGlobalModalMessageRef["show"]>[0]) => {
    modalRef?.current?.show(msg);
  },
};

export const returnFormTitleNDesc = (index: number) => {
  if (index === 0) {
    return {
      title: "Add Teams",
      desc: "Select one one or more teams. These will appear in your favourite tab",
    };
  } else if (index === 1) {
    return {
      title: "Add Competitions",
      desc: "Select one one or more competitions. These will appear on the top of your scores tab.",
    };
  } else if (index === 2) {
    return {
      title: "Push Notification",
      desc: "Select the types of notifications you would like to receive for your favorites.",
    };
  }
};
