# FULL STACK LOG INGESTION APP

## DEMO VIDEO

[Video Link](https://drive.google.com/file/d/1GFko_zgAz6KzevlD0-yZiVP343wOTxtR/view?usp=sharing)

## Query Interface (Frontend) screenshot

![Alt text](<Screenshot 2023-11-19 at 8.57.35 PM.png>)

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>
 -->

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

## Requirements

The requirements for the log ingestor and the query interface are specified below.

### Log Ingestor:

- Develop a mechanism to ingest logs in the provided format.
- Ensure scalability to handle high volumes of logs efficiently.
- Mitigate potential bottlenecks such as I/O operations, database write speeds, etc.
- Make sure that the logs are ingested via an HTTP server, which runs on port `3000` by default.

### Query Interface:

- Offer a user interface (Web UI or CLI) for full-text search across logs.
- Include filters based on:
  - level
  - message
  - resourceId
  - timestamp
  - traceId
  - spanId
  - commit
  - metadata.parentResourceId
- Aim for efficient and quick search results.
<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

<!-- There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

Here's why:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others
* You shouldn't be doing the same tasks over and over like creating a README from scratch
* You should implement DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!

Use the `BLANK_README.md` to get started. -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- Reactjs
- Nodejs
- Kafka (Java 8+ need to be installed)
- MongoDB
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Thought process

- Required a Web User Interface (Reactjs).
- Nodejs as a backend to handle high number of requests.
- Database should be scalable and since data don't have any relations with each other, NoSQL databases is preferred. So Database used is MongoDB.
- Now to reduce number of writes operation on the database, we can follow a technique of bulkInsert.
- To achieve bulkInsert, we can use any message queues
  that can handle high throughput operations.
- Used kafka as a message queue.
- Created a Logs topic in kafka.
- log ingestgion will produce data for kafka topic Logs.
- backend will consume data from topic Logs.
- This way we can handle high volume of requests and reduce bottlenecks in I/O and write operations.

### Prerequisites

#### System Requirements

- Nodejs installed
- Java 8+ installed
- MongoDB
- Kakfka apache server files (https://kafka.apache.org/quickstart).

  ```

  ```

### Installation

#### Steps for installation

- Save Kafka server in backend directory
- Kafka with ZooKeeper
- Run the following commands in order to start all services in the correct order:

- Start the ZooKeeper service
  $ bin/zookeeper-server-start.sh config/zookeeper.properties.
- If this step is failing try building kafka server.
- Open another terminal session and run:

- Start the Kafka broker service
  $ bin/kafka-server-start.sh config/server.properties
- Once all services have successfully launched, you will have a basic Kafka environment running and ready to use.
- Inside backend directory run command npm install.
- To run backend run npm run start.
- Now go inside frontend/query-interface directory
- In terminal type npm install.
- Now run npm run dev, this will make your frontend running.
- Things to keep in mind: MongoDB connection URL string should be pasted in backend directory .env file.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

- When both frontend and backend is up, log can be ingested via POST request on backend url http://localhost:3000.
- This application can ingest logs in the specified format.
  application ensures scalability to handle high volumes of logs efficiently.
- To mitigate potential bottlenecks such as I/O operations, database write speeds used Kafka along with Nodejs and MongoDB.
- Application offers a user interface for full-text search across logs.
- - Including filters based on:
    - level
    - message
    - resourceId
    - timestamp
    - traceId
    - spanId
    - commit
    - metadata.parentResourceId

* Application aims for efficient and quick search results.

- Implemented search within specific date ranges.
- Allowed combining multiple filters.
- Provided real-time log ingestion and searching capabilities.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Dilpreet singh
Project Link: [Github](https://github.com/iamdilpreetsingh/LogIngestionApp)
Linkedin: [LinkedIn](www.linkedin.com/in/dilpreet-singh-38207a20a)
Gmail: dilpreetsingh3682@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
