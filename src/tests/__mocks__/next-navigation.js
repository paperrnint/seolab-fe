export const useRouter = () => ({
  push: (url) => {
    console.log('Router push:', url);
  },
  replace: (url) => {
    console.log('Router replace:', url);
  },
  refresh: () => {
    console.log('Router refresh');
  },
  back: () => {
    console.log('Router back');
  },
  forward: () => {
    console.log('Router forward');
  },
  prefetch: (url) => {
    console.log('Router prefetch:', url);
  },
});

export const useParams = () => ({
  id: global.storybookMockParams?.id || 'storybook-mock-id',
});

export const useSearchParams = () => ({
  get: (key) => {
    const mockParams = global.storybookMockSearchParams || {};
    return mockParams[key] || null;
  },
});

export const usePathname = () => global.storybookMockPathname || '/book/storybook-mock-id';
