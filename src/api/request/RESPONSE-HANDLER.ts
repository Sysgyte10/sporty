import { ModalMessageProvider, showFlashMsg } from "@src/helper/ui-utils";
import { APILogger } from "@src/helper/utils";

export interface IResponseHandler {
  type?: "flash" | "modal";
  status: 200 | 401 | 500 | 422;
  success: boolean;
  title: string;
  message: string;
}

const statusToMsgType: Record<number, "SUCCESS" | "ERROR" | "FAILED"> = {
  200: "SUCCESS",
  401: "ERROR",
  422: "ERROR",
  500: "FAILED",
};

export const RESPONSE_HANDLER = ({
  type,
  status,
  success,
  title,
  message,
}: IResponseHandler) => {
  const msgType = statusToMsgType[status] || "ERROR";

  if (type === "flash") {
    showFlashMsg({
      msgType,
      title: title,
      description: message,
    });
  } else if (type === "modal") {
    ModalMessageProvider.showModalMsg({
      msgType,
      title: title,
      description: message,
    });
  }
  APILogger(status, success, title, message);
};
