export default async function fetchApi<T>(url: string): Promise<T> {
  const response = fetch(url);
  const data = (await response).json();
  return data;
}