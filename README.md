# Driver App
Choose a ride between any two locations.

<p align="center">
  <img src="assets/DriverAppDemo.gif" alt="animated" width='200' />
</p>

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Acknowledgments](#acknowledgments)

## Project Description

A dynamic React Native app inspired by Uber's concept. 

Allowing users to effortlessly find rides by selecting their starting point and destination. 

Powered by Google Maps APIs, the app showcases the chosen route on a map,
along with travel specifics including distance, estimated travel time, and associated costs, 
offering a seamless and informative ride experience. 

Enhanced with TailwindCSS for sleek styling and Redux for efficient state management, the app ensures smooth navigation and real-time updates.

## Installation

Clone the repository: `git clone https://github.com/SadafAsad/DriverApp.git`

Navigate to the project directory: `cd DriverApp`

Install dependencies: `npm install`

## Usage

``` expo start ```

## Configuration

To resolve the *use process(css).then(cb) to work with async plugins* error: 

Upgrade to tailwindcss 3.3.3 and then downgrade to tailwindcss 3.3.2 and make sure package-lock looks like this: 

*"tailwindcss": "^3.3.2"*

*"nativewind": "^2.0.11"*

## Acknowledgments

Thanks to [Sonny Sangha](https://github.com/sonnysangha) for providing inspiration and code snippets



