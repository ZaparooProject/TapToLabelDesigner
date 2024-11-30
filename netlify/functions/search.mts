import type { Config } from "@netlify/functions"
import { prepareCorsHeaders } from '../data/utils';
import { apiDefinitions, availablePlatforms } from '../data/apiProviderDefinitions.mjs';
const noop = () => {};
const SEARCH_PLATFORM: availablePlatforms = availablePlatforms.THEGAMESDB


// search games by name
export default async (req: Request /* , context: Context */): Promise<Response> => {
  const { url } = req;
  const parsedUrl = new URL(url);
  const searchParams = parsedUrl.searchParams
  const { getSearchURL = noop } = apiDefinitions[SEARCH_PLATFORM];
  const searchUrl = getSearchURL(
    searchParams.get("searchTerm") ?? "",
    searchParams.get("page") ?? "1",
    searchParams.get("platformId") ?? "",
  )
  const { body, status, statusText } = await fetch(searchUrl!.href);
  console.log({ searchUrl, body })

  const respHeaders = prepareCorsHeaders(req);

  return new Response(body, { status, statusText, headers: respHeaders });
}

export const config: Config = {
  path: "/api/search"
};