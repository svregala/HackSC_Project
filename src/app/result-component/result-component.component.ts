import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})

export class ResultComponentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  names = ['John', 'Jane', 'Jim', 'Joan'];
  query = '';
  suggestions: any;

  updateSuggestions() {
    this.suggestions = this.names.filter(name => name.startsWith(this.query));
  }

  articles = [    {title: 'Why Financial Education Matters Today', body: `April is National Financial Literacy Month – and we are suggesting some changes. Americans are in need of financial education and coaching, and the goal should be more than basic literacy, it should be financially empowering our communities. People are struggling with economic hardships caused by new and ongoing forms of inequity: pay and benefit gaps for women and people of color, racial and gender wealth gaps, generational poverty, and pandemic-related expenses and job losses. Low-income families have also been hit the hardest by general inflation and recent sticker shock on basic necessities like groceries and gas.

  Although financial education can’t predict or prevent an economic crisis, it does help individuals, families, and communities weather difficult times with more resilience and less stress. Understanding money management can help anyone improve their economic situation and prepare for a brighter future regardless of their income level. Here’s why financial education matters and what you should keep in mind during this financial literacy month.
  
    
  Why Is Financial Education Important?
  Today, two thirds of American adults cannot pass a basic financial literacy test; nearly half can’t cover a minor emergency, and a third have no money saved for retirement. This means that much of the US population may be at serious economic risk now or later in their lives. Providing all Americans with financial education in grade school, the workplace, and communities will help improve economic security for everyone. This leads to many important and lasting benefits:
  
  Improved financial wellness for everyone, now and in the future. Children are capable of learning about money management from a very young age, and financial literacy can prepare them for everything from saving up for a gaming console to saving up for college. Later, it helps adults manage budgets, build savings, establish good credit, and invest funds wisely so they can make major purchases and life plans. Financial education lets people retire comfortably and provide for loved ones’ futures.
  Ways to break the cycle of generational poverty. Low-income families often don’t have education in financial wellness practices to pass to their children. Because related education isn’t currently part of most grade school curricula, such children are left to their own devices. Understanding money matters helps families plan and pay for major and minor life expenses regardless of their income level while continuously building wealth. This helps them pass both wealth and money management skills to future generations.
  Increased likelihood that young people will attend college. Children whose parents create college savings accounts are three times more likely to go to college and four times more likely to graduate. Given that most high-quality jobs today require a bachelor’s degree, it’s essential that parents and caregivers open and contribute to these accounts as early as possible in their children’s lives. Ensuring that children are financially literate at a young age will also help them avoid student debt problems.
  Reduced wealth gaps for improved social and economic justice. Providing high-quality financial education in schools and communities leads to better money management for historically disadvantaged groups who need it most. Today, women and people of color continue to experience systemic pay and wealth gaps compared to White men. Until this is no longer the case, well-informed financial management and planning are essential to mitigating that loss for these groups as much as possible.
  Increased financial independence. People who understand how to manage their finances are less likely to rely on loans from family members and high-interest predatory lenders; women are less likely to rely on male breadwinners. Financial education makes people less susceptible to scams and risky investments, and it offers more resources in difficult times. Being financially stable and independent reduces stress, and it sets a good example for everyone around an economically stable individual.
  Healthier, more prosperous communities. When every individual is financially educated and able to manage wealth effectively, the communities they live in benefit as well. A more educated local workforce leads to food security, home purchases, fewer neighborhood foreclosures, the launch and success of more small businesses, and lower crime rates. The more communities thrive, the more they attract outside businesses and homeowners that will continue to boost their economic health.
  Is an essential tool during an economic crisis. In a 2020 survey, 88% of Americans said they suffered increased financial stress because of the pandemic. Layoffs, reduced work hours, hospitalizations, childcare needs, and more led to significant pocketbook strain. Financial literacy education offers tools that help individuals and businesses become more resilient during and after economic crises.`, 

  headerImage: 'https://picsum.photos/200'},    {title: 'Financial literacy and the need for financial education: evidence and implications', body: `Throughout their lifetime, individuals today are more responsible for their personal finances than ever before. With life expectancies rising, pension and social welfare systems are being strained. In many countries, employer-sponsored defined benefit (DB) pension plans are swiftly giving way to private defined contribution (DC) plans, shifting the responsibility for retirement saving and investing from employers to employees. Individuals have also experienced changes in labor markets. Skills are becoming more critical, leading to divergence in wages between those with a college education, or higher, and those with lower levels of education. Simultaneously, financial markets are rapidly changing, with developments in technology and new and more complex financial products. From student loans to mortgages, credit cards, mutual funds, and annuities, the range of financial products people have to choose from is very different from what it was in the past, and decisions relating to these financial products have implications for individual well-being. Moreover, the exponential growth in financial technology (fintech) is revolutionizing the way people make payments, decide about their financial investments, and seek financial advice. In this context, it is important to understand how financially knowledgeable people are and to what extent their knowledge of finance affects their financial decision-making.

  An essential indicator of people’s ability to make financial decisions is their level of financial literacy. The Organisation for Economic Co-operation and Development (OECD) aptly defines financial literacy as not only the knowledge and understanding of financial concepts and risks but also the skills, motivation, and confidence to apply such knowledge and understanding in order to make effective decisions across a range of financial contexts, to improve the financial well-being of individuals and society, and to enable participation in economic life. Thus, financial literacy refers to both knowledge and financial behavior, and this paper will analyze research on both topics.
  
  As I describe in more detail below, findings around the world are sobering. Financial literacy is low even in advanced economies with well-developed financial markets. On average, about one third of the global population has familiarity with the basic concepts that underlie everyday financial decisions (Lusardi and Mitchell, 2011c). The average hides gaping vulnerabilities of certain population subgroups and even lower knowledge of specific financial topics. Furthermore, there is evidence of a lack of confidence, particularly among women, and this has implications for how people approach and make financial decisions. In the following sections, I describe how we measure financial literacy, the levels of literacy we find around the world, the implications of those findings for financial decision-making, and how we can improve financial literacy.
  
  2 How financially literate are people?
  2.1 Measuring financial literacy: the Big Three
  In the context of rapid changes and constant developments in the financial sector and the broader economy, it is important to understand whether people are equipped to effectively navigate the maze of financial decisions that they face every day. To provide the tools for better financial decision-making, one must assess not only what people know but also what they need to know, and then evaluate the gap between those things. There are a few fundamental concepts at the basis of most financial decision-making. These concepts are universal, applying to every context and economic environment. Three such concepts are (1) numeracy as it relates to the capacity to do interest rate calculations and understand interest compounding; (2) understanding of inflation; and (3) understanding of risk diversification. Translating these concepts into easily measured financial literacy metrics is difficult, but Lusardi and Mitchell (2008, 2011b, 2011c) have designed a standard set of questions around these concepts and implemented them in numerous surveys in the USA and around the world.
  
  Four principles informed the design of these questions, as described in detail by Lusardi and Mitchell (2014). The first is simplicity: the questions should measure knowledge of the building blocks fundamental to decision-making in an intertemporal setting. The second is relevance: the questions should relate to concepts pertinent to peoples’ day-to-day financial decisions over the life cycle; moreover, they must capture general rather than context-specific ideas. Third is brevity: the number of questions must be few enough to secure widespread adoption; and fourth is capacity to differentiate, meaning that questions should differentiate financial knowledge in such a way as to permit comparisons across people. Each of these principles is important in the context of face-to-face, telephone, and online surveys.
  
  Three basic questions (since dubbed the “Big Three”) to measure financial literacy have been fielded in many surveys in the USA, including the National Financial Capability Study (NFCS) and, more recently, the Survey of Consumer Finances (SCF), and in many national surveys around the world. They have also become the standard way to measure financial literacy in surveys used by the private sector. For example, the Aegon Center for Longevity and Retirement included the Big Three questions in the 2018 Aegon Retirement Readiness Survey, covering around 16,000 people in 15 countries. Both ING and Allianz, but also investment funds, and pension funds have used the Big Three to measure financial literacy. The exact wording of the questions is provided in Table 1.
  
  Table 1 The “Big Three” financial literacy questions
  Full size table
  2.2 Cross-country comparison
  The first examination of financial literacy using the Big Three was possible due to a special module on financial literacy and retirement planning that Lusardi and Mitchell designed for the 2004 Health and Retirement Study (HRS), which is a survey of Americans over age 50. Astonishingly, the data showed that only half of older Americans—who presumably had made many financial decisions in their lives—could answer the two basic questions measuring understanding of interest rates and inflation (Lusardi and Mitchell, 2011b). And just one third demonstrated understanding of these two concepts and answered the third question, measuring understanding of risk diversification, correctly. It is sobering that recent US surveys, such as the 2015 NFCS, the 2016 SCF, and the 2017 Survey of Household Economics and Financial Decisionmaking (SHED), show that financial knowledge has remained stubbornly low over time.
  
  Over time, the Big Three have been added to other national surveys across countries and Lusardi and Mitchell have coordinated a project called Financial Literacy around the World (FLat World), which is an international comparison of financial literacy (Lusardi and Mitchell, 2011c).
  
  Findings from the FLat World project, which so far includes data from 15 countries, including Switzerland, highlight the urgent need to improve financial literacy (see Table 2). Across countries, financial literacy is at a crisis level, with the average rate of financial literacy, as measured by those answering correctly all three questions, at around 30%. Moreover, only around 50% of respondents in most countries are able to correctly answer the two financial literacy questions on interest rates and inflation correctly. A noteworthy point is that most countries included in the FLat World project have well-developed financial markets, which further highlights the cause for alarm over the demonstrated lack of the financial literacy. The fact that levels of financial literacy are so similar across countries with varying levels of economic development—indicating that in terms of financial knowledge, the world is indeed flat—shows that income levels or ubiquity of complex financial products do not by themselves equate to a more financially literate population.
  
  Table 2 Findings from the FLat World project across 15 countries
  Full size table
  Other noteworthy findings emerge in Table 2. For instance, as expected, understanding of the effects of inflation (i.e., of real versus nominal values) among survey respondents is low in countries that have experienced deflation rather than inflation: in Japan, understanding of inflation is at 59%; in other countries, such as Germany, it is at 78% and, in the Netherlands, it is at 77%. Across countries, individuals have the lowest level of knowledge around the concept of risk, and the percentage of correct answers is particularly low when looking at knowledge of risk diversification. Here, we note the prevalence of “do not know” answers. While “do not know” responses hover around 15% on the topic of interest rates and 18% for inflation, about 30% of respondents—in some countries even more—are likely to respond “do not know” to the risk diversification question. In Switzerland, 74% answered the risk diversification question correctly and 13% reported not knowing the answer (compared to 3% and 4% responding “do not know” for the interest rates and inflation questions, respectively).
  
  These findings are supported by many other surveys. For example, the 2014 Standard & Poor’s Global Financial Literacy Survey shows that, around the world, people know the least about risk and risk diversification (Klapper, Lusardi, and Van Oudheusden, 2015). Similarly, results from the 2016 Allianz survey, which collected evidence from ten European countries on money, financial literacy, and risk in the digital age, show very low-risk literacy in all countries covered by the survey. In Austria, Germany, and Switzerland, which are the three top-performing nations in term of financial knowledge, less than 20% of respondents can answer three questions related to knowledge of risk and risk diversification (Allianz, 2017).`, headerImage: 'https://picsum.photos/200'},   
  
  
  {title: 'Making Sense of Financial Literacy', body: `The Great Recession, a Covid-economy, mounting student debt and record-breaking inflation all characterize the economic lifespan to-date of Generation Z. But despite these challenges, students are more likely to be prepared than ever thanks to a greater emphasis on educating young people in personal finance.

  Nearly 25 states require some form of financial literacy curriculum in public schools, with more states set to review additional legislation this year. However, ten years ago, this was not the case, and it was trustee and TC alumna ​​Joyce B. Cowin (M.A. ’52) who paved the way and established TC’s Cowin Financial Literacy Program.
  
  “When the market collapsed in 2008, many wonderful, hardworking people who had saved money throughout their lives lost their homes, their credit and their money because they didn’t know the right questions to ask,” Cowin said upon the program’s launch. “And that should never happen again.”
  
  Cowin recognized that the economic strife that affected so many Americans could have been somewhat mitigated by better financial education. Now, after ten years, the Cowin Financial Literacy program has served thousands of people across the US and internationally at no-cost to them, providing these educators with the support and tools to help students master key economic concepts.
  
  Designed for classroom teachers, pre-service teachers and other educators, the Cowin Program focuses on essential financial concepts, such as savings, investing, budgeting, financial planning, credit, risk, consumption, and diversification while offering professional development credits.
  
  “Our program is built on the principle that people learn best by doing, as first espoused by John Dewey a century ago at Teachers College,” explained former TC faculty member Anand R. Marri, Ph.D., the program’s lead architect and former Vice President and Head of Outreach & Education at the Federal Reserve Bank of New York, and current Dean of Ball State University’s Teachers College.
  
  Distinctive in its emphasis on education and real-life case studies, the Cowin program is unique in equipping educators with a robust grasp on financial literacy that can be passed down to students for years to come.
  
  Its thoughtful approach is similar to that of its namesake, whose philanthropic endeavors have not only left profound marks upon Teachers College, but New York City itself. Cowin is the founding benefactor of the TC-affiliated Heritage School, an East Harlem public high school specializing in the arts. A former member of the College’s Alumni Council, she has served on the Board of Trustees for more than 30 years. With her late mother, Sylvia Berger, Joyce also funded the creation of TC’s Cowin Conference Center.
  
  Thanks to Cowin, the Program has reached educators and students in all 50 states and more than 15 countries through in-person Summer Institutes, online courses, professional development workshops at professional conferences (i.e., National Council for Social Studies annual conference), or the downloading of Cowin case studies and related lesson plans.
  
  “I really enjoyed the case study model, and I found so many of the resources we read and reviewed to be applicable to multiple courses I teach, not just economics,” said former Cowin Fellow Christine L., while another, Hillary H., declared, “I'm eager to share this with my students — and with colleagues who may be interested in teaching it as well. I appreciated the diversity in the case studies and was particularly interested in our week on behavioral economics.”
  
  More than 5,000 educators have participated in the Program and a large percentage of these educators continue to share the Cowin materials with their colleagues. Because of this, it is estimated that over 1,000,000 students across the United States have directly benefited from the Cowin Financial Literacy Program.`, headerImage: 'https://picsum.photos/200'},
  {title: ' How to Invest in Stocks', body: `Investing in stocks means buying shares of ownership in a public company. Those small shares are known as the company’s stock, and by investing in that stock, you’re hoping the company grows and performs well over time.

  When that happens, your shares may become more valuable, and other investors may be willing to buy them from you for more than you paid for them. That means you could earn a profit if you decide to sell them.
  
  A good rule of thumb is to have a diversified investment portfolio and to stay invested, even when the market has ups and downs.
  
  One of the best ways for beginners to learn how to invest in stocks is to put money in an online investment account, which can then be used to invest in shares of stock or stock mutual funds.
  
  With many brokerage accounts, you can start investing for the price of a single share. Some brokers also offer paper trading, which lets you learn how to buy and sell with stock market simulators before you invest any real money.
  
  » Don't have a brokerage account? Learn what it is and how to open one.
  
  How to invest in stocks in six steps
  There is no one-size-fits-all method for how to invest in stocks, but this six-step process could help you get started. First, figure out how hands-on you want to be, open an account, choose between stocks and funds, set a budget, focus on the long-term, and finally, manage your portfolio. 
  
  1. Decide how you want to invest in the stock market
  There are several ways to approach stock investing. Choose the option below that best represents how you want to invest, and how hands-on you'd like to be in picking and choosing the stocks you invest in.
  
  A. "I'd like to choose stocks and stock funds on my own." Keep reading; this article breaks down things hands-on investors need to know, including how to choose the right account for your needs and how to compare stock investments.
  
  » See our roundup of the best online brokers
  
  B. "I'd like an expert to manage the process for me." You may be a good candidate for a robo-advisor, a service that offers low-cost investment management. Virtually all of the major brokerage firms and many independent advisors offer these services, which invest your money for you based on your specific goals.
  
  » View our picks for the best robo-advisors
  
  C. “I’d like to start investing in my employer’s 401(k).” This is one of the most common ways for beginners to start investing.
  
  In many ways, it teaches new investors some of the most proven investing methods: making small contributions on a regular basis, focusing on the long-term and taking a hands-off approach. Most 401(k)s offer a limited selection of stock mutual funds, but not access to individual stocks.
  
  » Learn more about retirement accounts
  
  ADVERTISEMENT
  Fidelity
  Fidelity
  
  Interactive Brokers IBKR Pro
  Interactive Brokers IBKR Pro
  
  E*TRADE
  E*TRADE
  
  NerdWallet rating 5.0/5
  NerdWallet rating 5.0/5
  NerdWallet rating 5.0/5
  Fees 
  
  $0
  
  per trade for online U.S. stocks and ETFs
  
  Fees 
  
  $0.005
  
  per share; as low as $0.0005 with volume discounts
  
  Fees 
  
  $0
  
  per trade
  
  Account minimum 
  
  $0
  
  Account minimum 
  
  $0
  
  Account minimum 
  
  $0
  
  Promotion 
  
  Get $100
  
  when you open a new, eligible Fidelity account with $50 or more. Use code FIDELITY100. Limited time offer. Terms apply.
  
  Promotion 
  
  Exclusive!
  
  US resident opens a new IBKR Pro individual or joint account receives 0.25% rate reduction on margin loans. Tiers apply.
  
  Promotion 
  
  Get up to $600 or more
  
  when you open and fund an E*TRADE account
  
  2. Choose an investing account
  Once you have a preference in mind, you're ready to shop for an investment account. For the hands-on types, this usually means a brokerage account. For those who would like a little help, opening an account through a robo-advisor is a sensible option. We break down both processes below.
  
  An important point: Both brokers and robo-advisors allow you to open an account with very little money.
  
  The DIY option: Opening a brokerage account
  An online brokerage account likely offers your quickest and least expensive path to buying stocks, funds and a variety of other investments. With a broker, you can open an individual retirement account, also known as an IRA, or you can open a taxable brokerage account if you’re already saving adequately for retirement in an employer 401(k) or other plan.
  
  » View our top picks for IRA accounts
  
  We have a guide to opening a brokerage account if you need a deep dive. You'll want to evaluate brokers based on factors such as costs, investment selection and investor research and tools.
  
  The passive option: Opening a robo-advisor account
  A robo-advisor offers the benefits of stock investing, but doesn't require its owner to do the legwork required to pick individual investments. Robo-advisor services provide complete investment management: These companies will ask you about your investing goals during the onboarding process and then build you a portfolio designed to achieve those aims.
  
  This may sound expensive, but the management fees here are generally a fraction of the cost of what a human investment manager would charge: Most robo-advisors charge about 0.25% of your account balance. And yes — you can also get an IRA at a robo-advisor if you wish.
  
  One thing to note is that although robo-advisors are relatively inexpensive, read the fine print and choose your provider carefully.
  
  Some providers require a certain percentage of an account to be held in cash. The providers generally pay very low interest on the cash position, which can be a major drag on performance and may create an allocation that is not ideal for the investor. These required cash allocation positions are sometimes more than 10%.
  
  If you choose to open an account at a robo-advisor, you probably needn't read further in this article — the rest is just for those DIY types.
  
  3. Learn the difference between investing in stocks and funds`, headerImage: 'https://picsum.photos/200'}
  ];


}
