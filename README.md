# UFOs
## Overview
  A website was created using JavaScript and HTML to display information on different UFO sightings throughout the US. Filters were added so that the data table can be sifted through based on multiple different criteria. The filters added were the date, city, state, country, and shape.   
## Results
### Build the table
  The first function written in our Javascript code builds our original table when the page is loaded. Any existing data or filters are cleared out and a for loop was used to loop through all of our ufo data and append a row and cells for each value into our table. Another for loop was then used to add each value into our table. This function allows use to see a full table of data anytime our site is loaded, as well as resets our table of any filters anytime the page is refreshed. An image of the website when loaded can be seen below:
  
  ![This is an image](https://github.com/dsilvaggio/UFOs/blob/main/Resources/Screen%20Shot%202022-05-08%20at%208.43.49%20AM.png)
  
### Filtering the Table
  After loading the site, users then have the option to filter the table of data by the date, city, state, country, and shape. A filters table was added to the page. This table takes in user input, and then filters the data table based on the criteria given by the user. Here is what that data looks like to the user:

![This is an image](https://github.com/dsilvaggio/UFOs/blob/main/Resources/Screen%20Shot%202022-05-08%20at%209.18.05%20AM.png)

Two functions were then created in our JavaScript file that allowed us to keep track of the filters being entered, and then filter the data table based on the different filter inputs. On the back end, our two functions are saving the element, value, and id of the variable that is being changed from the filter that is entered. It then loops through all the the filters that were saved and filters the data table on our page. On the front end, the user just needs to enter the filter criteria, and then hit the enter button on their computer. The table will the update based on the filters inputed from the user. An example of a filtered table is below.

![This is an image](https://github.com/dsilvaggio/UFOs/blob/main/Resources/Screen%20Shot%202022-05-08%20at%209.17.05%20AM.png)
## Summary
