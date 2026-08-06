# Unduck

DuckDuckGo's [bang](https://duckduckgo.com/bangs) redirects are too slow. Add the following URL as a custom search engine. See the instructions for [Chromium-based browsers](https://support.google.com/chrome/answer/95426?hl=en) or [Firefox](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox#w_add-a-custom-search-engine-in-settings_2). Enables all of DuckDuckGo's bangs to work, but much faster.

```
https://youfoundalpha.github.io/unduck?q=%s
```

## How is it that much faster?

DuckDuckGo does their redirects server side. Their DNS is...not always great. Result is that it often takes ages.

I solved this by doing all of the work client side. Once you've went to https://youfoundalpha.github.io/unduck once, the JS is all cache'd and will never need to be downloaded again. Your device does the redirects, not me.

## Credits

- [unduck](https://github.com/t3dotgg/unduck) by [Theo](https://x.com/theo)
