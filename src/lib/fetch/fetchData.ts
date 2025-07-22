import { ApiError } from './ApiError';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function fetchData<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const url = typeof input === 'string' && input.startsWith('/') ? `${BASE_URL}${input}` : input;

  try {
    const res = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
    });

    if (!res.ok) {
      const err = await res.text();
      const apiError = new ApiError(err || `HTTP ${res.status}`, res.status, res);
      throw apiError;
    }

    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      return res.json();
    }

    const text = await res.text();
    return (text || {}) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    const networkError = new ApiError('Network connection failed', 503, undefined);
    throw networkError;
  }
}
