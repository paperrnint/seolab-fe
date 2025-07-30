import { ApiError } from '../fetch/ApiError';

// overload
export function mapToServerActionResult(apiError: ApiError): {
  message: string;
  status: number;
  name: string;
};
export function mapToServerActionResult<T extends Record<string, string | number | boolean>>(
  apiError: ApiError
): {
  message: string;
  status: number;
  name: string;
  data: Omit<T, 'message'>;
};

export function mapToServerActionResult<T extends Record<string, string | number | boolean> = never>(
  apiError: ApiError
) {
  let parsedErr = null;
  try {
    parsedErr = JSON.parse(apiError.message) as T;
    console.log('API 에러 파싱됨:', parsedErr);
  } catch {
    console.log('API 에러 파싱 실패, 원본 사용:', apiError.message);
  }

  const result = {
    message: parsedErr?.message || apiError.message,
    status: apiError.status,
    name: apiError.name,
  };

  // T가 never가 아닐 때만 data 포함
  if (parsedErr && typeof parsedErr === 'object') {
    const { message, ...data } = parsedErr;

    if (Object.keys(data).length > 0) {
      return { ...result, data };
    }
  }

  return result;
}
