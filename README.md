# Welcome to the microsoft-hackathon wiki!

This project was created during a Hackaton in April 2020. A collaborative project facilitated by Brainstation in partnership and e-hosted by Microsoft for 3 days. In a team setting composed by 2 Web Developers, 2 Data Scientists and 2 UX Designers, the hackathon's theme was to identify and solve a common problem for people amidst the COVID-19 pandemic.

Our team chose to name itself Team Rocket (yes, Pokemon rules!) and our target audience was focused more on professionals who are now working from home. Our objective was to assist them in networking and connecting online with peers now that most in-person events are cancelled.

Our Data Scientists began gathering data with an Online Survey, which was distributed and made available on the internet. The initial data results are analyzed and shown below:

### Survey result: What people like the most about working from home
![](https://media.discordapp.net/attachments/703368684571459714/704735753791340647/AAEwyqwaGMhFAAAAAElFTkSuQmCC.png?width=829&height=456)

The graphs above show that most people enjoy the free time they now have alongside work. 


### Survey results: What people dislike the most about working from home ![](https://media.discordapp.net/attachments/703368684571459714/704735827049185300/wSnz7epf3j5gAAAABJRU5ErkJggg.png?width=829&height=461)

The data above shows that most interviewees dislike the lonely feeling and also work.

Next, we identify who our interviewees were - with the intention of creating personas and refining our project.

### Who were our users
![](https://media.discordapp.net/attachments/703368684571459714/704740325683363850/DLYnyRV2kAAAAASUVORK5CYII.png)

Most of our surveyees are currently unemployed and/or students. This confirms the need for a networking platform for those who are looking to connect with peers during the pandemic. The survey did not identify those who were already unemployed prior to the pandemic or lost their jobs due to it.

Using natural language processing to create a recommendation engine base on the cosine similarity algorithm to help the user meet the right person.

## Our idea

We began brainstorming and decided to create an application that would enable video calls between professionals who need to take a break from work and connect with peers online for a chat. Users are matched based on their profile interests. 

### Initial mockups

Website's homepage
![](https://media.discordapp.net/attachments/703368684571459714/704772879220211752/Screen_Shot_2020-04-28_at_15.14.09.png)

Web portal once users are logged in
![](https://media.discordapp.net/attachments/703368684571459714/704772100346478663/Screen_Shot_2020-04-28_at_15.11.42.png?width=742&height=480)

The web development team used the UX sketches to create a simple prototype implemented with HTML/CSS/Javascript. Our idea is to have the ability to chat 1 on 1 but also have the option of joining bigger groups of your interest, on the left-hand side you see the tags - which are basically groups you can join the chat room or video. The pairing of individuals would NOT be randomized, you will be paired up with someone that shares the same interests as your based on the recommendation engine from the dataset.

The final prototype video can be seen below and also in YouTube https://youtu.be/QuOCn4Xyx3o

![1](https://media.discordapp.net/attachments/705529523491307574/705597551730229309/ezgif-4-158b17089175.gif)


### To run the application

Download the repo, run ```npm install``` to install the dependencies. Then run ```npm start```. Then applicatino should be executed on port 9967. Add ```#init``` after the URL to make this peer the initiator. Copy URL to another tab to make it the connector.
