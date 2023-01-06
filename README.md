# UFO Sighting Data Analysis

## Overview:

The overall purpose of this analysis is to create a table and organize UFO sighting data that is stored as a JavaScript array, or list. This table have the ability to filter data based on certain criteria. It is dynamic table that will react to user input, and then for data visualization place the table into an HTML file. We used JavaScript as the primary coding language to build the dashboards for visualization and customization. 

The UFO sightings data that Dana has found in the form of objects- array or list. We iterated using forEach function that loops through the array of objects in UFO sightings data file and then appended them to an HTML table row. By doing so, we created a table in which every UFO sightings available for viewers. We then used D3 JavaScript to add interactive functionality to the table for customization.

## Coding Languages: 
* JavaScript, HTML, CSS, and D3.js

## Results: 

The first table we created uses date to filter the table. Filtering the table by date (image shown below). This filtered table uses a date time in the HTML document and JavaScript code to listen for events and searches the date time column to find rows that match user input. This is a user-driven data visualizations. 

![image](https://user-images.githubusercontent.com/114262970/210973844-f68cc0b9-7a73-4ca2-b423-33a4d63568ed.png)

In order to further fine tune the customization, we added multiple search catagories. Table shown below. In this table, users can to set multiple filters and search for UFO sightings. This feature will helps viewrs/readers to reasonably look through the table and study about the UFO sightings. 

![image](https://user-images.githubusercontent.com/114262970/210976972-a3cd3665-c18b-4578-8319-96336f4ae2dd.png)

## Summary:

In summary, creating an interactive table by customizing online UFO sightings information using tables equipped with several fully functional filters allow users to interact with visualizations. However, there a drawback with such design, unable to evaluate a general seasonal trend or generate correlation between sightings and date/time. I recommend creating a new column for month/season to generate seasonal correlation. The other drawback; the data indicated only a single country information, mention the country in the Title instead of having country in the table/filter. This will reduce the size of the table for better visualization.
