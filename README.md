# Voice Search

This is a React application that utilizes speech recognition to perform voice searches using the Google Custom Search API.

## Features

- Speech recognition functionality allows users to perform searches using their voice.
- Displays search results from the Google Custom Search API.
- User-friendly interface with buttons to control speech recognition and reset the transcript.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`

## Usage

1. Obtain a Google Custom Search API key and custom search engine ID.
2. Replace the placeholders with your API key and custom search engine ID in the `getSearchResult` function in the `Dictaphone` component.
3. Start the development server: `npm start`
4. Open the app in your browser: `http://localhost:3000`

## Dependencies

- axios: version "^1.4.0"
- react: version "^18.2.0"
- react-dom: version "^18.2.0"
- react-speech-recognition: version "^3.10.0"
- @fortawesome/react-fontawesome: version "^0.2.0"

## Resources

- [React Documentation](https://reactjs.org/docs)
- [axios Documentation](https://axios-http.com/docs/intro)
- [react-speech-recognition Documentation](https://www.npmjs.com/package/react-speech-recognition)
- [Google Custom Search API Documentation](https://developers.google.com/custom-search)

## License

[MIT](LICENSE)
