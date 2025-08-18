export async function wpFetch<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const endpoint = process.env.WP_GRAPHQL_ENDPOINT
  if (!endpoint) throw new Error('Missing WP_GRAPHQL_ENDPOINT env var')
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    // Revalidate cache (ISR-like) for SSG routes that use fetch directly
    next: { revalidate: 60 }
  })
  if (!res.ok) {
    const txt = await res.text()
    throw new Error('WP fetch failed: ' + txt)
  }
  const data = await res.json()
  if (data.errors) {
    console.error(data.errors)
    throw new Error('GraphQL errors occurred')
  }
  return data.data
}
