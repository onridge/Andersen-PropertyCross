import { throttle } from '../throttle';

describe('/utils/throttle', () => {
    beforeAll(() => {
        return jest.useFakeTimers();
    });

    afterAll(() => {
        return jest.useRealTimers();
    });

    const callback = jest.fn();
    const throttledFunc = throttle(1000, callback);

    it('In 100 times use for 1 seconds, called one times', () => {
        expect(callback).toBeCalledTimes(0);

        for (let i = 0; i < 100; i++) {
            throttledFunc();
        }

        expect(callback).toBeCalledTimes(1);
    });

    it('Waits 1 second before start callback', () => {
        expect(callback).toBeCalledTimes(1);
        throttledFunc();
        expect(callback).toBeCalledTimes(1);

        jest.runOnlyPendingTimers();
        expect(callback).toBeCalledTimes(2);
    });
});
