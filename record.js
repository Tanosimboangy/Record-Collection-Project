const recordAlbum = [
    {
		title: 'My love',
        artiste_name: "Celin Dion",
        Number_of_track:"16",
        Social_media_links:"https://tubidy.com",
        Release_year:"2004",
	},
    {
		title: 'I can feel you',
        artiste_name: "Colonel Reyel",
        Number_of_track:"20",
        Social_media_links:"https://Youtube.com",
        Release_year:"2010",
	},
    {
		title: 'Forgive me',
        artiste_name: "Baby Golden",
        Number_of_track:"4",
        Social_media_links:"https://tubidy.com",
        Release_year:"2012",
	},
    {
		title: 'I love you',
        artiste_name: "Marshall",
        Number_of_track:"6",
        Social_media_links:"https://google.com",
        Release_year:"2016",
	},
];
console.log(recordAlbum[0].Social_media_links);

let recordLists = () => {
    for (let i = 0; i < recordAlbum.length; i++) {
        let listsrecords = `Title : ${recordAlbum[i].title} \n Artiste Name : ${recordAlbum[i].artiste_name} \n Number of tracks : ${recordAlbum[i].Number_of_track} \n Social media links : ${recordAlbum[i].Social_media_links} \n Release year : ${recordAlbum[i].Release_year}`;

        alert (listsrecords);
    }
}

let addingRecord = () => {
    let Title = prompt("Enter the title of the new record");
        let ArtisteName = prompt("Enter the name of the artist of the new record");
        let NumberOfTracks = Number(prompt("Enter the number of tracks of the new record"));
        let SocialMedia = prompt("Enter the link on social media of the new record");
        let ReleaseYear = prompt("Enter the year when the record released");

        if (!SocialMedia.startsWith("http://") && !SocialMedia.startsWith("https://")) {
        SocialMedia = `https://${SocialMedia}`;
    }

        let newRecord = {
            title: Title,
            artiste_name: ArtisteName,
            Number_of_track: NumberOfTracks,
            Social_media_links: SocialMedia,
            Release_year: ReleaseYear,
        }
        
        recordAlbum.push(newRecord);
}

const deletingRecord = () => {
    let recordremove = prompt("Enter the title of the record you want to remove");

        let deletingrecord = recordAlbum.splice(recordremove--, 1);
        
        alert(`You deleted ${deletingrecord[recordremove].title}\n `);
};

let list = `Choose (1) to show all records in the collection,
Choose (2) to add a new record,
Choose (3) to update a specific record,
Choose (4) to remove an existing record,
Choose (5) to quit the program
`;

let listOfRecords = Number(prompt(list));

while (listOfRecords !== 5) {
    if (listOfRecords === 1) {
        recordLists();
    } else if (listOfRecords === 2) {
        addingRecord();
    } else if (listOfRecords === 3) {

    } else if (listOfRecords === 4) {
        deletingRecord();
    } else {
        alert("Please enter an appropriate number: 1, 2, 3, 4 or 5");
    }
    listOfRecords = Number(prompt(list));
}