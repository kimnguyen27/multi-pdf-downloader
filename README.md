# PDF Downloader Extension

A simple Chromium extension that scans all open tabs for PDF files and downloads them when you click a button.

## Features

- Scans all open tabs to find PDF files.
- Downloads all PDF files from open tabs.
- Displays a loading spinner while downloading.
- Displays a success message once the downloads are complete.
- Handles both singular and plural forms for PDF count in the status message.

## Installation

To install this extension locally, follow these steps:

1. Clone or download this repository to your local machine.

    ```bash
    git clone <repository_url>
    ```

2. Open Chrome (or any Chromium-based browser).

3. Go to the Extensions page by navigating to `chrome://extensions/`.

4. Enable **Developer mode** by toggling the switch at the top right.

5. Click **Load unpacked**.

6. Select the folder where you downloaded/cloned this repository.

7. The extension will now be installed and ready to use!

## Usage

1. Click the extension's icon in your browser's toolbar.
2. The popup will appear with a **"Download PDFs"** button.
3. Click the **"Download PDFs"** button to start the process.
4. The extension will scan open tabs for PDF files.
5. Once PDFs are found, they will be downloaded automatically.

### After clicking the button:

- The status text will update based on the number of PDFs found.
- A spinner will appear while the PDFs are being downloaded.
- Once the downloads are complete, a success message will appear for 5 seconds, and the button will reset.

## Files

- `popup.html`: The popup UI for the extension.
- `popup.css`: The CSS for styling the popup.
- `popup.js`: The JavaScript that controls the extension's functionality.

## Contributing

Feel free to submit issues, pull requests, or suggestions. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
