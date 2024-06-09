import { ValueOf } from "next/dist/shared/lib/constants";

const Navbar = [
  "menu-logo-clicked",
  "menu-pricing-clicked",
  "menu-enterprise-clicked",
  "menu-features-clicked",
  "menu-help-clicked",
  "menu-usecase-clicked",
  "menu-changelog-clicked",
  "menu-join-waitlist-clicked",
] as const;

const HeroSection = ["get-early-access-CTA-clicked"] as const;

const WaitListSection = [
  "join-waitlist-input-box-clicked",
  "waitlist-email-submit",
  "waitlist-email-submitted",
  "waitlist-email-submit-failed",
] as const;

const Footer = [
  // Product
  "footer-features-clicked",
  "footer-pricing-clicked",
  "footer-enterprise-clicked",
  "footer-usecase-clicked",
  "footer-changelog-clicked",
  "footer-contact-us-clicked",
  "footer-about-clicked",
  "footer-help-clicked",
  // Legal
  "footer-privacy-policy-clicked",
  "footer-terms-of-service-clicked",
  "footer-refund-policy-clicked",
  // Status
  "footer-roadmap-clicked",
  "footer-book-a-demo-clicked",

  // Social
  "footer-twitter-clicked",
  "footer-github-clicked",
  "footer-linkedin-clicked",
] as const;

const PricingPage = [
  "pricing-free-CTA-choose-plan-clicked",
  "pricing-pro-CTA-choose-plan-clicked",
  "pricing-business-CTA-choose-plan-clicked",
  "pricing-monthly-tab-clicked",
  "pricing-yearly-tab-clicked",
  "pricing-enterprise-contact-us-clicked",
] as const;

const EnterprisePage = [
  "enterprise-form-submit",
  "enterprise-form-submitted",
  "enterprise-form-failed",
] as const;

const HelpPage = [
  "help-overview-clicked",
  "help-team-clicked",
  "help-workspace-clicked",
  "help-collection-clicked",
  "help-page-clicked",
  "help-role-clicked",
  "help-plan-clicked",
] as const;

const HelpCategoryPage = [
  "help-category-article-clicked",
  "help-all-categories-clicked",
] as const;

const HelpArticlePage = [
  "help-sub-categories-clicked",
  "help-article-category-clicked",
  "help-article-feedback-clicked",
  "help-article-author-profile-clicked",
  "help-article-toc-clicked",
  "help-article-contact-us-link-clicked",
] as const;

const UsecasePage = [
  "usecase-article-clicked",
  "usecase-all-usecase-clicked",
] as const;

const ChangelogPage = [
  "changelog-twitter-subscribe-clicked",
  "changelog-rss-feed-clicked",
  "changelog-article-clicked",
] as const;

const ChangelogArticlePage = [
  "changelog-article-back-to-changelog-clicked",
  "changelog-article-author-profile-clicked",
  "changelog-article-social-share-clicked",
  "changelog-article-banner-image-clicked",
  "changelog-article-image-clicked",
  "changelog-article-next-article-clicked",
] as const;

const TrackingEvents = {
  Navbar,
  HeroSection,
  WaitListSection,
  Footer,
  PricingPage,
  EnterprisePage,
  HelpPage,
  HelpCategoryPage,
  HelpArticlePage,
  UsecasePage,
  ChangelogPage,
  ChangelogArticlePage,
};

export type TrackingEvents = ValueOf<typeof TrackingEvents>;
