# ![Banner Photo](./organize_cropped.jpg)

Author: [William Faulkner](https://github.com/wnfaulkner)

---
## **Project Idea and Description**

PDF Search helps users store, organize, and search their pdf documents.

[Click Here to Check out the App Now](https://www.duckduckgo.com/)

---
## **Technology Stack**

Database: PostgreSQL

Back-End: Django
- Communicate with React front-end: Django REST Framework
- Doc Indexing & Metadata Extraction: Apache Tika
- Doc Searching: Apache Solr

Front-End: React with Milligram CSS

---
## **User Stories**

- AAU, I want the ability to sign-up and create a new profile.
- AAU, I want the ability to log-in with an email and password.
- AAU, I want the ability to log-out.
- AAU, I want to be able to import PDFs and have my uploaded PDFs be associated with my user such that other users cannot access them.
- AAU, I want the ability to view a list of all of my uploaded PDFs.
- AAU, I want the ability to open/read/view individual PDFs.
- AAU, I want the ability to search the full text content and metadata of my PDFs simultaneously.


Stretch Goals include implementing further user stories, such as:
- AAU, I want the ability to batch import PDFs
- AAU, I want to be able to create, view, edit, and delete tags (including metadata tags like 'author').
- AAU, I want the ability to associate tags with documents.
- AAU, I want the ability to filter my list of PDFs to those associated with a particular tag.
- AAU, I want the ability to search both full and filtered lists of my PDFs for exact text matches in both PDF metadata and text content.
- AAU, I want the ability to nest my tags within a hierarchy with ‘parent’ and ‘child’ tags.
- AAU, I want the ability to tag selected text within documents.
- AAU, I want the search results prioritized, with higher priority going to documents where the search term appears in the metadata and documents where the search term appears more frequently in the document text.
- AAU, I want my search results to include a ‘search snippet,’ i.e. preview(s) of the text surrounding the search term within the doc.
- AAU, I want my search results to live update with each new character typed into the search query.
- AAU, I want results to appear snappily (< 0.25 sec) even when I am searching 500+ PDFs.

---
## **ERD**

<img src="./pdfsearch/public/images/ERD.png" alt="ERD" width="350"/>

---
## **Routing Chart**

<img src="./pdfsearch/public/images/RESTful Routing Chart.png" alt="RESTful Routing Chart" width="700"/>

---
## **Wireframes**

![Landing Page Wireframe](./pdfsearch/public/images/wireframes/Slide1.PNG)

![User Home Wireframe](./pdfsearch/public/images/wireframes/Slide2.PNG)

![Import/Index Wireframe](./pdfsearch/public/images/wireframes/Slide3.PNG)

![Search Wireframe (no query)](./pdfsearch/public/images/wireframes/Slide4.PNG)

![Search Wireframe (with query)](./pdfsearch/public/images/wireframes/Slide5.PNG)


---
## **Proposed Development Timeline**

Dec 13
- Create: 
  - PostgreSQL database
  - Django project & App
  - React App
-Start - Functionality: user signup, login, logout
  - Connect Django app to database using PyMongo
  - Create User model
  - Configure Django REST Framework
  - Create React components for navbar, user signup, login, logout

Dec 14
- Finish up - Functionality: user signup, login, logout
- Functionality: doc CRUD
  - Create Doc model
  - Create Django REST views for doc CRUD
  - Create React components for doc upload, index, show (detail), 
  - Start - Functionality: doc search

Dec 15
- Functionality: doc search
  - Create serializers for Doc model
  - Set up Apache Tika & Solr for metadata extraction & indexing
  - Create React components for search interface

Dec 18
- Finish up - Functionality: doc search
- Implement CSS framework & styling

Dec 19
- Finish up - Implement CSS framework & styling
- Cushion/Implement Stretch Goals

Dec 20
- Cushion/Implement Stretch Goals
