## Notes

I ended up using [Create React App](https://github.com/facebookincubator/create-react-app) to build this because I'm more familiar with the testing in this library.

Basically there are only two cmds you need to know: `npm start` and `npm test`

### testing

There's one test I've excluded by changing it() to xit(), I've done this because that test throws a network error occasionally, unfortunately I didn't have time to properly debug this error, so I've just stubed out the test. Normally I wouldn't do this but I just didn't have time.

Also, I've cut and paste the requirements you mentioned in regards to filtering stright into my tests. I hope this isn't confusing, I did this to make it clear what I was trying to test there.

