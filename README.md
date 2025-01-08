# Expo Go Custom Font Crash

This repository demonstrates a bug in Expo Go where using custom fonts can lead to app crashes or blank screens. The issue is inconsistent and lacks clear error messages, making debugging challenging.  The `bug.js` file reproduces the problem, while `bugSolution.js` offers a potential workaround (though not a perfect solution). 

**Steps to Reproduce:**
1. Clone this repository.
2. Run `expo start`.
3. Open the app in Expo Go on a physical device or emulator.
4. Observe the app crash or blank screen (inconsistently).

**Potential Solution:** (See `bugSolution.js`)
The solution attempts to mitigate the issue by using a fallback font, although the root cause remains unclear.  Contributions to determine the root cause and a more robust fix are welcome.