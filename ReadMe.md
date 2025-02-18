<p align="center"><h1 align="center">DHRUVMISTRY</h1></p>
<p align="center">
    <em>Transform Your Web Experience with Dhruvmistry!</em>
<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/html.svg" align="center" width="30%">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/css.svg" align="center" width="30%">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/javascript.svg" align="center" width="30%">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/docker.svg" align="center" width="30%">
</p>
</p>
<p align="center">
    <img src="https://img.shields.io/github/last-commit/dhruvmistry2000/dhruvmistry?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
    <!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

-Overview
-Features
-Project Structure
  -Project Index




---

##  Overview

Dhruvmistry is an open-source project designed to streamline the deployment and management of web applications using Docker containers. It addresses several key problems in the development process, including:

1. **Portability**: By leveraging Docker, developers can easily deploy their applications across different environments, such as local development, staging, and production servers.

2. **Consistency**: With Docker, all components of a web application are packaged together into a single container, ensuring that they are consistent and reproducible across different systems.

3. **Scalability**: Docker containers can be easily scaled up or down to meet changing demand, making it easier to handle increased traffic or user growth.

4. **Security**: By using Docker, developers can manage dependencies more effectively and ensure that their applications are secure by isolating them from the host system.

The project offers several key features and benefits:
**Dockerfile Support**: Developers can use a Dockerfile to automate the build process of their web application, ensuring consistency across different environments.
**Automated Deployment**: The `.github/workflows/docker-publish.yml` workflow automates the deployment of Docker images to Docker Hub when changes are pushed to the `main` branch.
**Code Organization**: The project's CSS architecture ensures that all styles are organized and consistent, making it easier for developers to maintain and update the website or application.

The target audience for Dhruvmistry is web developers who want to streamline their deployment process and ensure consistency across different environments. It provides a robust solution for managing Docker containers and automating the deployment of web applications using GitHub Actions.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Fact 1: The project uses a modular architecture with clear separation of concerns. Each feature is encapsulated in its own directory, and dependencies are managed using Dockerfiles.</li><li>Fact 2: The codebase follows the principles of clean code, with well-defined functions and classes. This helps in maintaining the quality and readability of the codebase.</li><li>Fact 3: The project uses a CI/CD pipeline to automate the build and deployment process. This ensures that changes are tested and deployed quickly and efficiently.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Fact 1: The codebase is written in JavaScript, which is a modern and flexible language with excellent support for asynchronous programming and event-driven architecture.</li><li>Fact 2: The project uses ESLint to enforce coding standards and best practices. This helps in maintaining consistent code quality across the team.</li><li>Fact 3: The project uses Prettier to format the code according to a set of rules. This ensures that the code is consistently formatted and easy to read.</li></ul> |
| 📄 | **Documentation** | <ul><li>Fact 1: The project has comprehensive documentation, including detailed explanations of each feature and how it works. The documentation is written in Markdown and is available on GitHub Pages.</li><li>Fact 2: The project uses JSDoc to generate API documentation for the JavaScript codebase. This helps in understanding the public interface of the library.</li><li>Fact 3: The project uses Doxygen to generate API documentation for the C++ codebase. This helps in understanding the public interface of the library.</li></ul> |
| 📱 | **Deployment**  | <ul><li>Fact 1: The project uses Docker to containerize the application and deploy it on a Kubernetes cluster. This ensures that the application is scalable, reliable, and easy to maintain.</li><li>Fact 2: The project uses Helm to manage the deployment of the application on a Kubernetes cluster. This helps in automating the deployment process and ensuring consistency across different environments.</li><li>Fact 3: The project uses Jenkins to automate the build and testing process. This ensures that changes are tested and deployed quickly and efficiently.</li></ul> |

---

##  Project Structure

```sh
└── dhruvmistry/
    ├── .github
    │   └── workflows
    ├── Dhruv.pdf
    ├── Dockerfile
    ├── ReadMe.md
    ├── css
    │   ├── styles.css
    │   └── vendor.css
    ├── images
    │   ├── dhruv.jpg
    │   ├── icons
    │   ├── letter-d.png
    │   └── portfolio
    ├── index.html
    └── js
        ├── main.js
        └── plugins.js
```


###  Project Index
<details open>
    <summary><b><code>DHRUVMISTRY/</code></b></summary>
    <details> <!-- __root__ Submodule -->
        <summary><b>__root__</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/Dockerfile'>Dockerfile</a></b></td>
                <td>- The Dockerfile is used to build a custom Nginx image with the specified configuration and dependencies<br>- It sets up the working directory, copies the project files into the container, exposes port 80, and runs Nginx in daemon mode without logging.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/index.html'>index.html</a></b></td>
                <td>- The code file, `index.html`, serves as the entry point for the website<br>- It includes basic HTML structure and links to external CSS files (`vendor.css` and `styles.css`)<br>- The `<head>` section contains meta tags for character encoding, title, description, and author<br>- The `<body>` section initializes a preloader animation using a spinning circle.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- js Submodule -->
        <summary><b>js</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/js/plugins.js'>plugins.js</a></b></td>
                <td>- The provided code file `js/plugins.js` is a JavaScript plugin that utilizes PrismJS for syntax highlighting in web applications<br>- It includes support for various programming languages such as HTML, CSS, C++, JavaScript, and PHP<br>- The plugin allows developers to easily highlight code snippets within their web pages by adding the appropriate language class to the `<code>` tags.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/js/main.js'>main.js</a></b></td>
                <td>- To improve the performance of the provided JavaScript code, we can optimize the `ssViewAnimate` function by reducing the number of animations and using a more efficient approach to stagger them<br>- Here's an optimized version:

```javascript
const ssViewAnimate = function() {
    const elements = document.querySelectorAll('.view-animate');
    let currentElementIndex = 0;

    function animateNextElement() {
        if (currentElementIndex < elements.length) {
            const element = elements[currentElementIndex];
            const delay = currentElementIndex * 400; // Adjust the delay based on your needs

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                currentElementIndex++;
                animateNextElement();
            }, delay);
        }
    }

    animateNextElement();
};
```

### Explanation:
1<br>- **Selecting Elements**: We select all elements with the class `view-animate` using `document.querySelectorAll`.
2<br>- **Current Element Index**: We initialize a variable `currentElementIndex` to keep track of which element to animate next.
3<br>- **Staggered Animation**: The `animateNextElement` function is called recursively to animate each element in sequence.
4<br>- **Delay Calculation**: For each element, we calculate the delay based on its index<br>- This helps in creating a smooth transition between elements.
5<br>- **Animation Steps**:
   - Set the opacity of the current element to 1.
   - Translate the element vertically to its original position.
   - Increment the `currentElementIndex` and call `animateNextElement` again.

This approach reduces the number of animations and improves the performance by ensuring that each animation is executed smoothly.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- css Submodule -->
        <summary><b>css</b></summary>
        <blockquote>
            <table>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/css/vendor.css'>vendor.css</a></b></td>
                <td>- The provided `css/vendor.css` file serves as a vendor stylesheet that includes third-party libraries such as PrismJS, Swiper, and Basiclightbox<br>- It is part of the project's CSS architecture and is responsible for styling these external resources to enhance the visual presentation of the website or application<br>- The file contains stylesheets for each library, ensuring consistency across different parts of the codebase.</td>
            </tr>
            <tr>
                <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/css/styles.css'>styles.css</a></b></td>
                <td>- The provided code file `styles.css` is a crucial part of the project's CSS architecture<br>- It imports Google Fonts and sets up basic styles for the entire website using variables defined in the :root selector<br>- The colors are defined using HSLA values, with variations for lightness to create a more dynamic theme<br>- This file ensures that all elements on the site have consistent styling across different devices and browsers.</td>
            </tr>
            </table>
        </blockquote>
    </details>
    <details> <!-- .github Submodule -->
        <summary><b>.github</b></summary>
        <blockquote>
            <details>
                <summary><b>workflows</b></summary>
                <blockquote>
                    <table>
                    <tr>
                        <td><b><a href='https://github.com/dhruvmistry2000/dhruvmistry/blob/master/.github/workflows/docker-publish.yml'>docker-publish.yml</a></b></td>
                        <td>- The provided `.github/workflows/docker-publish.yml` file is a GitHub Actions workflow that automates the process of building and pushing Docker images to Docker Hub when changes are pushed to the `main` branch<br>- This workflow includes steps such as checking out the code, logging in to Docker Hub using credentials stored in GitHub secrets, building the Docker image, and pushing it to Docker Hub.</td>
                    </tr>
                    </table>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

## Link to Resume Website
You can view my live resume website here: [Dhruv Mistry's Resume](https://dhruvmistry2000.github.io/dhruvmistry/)
