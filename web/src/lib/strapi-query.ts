export async function strapiQuery<T = object>(route: string): Promise<T> {
  const url = `${process.env.STRAPI_URL}/api/${route}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.STRAPI_TOKEN}`,
    }
  });
  const data = await res.json();
  return data;
}