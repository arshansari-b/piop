
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// import { getDatabase, ref as databaseRef, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";


  // const firebaseConfig = {
  //   apiKey: "AIzaSyCbeWaVWqfwtLWaHePWJqsFXqZXJEOKm4Q",
  //   authDomain: "project-vws-cb0cb.firebaseapp.com",
  //   databaseURL: "https://project-vws-cb0cb-default-rtdb.firebaseio.com",
  //   projectId: "project-vws-cb0cb",
  //   storageBucket: "project-vws-cb0cb.appspot.com",
  //   messagingSenderId: "575337970725",
  //   appId: "1:575337970725:web:2065eb7f903a79c62f53cc",
  //   measurementId: "G-YJ26VNF9MT"
  // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const db = getDatabase(app);
// const provider = new GoogleAuthProvider();

// // HTML elements
// const googleAuthBtn = document.getElementById('googleAuthBtn');
// const titleInput = document.getElementById('titleInput');
// const videoUpload = document.getElementById('videoUpload');
// const thumbnailUpload = document.getElementById('thumbnailUpload');
// const publishBtn = document.getElementById('publishBtn');
// const videoContainer = document.getElementById('videoContainer');

// let user = null;

// // Google Auth
// if (googleAuthBtn) {
//     googleAuthBtn.addEventListener('click', () => {
//         signInWithPopup(auth, provider).then((result) => {
//             user = result.user;
//             alert(`Hello, ${user.displayName}`);
//             checkAuth();
//         }).catch((error) => {
//             console.error("Error during sign in:", error);
//         });
//     });
// }

// // Check if user is authenticated
// function checkAuth() {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in.
//             console.log(`User signed in: ${user.displayName}`);
//         } else {
//             // No user is signed in.
//             console.log("No user signed in");
//             if (window.location.pathname.includes("uploading.html")) {
//                 alert("Please log in to upload videos.");
//                 window.location.href = "index.html";
//             }
//         }
//     });
// }

// // Ensure user is authenticated when accessing upload page
// if (window.location.pathname.includes("uploading.html")) {
//     checkAuth();
// }

// // if (publishBtn) {
// //     publishBtn.addEventListener('click', async () => {
// //         if (!user) {
// //             alert("Please login first");
// //             return;
// //         }

// //         const title = titleInput.value;
// //         const videoFile = videoUpload.files[0];
// //         const thumbnailFile = thumbnailUpload.files[0];

// //         if (!title || !videoFile || !thumbnailFile) {
// //             alert("Please provide all the details");
// //             return;
// //         }

// //         // Show alert that the upload has started
// //         alert("Your video is uploading. Please wait...");

// //         try {
// //             // Upload video
// //             const videoRef = storageRef(storage, `videos/${videoFile.name}`);
// //             await uploadBytes(videoRef, videoFile);
// //             const videoURL = await getDownloadURL(videoRef);

// //             // Upload thumbnail
// //             const thumbnailRef = storageRef(storage, `thumbnails/${thumbnailFile.name}`);
// //             await uploadBytes(thumbnailRef, thumbnailFile);
// //             const thumbnailURL = await getDownloadURL(thumbnailRef);

// //             // Store video details in database
// //             const videoData = {
// //                 title: title,
// //                 videoURL: videoURL,
// //                 thumbnailURL: thumbnailURL,
// //                 userName: user.displayName,
// //                 userProfilePic: user.photoURL,
// //             };

// //             const newVideoRef = push(databaseRef(db, 'videos'));
// //             await set(newVideoRef, videoData);

// //             // Alert that the video was published successfully
// //             alert("Video published successfully");
// //             fetchVideos();
// //         } catch (error) {
// //             console.error("Error uploading video:", error);
// //             alert("An error occurred while uploading the video. Please try again.");
// //         }
// //     });
// // }
// if (publishBtn) {
//     publishBtn.addEventListener('click', async () => {
//         if (!user) {
//             alert("Please login first");
//             return;
//         }

//         const title = titleInput.value;
//         const videoFile = videoUpload.files[0];
//         const thumbnailFile = thumbnailUpload.files[0];

//         if (!title || !videoFile || !thumbnailFile) {
//             alert("Please provide all the details");
//             return;
//         }

//         // Show alert that the upload has started
//         alert("Your video is uploading. Please wait...");

//         try {
//             // Upload video
//             const videoRef = storageRef(storage, `videos/${videoFile.name}`);
//             await uploadBytes(videoRef, videoFile);
//             const videoURL = await getDownloadURL(videoRef);

//             // Upload thumbnail
//             const thumbnailRef = storageRef(storage, `thumbnails/${thumbnailFile.name}`);
//             await uploadBytes(thumbnailRef, thumbnailFile);
//             const thumbnailURL = await getDownloadURL(thumbnailRef);

//             // Store video details in database
//             const videoData = {
//                 title: title,
//                 videoURL: videoURL,
//                 thumbnailURL: thumbnailURL,
//                 userName: user.displayName,
//                 userProfilePic: user.photoURL,
//                 userId: user.uid,
//                 timestamp: Date.now() // Add this line to store the upload time
//             };

//             const newVideoRef = push(databaseRef(db, 'videos'));
//             await set(newVideoRef, videoData);

//             // Alert that the video was published successfully
//             alert("Video published successfully");
//             fetchVideos();
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             alert("An error occurred while uploading the video. Please try again.");
//         }
//     });
// }



// // Fetch and display videos
// function fetchVideos() {
//     if (videoContainer) {
//         onValue(databaseRef(db, 'videos'), (snapshot) => {
//             videoContainer.innerHTML = '';
//             snapshot.forEach((childSnapshot) => {
//                 const videoData = childSnapshot.val();
//                 const videoItem = document.createElement('div');
//                 videoItem.className = 'video-item';
//                 videoItem.innerHTML = `
//                     <img src="${videoData.thumbnailURL}" alt="${videoData.title}">
//                     <h3>${videoData.title}</h3>
//                     <div class="profile">
//                         <img src="${videoData.userProfilePic}" alt="${videoData.userName}">
//                         <span>${videoData.userName}</span>
//                     </div>
//                 `;
//                 videoItem.addEventListener('click', () => {
//                     window.location.href = `video.html?id=${childSnapshot.key}`;
//                 });
//                 videoContainer.appendChild(videoItem);
//             });
//         });
//     }
// }

// // Initial fetch
// fetchVideos();


// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('menuButton');
//     const navDrawer = document.getElementById('navDrawer');

//     if (menuButton) {
//         menuButton.addEventListener('click', () => {
//             navDrawer.classList.toggle('open');
//             if (navDrawer.classList.contains('open')) {
//                 menuButton.textContent = '✖'; // Change to close icon
//             } else {
//                 menuButton.textContent = '☰'; // Change to menu icon
//             }
//         });
//     }
// });





// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// import { getDatabase, ref as databaseRef, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCbeWaVWqfwtLWaHePWJqsFXqZXJEOKm4Q",
//     authDomain: "project-vws-cb0cb.firebaseapp.com",
//     databaseURL: "https://project-vws-cb0cb-default-rtdb.firebaseio.com",
//     projectId: "project-vws-cb0cb",
//     storageBucket: "project-vws-cb0cb.appspot.com",
//     messagingSenderId: "575337970725",
//     appId: "1:575337970725:web:2065eb7f903a79c62f53cc",
//     measurementId: "G-YJ26VNF9MT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const db = getDatabase(app);
// const provider = new GoogleAuthProvider();

// // HTML elements
// const googleAuthBtn = document.getElementById('googleAuthBtn');
// const titleInput = document.getElementById('titleInput');
// const videoUpload = document.getElementById('videoUpload');
// const thumbnailUpload = document.getElementById('thumbnailUpload');
// const publishBtn = document.getElementById('publishBtn');
// const videoContainer = document.getElementById('videoContainer');

// let user = null;

// // Google Auth
// if (googleAuthBtn) {
//     googleAuthBtn.addEventListener('click', () => {
//         signInWithPopup(auth, provider).then((result) => {
//             user = result.user;
//             alert(`Hello, ${user.displayName}`);
//             checkAuth();
//         }).catch((error) => {
//             console.error("Error during sign in:", error);
//         });
//     });
// }

// // Check if user is authenticated
// function checkAuth() {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in.
//             console.log(`User signed in: ${user.displayName}`);
//         } else {
//             // No user is signed in.
//             console.log("No user signed in");
//             if (window.location.pathname.includes("uploading.html")) {
//                 alert("Please log in to upload videos.");
//                 window.location.href = "index.html";
//             }
//         }
//     });
// }

// // Ensure user is authenticated when accessing upload page
// if (window.location.pathname.includes("uploading.html")) {
//     checkAuth();
// }

// if (publishBtn) {
//     publishBtn.addEventListener('click', async () => {
//         if (!user) {
//             alert("Please login first");
//             return;
//         }

//         const title = titleInput.value;
//         const videoFile = videoUpload.files[0];
//         const thumbnailFile = thumbnailUpload.files[0];

//         if (!title || !videoFile || !thumbnailFile) {
//             alert("Please provide all the details");
//             return;
//         }

//         // Show alert that the upload has started
//         alert("Your video is uploading. Please wait...");

//         try {
//             // Upload video
//             const videoRef = storageRef(storage, `videos/${videoFile.name}`);
//             await uploadBytes(videoRef, videoFile);
//             const videoURL = await getDownloadURL(videoRef);

//             // Upload thumbnail
//             const thumbnailRef = storageRef(storage, `thumbnails/${thumbnailFile.name}`);
//             await uploadBytes(thumbnailRef, thumbnailFile);
//             const thumbnailURL = await getDownloadURL(thumbnailRef);

//             // Store video details in database
//             const videoData = {
//                 title: title,
//                 videoURL: videoURL,
//                 thumbnailURL: thumbnailURL,
//                 userName: user.displayName,
//                 userProfilePic: user.photoURL,
//                 userId: user.uid,
//                 timestamp: Date.now() // Add this line to store the upload time
//             };

//             const newVideoRef = push(databaseRef(db, 'videos'));
//             await set(newVideoRef, videoData);

//             // Alert that the video was published successfully
//             alert("Video published successfully");
//             fetchVideos();
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             alert("An error occurred while uploading the video. Please try again.");
//         }
//     });
// }

// // Function to calculate elapsed time since video upload
// function calculateElapsedTime(timestamp) {
//     const now = Date.now();
//     const elapsed = now - timestamp;

//     const seconds = Math.floor(elapsed / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const weeks = Math.floor(days / 7);
//     const months = Math.floor(days / 30);
//     const years = Math.floor(days / 365);

//     if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
//     if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
//     if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
//     if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
//     if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
//     return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
// }

// // Fetch and display videos
// function fetchVideos() {
//     if (videoContainer) {
//         onValue(databaseRef(db, 'videos'), (snapshot) => {
//             videoContainer.innerHTML = '';
//             snapshot.forEach((childSnapshot) => {
//                 const videoData = childSnapshot.val();
//                 const elapsedTime = calculateElapsedTime(videoData.timestamp);
//                 const videoItem = document.createElement('div');
//                 videoItem.className = 'video-item';
//                 videoItem.innerHTML = `
//                     <img src="${videoData.thumbnailURL}" alt="${videoData.title}">
//                     <h3>${videoData.title}</h3>
//                     <div class="profile">
//                         <img src="${videoData.userProfilePic}" alt="${videoData.userName}">
//                         <span>${videoData.userName}</span>
//                     </div>
//                     <p>Uploaded ${elapsedTime}</p>
//                 `;
//                 videoItem.addEventListener('click', () => {
//                     window.location.href = `video.html?id=${childSnapshot.key}`;
//                 });
//                 videoContainer.appendChild(videoItem);
//             });
//         });
//     }
// }

// // Initial fetch
// fetchVideos();

// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('menuButton');
//     const navDrawer = document.getElementById('navDrawer');

//     if (menuButton) {
//         menuButton.addEventListener('click', () => {
//             navDrawer.classList.toggle('open');
//             if (navDrawer.classList.contains('open')) {
//                 menuButton.textContent = '✖'; // Change to close icon
//             } else {
//                 menuButton.textContent = '☰'; // Change to menu icon
//             }
//         });
//     }
// });




// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// import { getDatabase, ref as databaseRef, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// // Firebase configuration
//  const firebaseConfig = {
//     apiKey: "AIzaSyC4YltTBErvPJ1p4heqCqbp7Kdjjd11BGQ",
//     authDomain: "lololo-50d5f.firebaseapp.com",
//     databaseURL: "https://lololo-50d5f-default-rtdb.firebaseio.com",
//     projectId: "lololo-50d5f",
//     storageBucket: "lololo-50d5f.appspot.com",
//     messagingSenderId: "671182151183",
//     appId: "1:671182151183:web:fa39b960e1adfac6e08d7a",
//     measurementId: "G-M92ERK79JF"
//   };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const db = getDatabase(app);
// const provider = new GoogleAuthProvider();

// // HTML elements
// const googleAuthBtn = document.getElementById('googleAuthBtn');
// const titleInput = document.getElementById('titleInput');
// const videoUpload = document.getElementById('videoUpload');
// const thumbnailUpload = document.getElementById('thumbnailUpload');
// const publishBtn = document.getElementById('publishBtn');
// const videoContainer = document.getElementById('videoContainer');

// let user = null;

// // Google Auth
// if (googleAuthBtn) {
//     googleAuthBtn.addEventListener('click', () => {
//         signInWithPopup(auth, provider).then((result) => {
//             user = result.user;
//             alert(`Hello, ${user.displayName}`);
//             checkAuth();
//         }).catch((error) => {
//             console.error("Error during sign in:", error);
//         });
//     });
// }

// // Check if user is authenticated
// function checkAuth() {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             console.log(`User signed in: ${user.displayName}`);
//         } else {
//             console.log("No user signed in");
//             if (window.location.pathname.includes("uploading.html")) {
//                 alert("Please log in to upload videos.");
//                 window.location.href = "index.html";
//             }
//         }
//     });
// }

// // Ensure user is authenticated when accessing upload page
// if (window.location.pathname.includes("uploading.html")) {
//     checkAuth();
// }

// if (publishBtn) {
//     publishBtn.addEventListener('click', async () => {
//         if (!user) {
//             alert("Please go profile and login");
//             return;
//         }

//         const title = titleInput.value;
//         const videoFile = videoUpload.files[0];
//         const thumbnailFile = thumbnailUpload.files[0];

//         if (!title || !videoFile || !thumbnailFile) {
//             alert("Please provide all the details");
//             return;
//         }

//         alert("Your video is uploading. Please wait...");

//         try {
//             const videoRef = storageRef(storage, `videos/${user.uid}/${videoFile.name}`);
//             await uploadBytes(videoRef, videoFile);
//             const videoURL = await getDownloadURL(videoRef);

//             const thumbnailRef = storageRef(storage, `thumbnails/${user.uid}/${thumbnailFile.name}`);
//             await uploadBytes(thumbnailRef, thumbnailFile);
//             const thumbnailURL = await getDownloadURL(thumbnailRef);

//             const videoData = {
//                 title,
//                 videoURL,
//                 thumbnailURL,
//                 userName: user.displayName,
//                 userProfilePic: user.photoURL,
//                 userId: user.uid,
//                 timestamp: Date.now()
//             };

//             const newVideoRef = push(databaseRef(db, 'videos'));
//             await set(newVideoRef, videoData);

//             alert("Video published successfully");
//             fetchVideos();
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             alert("An error occurred while uploading the video. Please try again.");
//         }
//     });
// }

// // Calculate elapsed time since video upload
// function calculateElapsedTime(timestamp) {
//     const now = Date.now();
//     const elapsed = now - timestamp;

//     const seconds = Math.floor(elapsed / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const weeks = Math.floor(days / 7);
//     const months = Math.floor(days / 30);
//     const years = Math.floor(days / 365);

//     if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
//     if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
//     if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
//     if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
//     if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
//     return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
// }

// // Fetch and display videos
// function fetchVideos() {
//     if (videoContainer) {
//         onValue(databaseRef(db, 'videos'), (snapshot) => {
//             videoContainer.innerHTML = '';
//             snapshot.forEach((childSnapshot) => {
//                 const videoData = childSnapshot.val();
//                 const elapsedTime = calculateElapsedTime(videoData.timestamp);
//                 const videoItem = document.createElement('div');
//                 videoItem.className = 'video-item';
//                 videoItem.innerHTML = `
//                     <img src="${videoData.thumbnailURL}" alt="${videoData.title}">
//                     <h3>${videoData.title}</h3>
//                     <div class="profile">
//                         <img src="${videoData.userProfilePic}" alt="${videoData.userName}">
//                         <span>${videoData.userName}</span>
//                     </div>
//                     <p>Uploaded ${elapsedTime}</p>
//                 `;
//                 videoItem.addEventListener('click', () => {
//                     window.location.href = `video.html?id=${childSnapshot.key}`;
//                 });
//                 videoContainer.appendChild(videoItem);
//             });
//         });
//     }
// }

// // Initial fetch
// fetchVideos();

// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('menuButton');
//     const navDrawer = document.getElementById('navDrawer');

//     if (menuButton) {
//         menuButton.addEventListener('click', () => {
//             navDrawer.classList.toggle('open');
//             if (navDrawer.classList.contains('open')) {
//                 menuButton.textContent = '✖'; // Change to close icon
//             } else {
//                 menuButton.textContent = '☰'; // Change to menu icon
//             }
//         });
//     }
// });






// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// import { getDatabase, ref as databaseRef, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC4YltTBErvPJ1p4heqCqbp7Kdjjd11BGQ",
//     authDomain: "lololo-50d5f.firebaseapp.com",
//     databaseURL: "https://lololo-50d5f-default-rtdb.firebaseio.com",
//     projectId: "lololo-50d5f",
//     storageBucket: "lololo-50d5f.appspot.com",
//     messagingSenderId: "671182151183",
//     appId: "1:671182151183:web:fa39b960e1adfac6e08d7a",
//     measurementId: "G-M92ERK79JF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const storage = getStorage(app);
// const db = getDatabase(app);
// const provider = new GoogleAuthProvider();

// // HTML elements
// const googleAuthBtn = document.getElementById('googleAuthBtn');
// const titleInput = document.getElementById('titleInput');
// const videoUpload = document.getElementById('videoUpload');
// const thumbnailUpload = document.getElementById('thumbnailUpload');
// const publishBtn = document.getElementById('publishBtn');
// const videoContainer = document.getElementById('videoContainer');

// let user = null;

// // Google Auth
// if (googleAuthBtn) {
//     googleAuthBtn.addEventListener('click', () => {
//         signInWithPopup(auth, provider).then((result) => {
//             user = result.user;
//             alert(`Hello, ${user.displayName}`);
//         }).catch((error) => {
//             console.error("Error during sign in:", error);
//         });
//     });
// }

// // Check if user is authenticated
// function checkAuth() {
//     onAuthStateChanged(auth, (userObj) => {
//         if (userObj) {
//             user = userObj;
//             console.log(`User signed in: ${user.displayName}`);
//         } else {
//             user = null;
//             console.log("No user signed in");
//         }
//     });
// }

// // Ensure user is authenticated when accessing upload page
// if (window.location.pathname.includes("uploading.html")) {
//     checkAuth();
// }

// if (publishBtn) {
//     publishBtn.addEventListener('click', async () => {
//         if (!user) {
//             alert("Please log in to publish a video.");
//             return;
//         }

//         const title = titleInput.value;
//         const videoFile = videoUpload.files[0];
//         const thumbnailFile = thumbnailUpload.files[0];

//         if (!title || !videoFile || !thumbnailFile) {
//             alert("Please provide all the details.");
//             return;
//         }

//         alert("Your video is uploading. Please wait...");

//         try {
//             const videoRef = storageRef(storage, `videos/${user.uid}/${videoFile.name}`);
//             await uploadBytes(videoRef, videoFile);
//             const videoURL = await getDownloadURL(videoRef);

//             const thumbnailRef = storageRef(storage, `thumbnails/${user.uid}/${thumbnailFile.name}`);
//             await uploadBytes(thumbnailRef, thumbnailFile);
//             const thumbnailURL = await getDownloadURL(thumbnailRef);

//             const videoData = {
//                 title,
//                 videoURL,
//                 thumbnailURL,
//                 userName: user.displayName,
//                 userProfilePic: user.photoURL,
//                 userId: user.uid,
//                 timestamp: Date.now()
//             };

//             const newVideoRef = push(databaseRef(db, 'videos'));
//             await set(newVideoRef, videoData);

//             alert("Video published successfully");
//             fetchVideos();
//         } catch (error) {
//             console.error("Error uploading video:", error);
//             alert("An error occurred while uploading the video. Please try again.");
//         }
//     });
// }

// // Calculate elapsed time since video upload
// function calculateElapsedTime(timestamp) {
//     const now = Date.now();
//     const elapsed = now - timestamp;

//     const seconds = Math.floor(elapsed / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const weeks = Math.floor(days / 7);
//     const months = Math.floor(days / 30);
//     const years = Math.floor(days / 365);

//     if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
//     if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
//     if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
//     if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
//     if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
//     if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
//     return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
// }

// // Fetch and display videos
// function fetchVideos() {
//     if (videoContainer) {
//         onValue(databaseRef(db, 'videos'), (snapshot) => {
//             videoContainer.innerHTML = '';
//             snapshot.forEach((childSnapshot) => {
//                 const videoData = childSnapshot.val();
//                 const elapsedTime = calculateElapsedTime(videoData.timestamp);
//                 const videoItem = document.createElement('div');
//                 videoItem.className = 'video-item';
//                 videoItem.innerHTML = `
//                     <img src="${videoData.thumbnailURL}" alt="${videoData.title}">
//                     <h3>${videoData.title}</h3>
//                     <div class="profile">
//                         <img src="${videoData.userProfilePic}" alt="${videoData.userName}">
//                         <span>${videoData.userName}</span>
//                     </div>
//                     <p>Uploaded ${elapsedTime}</p>
//                 `;
//                 videoItem.addEventListener('click', () => {
//                     window.location.href = `video.html?id=${childSnapshot.key}`;
//                 });
//                 videoContainer.appendChild(videoItem);
//             });
//         });
//     }
// }

// // Initial fetch
// fetchVideos();

// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('menuButton');
//     const navDrawer = document.getElementById('navDrawer');

//     if (menuButton) {
//         menuButton.addEventListener('click', () => {
//             navDrawer.classList.toggle('open');
//             if (navDrawer.classList.contains('open')) {
//                 menuButton.textContent = '✖'; // Change to close icon
//             } else {
//                 menuButton.textContent = '☰'; // Change to menu icon
//             }
//         });
//     }
// });

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
import { getDatabase, ref as databaseRef, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";

// Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB3iJv4XVViLowqVB4yWjhNbdprjXEwvSY",
    authDomain: "blaze-z.firebaseapp.com",
    databaseURL: "https://blaze-z-default-rtdb.firebaseio.com",
    projectId: "blaze-z",
    storageBucket: "blaze-z.appspot.com",
    messagingSenderId: "856918814032",
    appId: "1:856918814032:web:bb615150a7821df0eb1055",
    measurementId: "G-9G9CXSQRR4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

// HTML elements
const googleAuthBtn = document.getElementById('googleAuthBtn');
const titleInput = document.getElementById('titleInput');
const videoUpload = document.getElementById('videoUpload');
const thumbnailUpload = document.getElementById('thumbnailUpload');
const publishBtn = document.getElementById('publishBtn');
const videoContainer = document.getElementById('videoContainer');
const searchInput = document.querySelector('.Search');
const searchBtn = document.querySelector('.Searchbtn');

let user = null;

// Google Auth
if (googleAuthBtn) {
    googleAuthBtn.addEventListener('click', () => {
        signInWithPopup(auth, provider).then((result) => {
            user = result.user;
            alert(`Hello, ${user.displayName}`);
        }).catch((error) => {
            console.error("Error during sign in:", error);
        });
    });
}

// Check if user is authenticated
function checkAuth() {
    onAuthStateChanged(auth, (userObj) => {
        if (userObj) {
            user = userObj;
            console.log(`User signed in: ${user.displayName}`);
        } else {
            user = null;
            console.log("No user signed in");
        }
    });
}

// Ensure user is authenticated when accessing upload page
if (window.location.pathname.includes("uploading.html")) {
    checkAuth();
}

if (publishBtn) {
    publishBtn.addEventListener('click', async () => {
        if (!user) {
            alert("Please log in to publish a video.");
            return;
        }

        const title = titleInput.value;
        const videoFile = videoUpload.files[0];
        const thumbnailFile = thumbnailUpload.files[0];

        if (!title || !videoFile || !thumbnailFile) {
            alert("Please provide all the details.");
            return;
        }

        alert("Your video is uploading. Please wait...");

        try {
            const videoRef = storageRef(storage, `videos/${user.uid}/${videoFile.name}`);
            await uploadBytes(videoRef, videoFile);
            const videoURL = await getDownloadURL(videoRef);

            const thumbnailRef = storageRef(storage, `thumbnails/${user.uid}/${thumbnailFile.name}`);
            await uploadBytes(thumbnailRef, thumbnailFile);
            const thumbnailURL = await getDownloadURL(thumbnailRef);

            const videoData = {
                title,
                videoURL,
                thumbnailURL,
                userName: user.displayName,
                userProfilePic: user.photoURL,
                userId: user.uid,
                timestamp: Date.now()
            };

            const newVideoRef = push(databaseRef(db, 'videos'));
            await set(newVideoRef, videoData);

            alert("Video published successfully");
            fetchVideos();
        } catch (error) {
            console.error("Error uploading video:", error);
            alert("An error occurred while uploading the video. Please try again.");
        }
    });
}

// Calculate elapsed time since video upload
function calculateElapsedTime(timestamp) {
    const now = Date.now();
    const elapsed = now - timestamp;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}

// Fetch and display videos
function fetchVideos(searchQuery = '') {
    if (videoContainer) {
        onValue(databaseRef(db, 'videos'), (snapshot) => {
            videoContainer.innerHTML = '';
            snapshot.forEach((childSnapshot) => {
                const videoData = childSnapshot.val();
                const elapsedTime = calculateElapsedTime(videoData.timestamp);

                // Filter by search query
                if (videoData.title.toLowerCase().includes(searchQuery.toLowerCase())) {
                    const videoItem = document.createElement('div');
                    videoItem.className = 'video-item';
                    videoItem.innerHTML = `
                        <img src="${videoData.thumbnailURL}" alt="${videoData.title}">
                        <h3>${videoData.title}</h3>
                        <div class="profile">
                            <img src="${videoData.userProfilePic}" alt="${videoData.userName}">
                            <span>${videoData.userName}</span>
                        </div>
                        <p>Uploaded ${elapsedTime}</p>
                    `;
                    videoItem.addEventListener('click', () => {
                        window.location.href = `video.html?id=${childSnapshot.key}`;
                    });
                    videoContainer.appendChild(videoItem);
                }
            });
        });
    }
}

// Initial fetch
fetchVideos();

// Search functionality
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim();
        fetchVideos(searchQuery);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const navDrawer = document.getElementById('navDrawer');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            navDrawer.classList.toggle('open');
            if (navDrawer.classList.contains('open')) {
                menuButton.textContent = '✖'; // Change to close icon
            } else {
                menuButton.textContent = '☰'; // Change to menu icon
            }
        });
    }
});
