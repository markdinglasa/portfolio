import { ProjectType, ToastType } from "../types";
import { displayToast } from "./toast";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import DevicesIcon from "@mui/icons-material/Devices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

export const formatDateToMMDDYY = (isoDateString: string) => {
  try {
    const date = new Date(isoDateString);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${month}/${day}/${year}`;
  } catch (error: unknown) {
    displayToast((error as Error).message, ToastType.error);
  }
};

export const formatDate = (isoDateString: string) => {
  try {
    const date = new Date(isoDateString);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    const hr = String(date.getHours() + 1).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    return `${year}${month}${day}${hr}${min}${sec}`;
  } catch (error: unknown) {
    displayToast((error as Error).message, ToastType.error);
  }
};

export const formatNumber = (Amount: number): string => {
  return Amount.toFixed(2); // Formats the number to 2 decimal places and returns it as a string
};

export const truncate = (text: string, no: number): string => {
  let str = text.slice(0, no);
  if (text.length !== str.length) str = `${str}...`;
  return str;
};

export const cn = (..._args: ClassValue[]) => {
  return twMerge(clsx(..._args));
};

export const RenderIcon = (type: ProjectType) => {
  const map = {
    "Mobile Application": PhoneAndroidIcon,
    "Desktop Application": ComputerIcon,
    "UI/UX": DesignServicesIcon,
    "Responsive Web Application": DevicesIcon,
  };
  return map[type];
};
