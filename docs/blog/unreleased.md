# 2019-12-?? (1.1.0)

## Remote data

So far, all widgets were fully local, i.e., they did not require any remote data. This makes the possibilities rather limited. I have finally designed the architecture to support fetching remote data, and I have implemented the first widget as an example: [Tip of the Day — Chemical Elements](TODO). TODO: TOTD

I had to rethink some architectural decisions. First, I have replaced `redux-observable` with [redux-saga](https://github.com/redux-saga/redux-saga). I was hoping to gain some more experience with RxJS (which I did), but it felt too complicated to implement the easiest fetch/success/error flow. I find the procedural way of redux-saga more natural and easy to understand.

Second, I have removed the shared state completely. It was meant as a performance optimization for widgets with shared data, like the new Chemical Elements widget. The drawback was having to handle the state at different places, making the implementation more complicated than necessary. Instead, now every widget has its own (sub-)state. I might implement some request-level caching in the future to prevent fetching the same resource twice.
