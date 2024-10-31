export const homeQuery = `*[_type == "home"][0] {
  title,
  siteTitle,
  "heroSection": heroSection {
    header,
    paragraph,
    images[] {
      asset-> {
        _ref,
        url
      }
    },
    ctaLabel
  },
  "contact": contact {
    header,
    paragraph,
    email,
    phoneNumber
  },
  "galerie": galerie {
    title,
    description,
    images[] {
      asset-> {
        _ref,
        url
      },
      alt
    }
  },
  "services": services {
    title,
    description,
    items[] {
      img {
        asset-> {
          _ref,
          url
        }
      },
      header,
      paragraph,
      ctaLabel
    }
  },
  "partenaire": partenaire {
    title,
    description,
    images[] {
      asset-> {
        _ref,
        url
      },
      alt
    }
  }
}`;