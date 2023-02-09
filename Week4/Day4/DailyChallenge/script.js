// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
  }
}

const video1 = new Video("AAAA", "Tom", 10);
const video2 = new Video("ZZZZ", "Mot", 1);
video1.watch();
video2.watch();
const arr = [
  {
    title: "BBBB",
    uploader: "Mor",
    time: 600,
  },
  {
    title: "CCCC",
    uploader: "Mor2",
    time: 700,
  },
  {
    title: "DDDD",
    uploader: "Mor3",
    time: 800,
  },
  {
    title: "EEEE",
    uploader: "Mor4",
    time: 900,
  },
  {
    title: "XXXX",
    uploader: "Mor5",
    time: 1000,
  },
];

const videos = arr.map(
  ({ title, uploader, time }) => new Video(title, uploader, time)
);
console.log(videos);
