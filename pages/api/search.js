import { search } from "../../services/search";



export default async function handler(req, res) {
  const { q } = req.query 

  const { results } = await search({query: q})

  return res.status(200).json(results);
}
