import { ValueOf } from "next/dist/shared/lib/constants";
import { TrackingEvents } from "./events-type";

const NEXT_PUBLIC_VERCEL_ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;
const NODE_ENV = process.env.NODE_ENV;

export interface GEventData {}

export const track = <TEventKey extends TrackingEvents[number]>(
  event: TEventKey,
  data?: Partial<GEventData> & { [key: string]: any },
) => {
  // @ts-ignore
  const gtag = window.gtag || ((() => {}) as any);
  if (!data) {
    data = {};
  }
  if (NEXT_PUBLIC_VERCEL_ENV === "production") {
    data.date = new Date().toISOString().split("T")[0];
    gtag("event", event, data);
  }
  if (NODE_ENV === "development") {
    console.info("Tracking event:", {
      event,
      data,
    });
  }
};
