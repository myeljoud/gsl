import { activityType } from "./activity-type";
import { authorType } from "./authorType";
import { homeType } from "./homeType";
import { buttonType } from "./objects/button-type";
import { linkType } from "./objects/link-type";
import { portableTextType } from "./objects/portable-text-type";
import { seoType } from "./objects/seo-type";
import { videoType } from "./objects/video-type";
import { pageType } from "./page-type";
import { siteMetaType } from "./site-meta-type";
import { landingPage } from "./landingPage";
import { galerie } from "./galerieType";
import { partenaireType } from "./partenaireType";
import { logistiqueType } from "./logistiqueType";
import { contactType } from "./contactType";
export default [
  // Documents
  authorType,
  homeType,
  pageType,
  activityType,
  siteMetaType,
  galerie,
  landingPage,
  partenaireType,
  logistiqueType,
  contactType,

  // Objects
  portableTextType,
  seoType,
  videoType,
  buttonType,
  linkType,
];
