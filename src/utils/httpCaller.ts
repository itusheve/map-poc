import { z, ZodType } from 'zod';
import { BASE_URL } from './const';

export async function httpCaller<T>(
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  url: string,
  data?: any,
  schema?: ZodType<T>
): Promise<{ err: z.ZodError<T> | string; data: null } | {data: T , err : null }> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
      return { err: `HTTP error! Status: ${response.status}`, data: null };
    }

    const responseData = await response.json();

    // If a schema is provided, validate the data
    if (schema) {
      const parsed = schema.safeParse(responseData);
      if (!parsed.success) {
        return { err: parsed.error, data: null };
      }
      return { err: null, data: parsed.data };
    }

    return { err: null, data: responseData };
  } catch (error) {
    return { err: 'HTTP ERROR CONNECTION ISSUE', data: null };
  }
}


// Define a Zod schema
const userSchema = z.object({
    id: z.number(),
    name: z.string(),
  });
  
export async function t() {
    const { err, data } = await httpCaller('GET', 'https://api.example.com/user/1', undefined, userSchema);
    console.log(data); // { id: 1, name: 'John' }
    console.log(err); // null
    if (data) {
        err
    }
}