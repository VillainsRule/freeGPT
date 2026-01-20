export const commonScreenSizes = [
    1920 + 1080,
    1366 + 768,
    1440 + 900,
    1536 + 864,
    1280 + 720,
    1600 + 900,
    2560 + 1440,
    3840 + 2160
];

export const commonHeapSizeLimits = [
    2147483648,
    4294967296,
    8589934592,
    17179869184,
    34359738368
];

export const hardwareConcurrencyToHeapSizeLimit = {
    2147483648: 2,
    4294967296: 4,
    8589934592: 8,
    17179869184: 16,
    34359738368: 32
}

export const latestChromeVersion = '144';
export const latestFirefoxVersion = '146';

export const commonUserAgents = [
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${latestChromeVersion}.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${latestChromeVersion}.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${latestChromeVersion}.0.0.0 Safari/537.36`,
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${latestChromeVersion}.0.0.0 Safari/537`,
    `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${latestFirefoxVersion}.0) Gecko/20100101 Firefox/${latestFirefoxVersion}.0`,
    `Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:${latestFirefoxVersion}.0) Gecko/20100101 Firefox/${latestFirefoxVersion}.0`,
    `Mozilla/5.0 (X11; Linux x86_64; rv:${latestFirefoxVersion}.0) Gecko/20100101 Firefox/${latestFirefoxVersion}.0`
];