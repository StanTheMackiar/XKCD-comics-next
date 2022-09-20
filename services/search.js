import algoliasearch from "algoliasearch";

const client = algoliasearch("HEHY1YVW40", "6b6552586805fca2e6680510acdf1bd2");
const index = client.initIndex("comics");

  export const search = async ({query}) => {
    const { hits } = await index.search(query, {
        attributesToRetrieve: ["id", "title", "img", "alt"],
        hitsPerPage: 10,
      });
      return { results: hits }
  }