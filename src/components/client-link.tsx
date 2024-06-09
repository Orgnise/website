"use client";
import { TrackingEvents } from "@/lib/utility/analytics/events-type";
import { track } from "@/lib/utility/analytics/tracking";
import Link from "next/link";
import * as React from "react";

interface LinkProps {
  className?: string;
  href: string;
  children?: React.ReactNode;
  rel?: string;
  target?: React.HTMLAttributeAnchorTarget;
  trackEvent?: {
    event: TrackingEvents[number];
    data?: { [key: string]: any };
  };
}

const ClientLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={className}
        ref={ref}
        rel={props.rel}
        target={props.target}
        onClick={(e) => {
          if (props.trackEvent) {
            track(props.trackEvent.event, props.trackEvent.data);
          }
          e.stopPropagation();
        }}
        {...props}
      />
    );
  },
);
ClientLink.displayName = "ClientLink";

export { ClientLink };
