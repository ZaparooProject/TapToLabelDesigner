import { Platform } from '../../netlify/data/gamesDbPlatforms';
import type { SearchResults, SearchResult, ResultImage } from '../../netlify/apiProviders/types.mjs';
import { SEARCH_PAGESIZE } from '../../netlify/apiProviders/constants.mts';

const SEARCH_ENDPOINT = '/api/search';
const GAMESDB_IMAGE_ENDPOINT = '/thegamesdb/v1/Games/Images';

export let platformsData: Platform[] = [];

export type ResultsForSearchUI = {
  games: SearchResult[];
  hasMore: boolean;
  count: number;
}

export const platformPromise = import('../../netlify/data/gamesDbPlatforms').then((data) => {
  const allPlatform = data.platforms['0'];
  const sortedValues = Object.values(data.platforms).slice(1).sort((valueA, valueB) => {
    return valueA.name > valueB.name ? 1 : -1;
  });
  sortedValues.unshift(allPlatform);
  platformsData = sortedValues;
  return {
    count: data.count,
    platforms: sortedValues,
  };
});

export async function fetchGameList(
  query: string,
  platform: Platform,
  page: string,
): Promise<ResultsForSearchUI> {
  const url = getGoodUrl(SEARCH_ENDPOINT);
  url.searchParams.append('searchTerm', query);
  url.searchParams.append('page', page);
  if (platform.id !== 0) {
    url.searchParams.append('platformId', `${platform.id}`);
  }
  return (
    fetch(url, {
      mode: 'cors',
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res) => res.json() as Promise<SearchResults>)
      .then(async ({ results, count }) => {
          await platformPromise;
          return {
            count,
            hasMore: (count / SEARCH_PAGESIZE) > parseInt(page, 10) ? true : false,
            games: results,
          };
      })
      .catch((err) => {
        console.error(err);
        return {
          count: 0,
          hasMore: false,
          games: [] as SearchResult[],
        };
      })
  );
}

const getGoodUrl = (relativeUrl: string): URL => {
  const host = window.location.hostname;
  // let fqdn = 'https://design.zaparoo.org';
  let fqdn = 'https://deploy-preview-75--zaparoo-designer.netlify.app/';
  if (host.includes('netlify') || host.includes('design.zaparoo.org')) {
    fqdn = `${window.location.protocol}//${window.location.hostname}`;
  } 
  const url = new URL(
    relativeUrl,
    fqdn,
  );
  return url;
}

export async function fetchGameImages(gameId: string): Promise<{ images: ResultImage[] }> {
  const url = getGoodUrl(GAMESDB_IMAGE_ENDPOINT);
  url.searchParams.append('games_id', `${gameId}`);
  url.searchParams.append(
    'filter[type]',
    'fanart,banner,boxart,screenshot,clearlogo,titlescreen',
  );
  return (
    fetch(url, {
      mode: 'cors',
    })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res) => res.json() as Promise<any>)
      .then(() => {
        return {
          images: [] as ResultImage[],
        }
      })
      .catch((err) => {
        console.error(err);
        return {
          images: [] as ResultImage[],
        };
      })
  );
}

export async function getImage(cdnUrl: string, previousUrl: string): Promise<File> {
  const url = getGoodUrl('/imageProxy/');
  url.searchParams.append('imageUrl', `${cdnUrl}`);
  return fetch(url)
    .then((r) => r.blob())
    .then((blob) => new File([blob], previousUrl, { type: blob.type }));
}