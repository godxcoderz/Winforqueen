# WinForQueen

A royal fantasy action game about a wandering prince, a fearless princess, and a kingdom worth protecting. Explore a colourful storybook world, face stronger guardians, and fight your way through ten chapters.

## Features

- 3D browser arena rendered with Three.js
- Ten chapters with increasing enemy difficulty
- Original low-poly-style prince, guardians, garden, and storybook house built from 3D shapes
- Three special moves: **Moon Cut**, **Starfall**, and **Royal Step**
- Keyboard and mobile touch controls
- Synthesized sound effects
- Local player name, score, and progress saving
- Responsive layout for desktop and mobile screens

## Controls

| Action | Keyboard |
| --- | --- |
| Move | Left / Right arrows |
| Jump | Space |
| Moon Cut | J |
| Starfall | K |
| Royal Step | L |
| Basic attack | X |

On mobile, use the on-screen buttons.

## Run the game

Open `index.html` in a modern browser with an internet connection. Three.js is loaded from a CDN, and Google Fonts are optional. The game saves progress in the current browser using local storage.

## Publish with GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. In **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. Then check the Actions tab for the deployment status.

## Project note

WinForQueen is an independent fan-inspired fantasy project. It is not affiliated with or endorsed by any existing anime or television franchise. The prince, guardians, and scenery in this prototype are assembled from original 3D primitives rather than imported character models.
