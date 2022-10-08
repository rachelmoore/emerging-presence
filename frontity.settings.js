const settings = {
  "name": "emerging-presence",
  "state": {
    "frontity": {
      "url": "http://elunawp.technocowgirl.com",
      "title": "Emerging Presence",
      "description": "Psychospiritual Coaching and Transpersonal Guiding by Eluña Antle"
    }
  },
  "packages": [
    {
      "name": "eluna-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://elunawp.technocowgirl.com",
          "api": "http://elunawp.technocowgirl.com/wp-json", 
          "postTypes": [
            {
              type: "introduction",
              endpoint: "introduction",
              archive: "/introduction_cat"
            }
          ],
          taxonomies: [
            {
              taxonomy: "introduction_cat",
              endpoint: "introduction_cat",
              postTypeEndpoint: "introduction"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
