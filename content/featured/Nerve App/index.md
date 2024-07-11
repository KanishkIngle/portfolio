---
date: '3'
title: 'Nerve Mobile App'
cover: 'Nerve.jpg'
external: 'https://www.dropbox.com/scl/fi/w18gdputg0wlm5kirqubj/Nerve.apk?rlkey=oramxptw6qvet9czbhms8z7jk&st=eyu13lof&dl=0'
tech:
  - Google Vision API
  - Node.JS
  - Express.js
  - Firebase
  - Tesseract OCR
  - MongoDB
  - Flutter
  - Dart
  - Riverpod
showInProjects: true
---

Overview:
This mobile application aims to provide a seamless way for users to manage their medical needs by digitizing doctor’s prescriptions and offering information about medicines and nearby healthcare facilities.

Features:

1. OCR Prescription Reading:

-     Users can take a photo of a doctor’s prescription.
  - The app uses Tesseract OCR or Google Vision API to recognize and extract text from the image.
  - Extracted text is processed and displayed in a readable format.

2. Medicine Information:
   - The app provides detailed information about medicines listed in the prescription.
   - Information includes usage, side effects, and dosage instructions.
   - Users can search for additional medicines within the app.
3. Nearby Hospitals and Clinics:
   - The app uses the Google Maps and Places APIs to locate nearby hospitals and clinics.
   - Users can view the locations on a map and get directions.
   - Additional details such as contact information, ratings, and hours of operation are provided.
4. User Authentication:
   - Secure user authentication is handled by Firebase Authentication.
   - Users can sign up, log in, and manage their profiles.
5. Storage and Retrieval:
   - Prescriptions and related images are securely stored in Firebase Cloud Storage.
   - Users can access their past prescriptions and medicine information at any time.
6. Push Notifications:
   - Users receive notifications for upcoming appointments, prescription refills, and important health tips.
7. User-Friendly Interface:
   - The app features a clean and intuitive user interface built with Flutter, ensuring a smooth experience on both iOS and Android devices.
8. Additional Features:
   - In-app chat support for users to get help with using the app or understanding their prescriptions.
   - Option to share prescription information with family members or healthcare providers.
