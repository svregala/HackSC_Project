import { Component, OnInit } from '@angular/core';
import { feedModel } from './feed.model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  feed: feedModel[] = [];

  textInput: string = "";

  constructor() { }

  ngOnInit(): void {
    this.feed = [
      {
        name: "Fernando",
        username: "ftorres98",
        profilePhoto: "./assets/fernando.jpg",
        date: 2,
        postText: "Curious about how to save for retirement? Use my calculator + tips & tricks for your future! RetirementCalculator.com. I have students that use this calculator and they said that this calculator has been such a big help to them; it has taught them a lot about how retirement is calculated. My inspiration in making this calculator actually came from this app. After finding myself constantly seeking financial knowledge, I decided to contribute to the world of finance. Not only did it inspire me to be a smarter spender, it has also allowed me to be of any help to those who are starting to learn more about retirement. I'm so glad to be active on this app!",
        likeCount: 102,
      } as feedModel,
      {
        name: "Kant",
        username: "kanthehe",
        profilePhoto: "./assets/dog.jpg",
        date: 2,
        postText: "Do you know how credit works? If not check out my blog on what FICO credit is! LearnFICOCreditHere.com",
        likeCount: 85,
      } as feedModel,
      {
        name: "Nehal",
        username: "nehal99",
        profilePhoto: "./assets/nehal.jpg",
        date: 4,
        postText: "If you open a Chase Sapphire preferred card right now, you can get 80,000 points. Use my referral code for an additional 20,000 points! Referral code is: ABC123EFG456! Now that I've become more financially literate, I can take advatange of the credit card perks that Chase has to offer. Before discovering this app, I was so hesistant to use a credit card and go into debt, but I realized we can employ debt to be on our side. Thanks to Fin-Friends, I found comfort in my financial journey! For anyone reading this, I highly suggest immersing yourself in this app as you will find an endless amount of resources as well as constant accountability. When you sign up, add me! Looking forward to meeting you!",
        likeCount:236,
      } as feedModel,
      {
        name: "Daniel",
        username: "dan27",
        profilePhoto: "./assets/daniel.jpg",
        date: 5,
        postText: "Just started investing $100 into S&P 500 in my Roth IRA retirement plan. I'm so excited to contribute to my retirement! Learning more about how retirement works has allowed me to strategically plan with my contributions. I'm projected to earn so much money by the time I'm 45 years old. Thank you Fin-Friends for providing such an amazing financial platform!",
        likeCount: 90,
      } as feedModel,
    ];
  }

  onSubmit(){
    this.feed.push({
      name: "temp",
      username: "nehal99",
      profilePhoto: "./assets/steve.jpg",
      date: 0,
      postText: this.textInput,
      likeCount: 0,
    } as feedModel)
    this.feed.sort((a,b) => a.date-b.date);
    this.textInput = "";
  }

}
