import "@testing-library/jest-dom"

beforeAll(() => {
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
        root: null,
        rootMargin: '',
        thresholds: [],
        takeRecords: jest.fn(),
    }));
});

Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    value: jest.fn().mockResolvedValue(undefined),
})

Object.defineProperty(HTMLMediaElement.prototype, "pause", {
    configurable: true,
    value: jest.fn(),
})

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
    value: jest.fn(),
    writable: true,
})