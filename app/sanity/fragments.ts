import groq from "groq";

export const IMAGE_FRAGMENT = groq`
  image {
    alt,
    asset->{
      _id,
      _type,
      altText,
      description,
      metadata {
        blurHash
      },
    }
  }
`;

// "asset": {
//       "_id": "image-a62ddcb4ecfad54fd080b464547164b39408a87e-600x600-png",
//       "_updatedAt": "2024-07-06T16:54:24Z",
//       "path": "images/qhuljurv/production/a62ddcb4ecfad54fd080b464547164b39408a87e-600x600.png",
//       "assetId": "a62ddcb4ecfad54fd080b464547164b39408a87e",
//       "mimeType": "image/png",
//       "sha1hash": "a62ddcb4ecfad54fd080b464547164b39408a87e",
//       "metadata": {
//         "dimensions": {
//           "_type": "sanity.imageDimensions",
//           "width": 600,
//           "aspectRatio": 1,
//           "height": 600
//         },
//         "isOpaque": true,
//         "blurHash": "eNHV3NeUXjt7VaD}M_IUWUxb_4kSsqRkW.9Ys;afRjWUIToMjGWAt7",
//         "_type": "sanity.imageMetadata",
//         "palette": {
//           "lightVibrant": {
//             "background": "#c8dd9c",
//             "_type": "sanity.imagePaletteSwatch",
//             "foreground": "#000",
//             "title": "#000",
//             "population": 0
//           },
//           "darkVibrant": {
//             "foreground": "#fff",
//             "title": "#fff",
//             "population": 1.73,
//             "background": "#566a18",
//             "_type": "sanity.imagePaletteSwatch"
//           },
//           "lightMuted": {
//             "population": 1.92,
//             "background": "#caaf9c",
//             "_type": "sanity.imagePaletteSwatch",
//             "foreground": "#000",
//             "title": "#fff"
//           },
//           "vibrant": {
//             "foreground": "#fff",
//             "title": "#fff",
//             "population": 5.79,
//             "background": "#6d8a2f",
//             "_type": "sanity.imagePaletteSwatch"
//           },
//           "dominant": {
//             "foreground": "#fff",
//             "title": "#fff",
//             "population": 5.79,
//             "background": "#6d8a2f",
//             "_type": "sanity.imagePaletteSwatch"
//           },
//           "_type": "sanity.imagePalette",
//           "darkMuted": {
//             "background": "#495832",
//             "_type": "sanity.imagePaletteSwatch",
//             "foreground": "#fff",
//             "title": "#fff",
//             "population": 2.98
//           },
//           "muted": {
//             "foreground": "#fff",
//             "title": "#fff",
//             "population": 3.19,
//             "background": "#8aa05b",
//             "_type": "sanity.imagePaletteSwatch"
//           }
//         },
//         "hasAlpha": true,
//         "lqip": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFQklEQVQ4jR3Te1eSCQKA8ffr7Nk9jbtzymrdSZ1RoRJv4yUMQRFB7ggUgspdkIuKSCSVt8wt00nQRBFvKOrYVOe0zc7O2Q/z7Nn5As/5/fMIqkcVyI1/RmH6BoPr79iDNfim2kg9M5GZsxKPKLG7G9G4bzPoq8QSqsY+IcYZbccd7yWQUBOeHSSU1BNO2RGUpmv0GSoYtN1k2PcDnlgDgUQbkZl+JmNqJoIKvFEZI3EpozEZwYSG8IyWaNJIaEaHMyrFHmrDFVEQTNgRtMa/oR+q4tGIiGCkjamnUhLzSqKzKiYjajIzVpZXfKysTbLwaprk8wBTaSdTKTueWC86z1207vuMTAwQm3EjDFhuYhwW4fA2E4x1kXzRz9NXBtLzNpbTLt4vRjnNvuCX4xzl4x1W1zKkXoSYTjsYDknRjN5lNK5mbjHKwsIswkPLdbROETZPE96JdhIZJaklPZnnDtbSfvLpMMcLSS7fLnOeW6Owtcb7/AYraym8cTWPx+U8X53i4HiHQmELQWq8iW5YxCO3BO94G9FkDxPJPsKBAaJ2DVMWNXMOI3POIZ4FRsm/XeXrl8+cXRSYWwoQSVqZX4nzvviGo/IWQpfmNmZbA4GxJsKBNvyhDpyeH7HpWtF2NGLqbCagljPWL8OlUjA/FeGiVKBUzrG0FiTyRIU38ZBgpo/pV0aEQeMdnNY6go/FBF3NuJzN2C2NOAZacMhaGVN0ETcoiRv6iehVPBmz8jLj4+nyEP65NuxTdzBEKjFEbmCK3UKY9LQTcTXjNNZh0dRjNtzDoW1kXPMj03oZ8UEZEwMyEiYVzx/ryAyrmfRJccZqMMQq0EWvoY9VYIh8iylcifDM20Pc0YFNXU9/93cM9NZiGxDhVzURVXcyruzEK+/4I5o0KUnZegi772KLfIsh9hf0kQq0oetoA7fQe6oRJi0t+HVNDPU20NdZhbTzBr09NzErqnHK7+HqbmakuxWfopPxgQeMWzvwBBqwxyqxRG6g81XR56qif/QWmrEqBEdPLY5eEWZZA90ttxHfv4a49U90d/8V88M6hh+2MNbTjl/5AI+6C/tQM0N+MUOhesxeEZphMXL7HQbc19EHbyBI71eiaq+mv6OWJlElNd9/Q11jBTJ5FRb5PaxdEqydTTyStmLva0NnkqAe+f8d9zC4mtA6JPQ7qtH7rzMUuYVQU1tBa+M/UHSKkT+QoFR0YjGrCLjNjOoUqJtE9NRX0yuuxSSVYBvqxujuQuuWYBhrxuxtx+BrxBT4HrO/BkGmbMNm1zIdDfAiPcNiJs0/lxfYWF1mNuTH3N1BT90dlPXfYe+SMO4wEJt1E05b8SfVeJIqHJPdWMMtmDxihI2fVjg62OXj5TmXpyXy2SzZ9XXyuSxvV14S94xhk3ZgafyB0S4J8WE7b1ZX2Cu+Y7uwzOvcDKnVEfxPVDgm2hF+//dX/vvbb/zn61c+nF+wk82SW1+nsL3F7vY2b1ZWSXg8+ORdjPe0k3KPsrme5eryZ758uuLjL6eclN/zdnuO2QUXwu+//sq/Pn/m09UHLkqn5HM5djbfcbibp7ibZ2tzi6VnC0w7HSTMWuZjMd5tbFE6PuPjz1d/IK4uzjkvH7F/kEX48ukzVxeXnJ+eUT4psb+zQ2F7m+P9Aod7e+TeZVmYf8lsPEHKHyAzneL16032Ckecn5Y5OTjkcH+f0tER5dMSwserD5yXzigdHXN2dMJJ8YDjYpHS4SEnxSLbm1mWFl+RmVskNZVmZnqOpZUNtncOOCuVOTk8Yi+fp7C3S3G/wP8ARkLwcqzvP+wAAAAASUVORK5CYII="
//       },
//       "_type": "sanity.imageAsset",
//       "_createdAt": "2024-07-06T16:54:24Z",
//       "_rev": "03e0yCpLbFmDVvsw4Iib5C",
//       "size": 638676,
//       "extension": "png",
//       "uploadId": "Fb9XGjWuNoSkMqEgqD5vbQm6DJIKFJky",
//       "originalFilename": "drdahada.png",
//       "url": "https://cdn.sanity.io/images/qhuljurv/production/a62ddcb4ecfad54fd080b464547164b39408a87e-600x600.png"
//     }
