import { test, expect } from '@playwright/test';

test('GET /posts/1 should return a valid post', async ({ request }) => {

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const headers = response.headers();
  expect(headers['content-type']).toContain('application/json');

  const body = await response.json();

  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');

  expect(typeof body.userId).toBe('number');
  expect(typeof body.id).toBe('number');
  expect(typeof body.title).toBe('string');
  expect(typeof body.body).toBe('string');

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title.length).toBeGreaterThan(0);
  expect(body.body.length).toBeGreaterThan(0);
});