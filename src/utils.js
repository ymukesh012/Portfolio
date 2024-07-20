export const getImageUrl=(path)=>{
    return new URL(`assests/${path}`,import.meta.url).href;
}

/*Explanation:
new URL() Constructor:

The new URL() constructor is used to create a new URL object. It takes two parameters:
The first parameter ('assests/${path}') represents the relative path to the image file. Here, assests/ is likely a directory where your image files are stored, and ${path} is the specific filename or path to the image file relative to the current module.
The second parameter (import.meta.url) provides the base URL against which the first parameter is resolved. import.meta.url gives you the URL of the current module's script. This is useful for resolving paths relative to the current module's location.
.href Property:

The .href property of the URL object returns the full URL string.
How to Use:
To use this function, you would typically call getImageUrl with the path parameter set to the relative path of the image file you want to get the URL for.
Example:

javascript
Copy code
import { getImageUrl } from './utils'; // Assuming utils.js is where getImageUrl is defined

const imageUrl = getImageUrl('example.jpg');
console.log(imageUrl);
// Output would be something like: "http://example.com/assests/example.jpg"*/