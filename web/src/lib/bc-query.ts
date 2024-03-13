export async function bcQueryV3<T = object>(route: string): Promise<T> {
  const url = `https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_HASH}/v3/${route}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": `${process.env.BIGCOMMERCE_ACCESS_TOKEN}`,
    }
  });
  const data = await res.json();
  return data;
}

export async function bcQueryV2<T = object>(route: string): Promise<T> {
  const url = `https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_HASH}/v2/${route}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": `${process.env.BIGCOMMERCE_ACCESS_TOKEN}`,
    }
  });
  const data = await res.json();
  return data;
}