import type { Config } from "@netlify/functions"

const GAMESDB_ENDPOINT = 'https://api.thegamesdb.net/';
const GAMSEDB_PUBLIC_APIKEY =
  '868ff7ffc22bb9b7679d2502c134d1c47613a93cb757b34397448ca5faf4ab5a';

export default async (req: Request /* , context: Context */): Promise<Response> => {
  const { url } = req;
  const path = url.split('/thegamesdb/')[1];
  const newUrl = `${GAMESDB_ENDPOINT}${path}&apikey=${GAMSEDB_PUBLIC_APIKEY}`;
  const { body, status, statusText, headers: originalResHeaders } = await fetch(newUrl);
  const resHeaders = { ...originalResHeaders };
  if (req.referrer.includes('//localhost')) {
    resHeaders['Access-Control-Allow-Origin'] = req.referrer;
  }
  console.log(resHeaders)
  return new Response(body, { status, statusText, headers: resHeaders });
}

export const config: Config = {
  path: "/thegamesdb/*"
};