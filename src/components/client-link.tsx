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
  ({ className, href, trackEvent, rel, target, children, ...rest }, ref) => {
    return (
      <Link
        href={href}
        className={className}
        ref={ref}
        rel={rel}
        target={target}
        onClick={(event) => {
          if (trackEvent) {
            track(trackEvent.event, trackEvent.data);
          }
          event.stopPropagation();
        }}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);
ClientLink.displayName = "ClientLink";

export { ClientLink };
