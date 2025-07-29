// MongoDB initialization script
// This script will run when the container starts for the first time

db = db.getSiblingDB('whataclip');

// Create users collection with some sample data
db.users.insertMany([
{
    "mail": "alapinilopez@gmail.com",
    "username": "lapini",
    "password": "a",
    "role": "admin",
    "currentFamilies": 
        [
            {
                "name": "testFamily",
                "canUpload": true,
                "canEdit": true,
                "canDelete": true
            },
            {
                "name": "testFamily2",
                "canUpload": true,
                "canEdit": true,
                "canDelete": true
            }
        ]
}
]);

// Create families collection with the test family data
db.families.insertOne({
  name: "testFamily",
  videos: [
    {
      title: "testVideo",
      description: "This is a test video",
      uploader: "lapini",
      uploadDate: "10-01-1984",
      tags: ["test", "video"],
      thumbnail: "http://example.com/testthumbnail.jpg",
      url: "http://example.com/testvideo"
    }
  ]
});

print("Database initialized with sample data");
