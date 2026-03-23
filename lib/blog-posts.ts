export type BlogPost = {
  slug: string
  title: string
  summary: string
  date: string
  displayDate: string
  readTime: string
  content: string[]
  href?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "lessons-from-charlie-geraci",
    title: "Lessons from Charlie Geraci: Building Prismia and Understanding Your Customer",
    summary:
      "A conversation with Charlie Geraci, founder of Prismia, about startups, product building, and what it actually means to understand a customer.",
    date: "2026-03-23",
    displayDate: "March 23, 2026",
    readTime: "6 min read",
    content: [
      "I recently had the chance to meet Charlie Geraci, founder of Prismia and a USC Iovine and Young Academy alum, and it was one of the most valuable conversations I have had about startups, product building, and what it actually means to understand a customer.",
      "What stood out most was how honest the conversation was. We talked about how easy it is to get attached to an idea and treat it like your baby, when in reality the real job is to fall in love with the problem, not the solution. Charlie shared how Prismia evolved through trial and error, customer interviews, Techstars pressure, and constant rebuilding until the team found a problem worth solving in commercial real estate.",
      "One of the biggest takeaways for me was his point that you cannot truly design for someone unless you deeply understand how they work. Instead of guessing what users wanted, he talked about almost becoming the user by sitting with brokers, learning their workflows, seeing where deals slipped through the cracks, and figuring out which pain points were actually costing them money. That idea hit me hard because it reinforced something I have been learning myself: people will say one thing in interviews, but their real behavior often tells a completely different story.",
      "Another part I really liked was his mindset on building. He emphasized that early-stage founders should think less like traditional engineers and more like hackers: question assumptions, look at problems from a different angle, and avoid overbuilding. Sometimes the smartest move is not adding another feature, but changing the whole framing of the problem. He also stressed doing things that do not scale at first, because real learning comes from getting close enough to the workflow to see what actually matters.",
      "Beyond the startup advice, I also appreciated how real he was about pressure, uncertainty, and how messy building can get behind the scenes. It was not polished founder talk. It was honest, practical, and grounded in experience. As a student trying to build in this space, that was probably the most useful part.",
      "I left the conversation thinking more clearly about product design, user research, and how important it is to stay flexible instead of forcing an idea that sounds good in theory. Really grateful to Charlie for taking the time to share his story and lessons.",
    ],
  },
  {
    slug: "spring-break-warn-signal",
    title: "Spring Break Data Exploration: When WARN Act Filings Predict the Opposite",
    summary:
      "During spring break, I found a counterintuitive pattern in mass layoff data: WARN filings are followed by stock price increases, not decreases. A deep dive into 4,284 events across 9 states.",
    date: "2026-03-16",
    displayDate: "March 16, 2026",
    readTime: "7 min read",
    content: [
      "Spring break hit differently this year. Instead of the usual routine, I spent most of it reading financial news and stumbled across something interesting: companies filing mass layoff notices under the WARN Act. The Worker Adjustment and Retraining Notification Act requires companies to give 60 days advance notice before mass layoffs, and these filings are public.",
      "The hypothesis seemed obvious. If a company is laying off hundreds of people, that is a distress signal. Stock price should go down after the filing becomes public, right? I decided to test it.",
      "I built a scraping pipeline to pull WARN filings from 9 state government websites: Texas, Florida, Virginia, California, Indiana, Illinois, Colorado, Maryland, and New York. These sites are not designed for data extraction. Each state has a different format. Some use PDFs, some use HTML tables, some bury the data in JavaScript-rendered pages. I ended up writing 9 separate scrapers, each with fallback parsers in case the website structure changed.",
      "The next challenge was entity resolution. WARN filings list company names, not stock tickers. I had to match messy company names like ABC Corporation Regional Office to actual tickers like ABC. I used fuzzy string matching with a confidence threshold of 85%, and built in a fallback to the SEC EDGAR database for edge cases. Out of 11,677 filings scraped, I successfully matched 1,067 unique public companies.",
      "Then I pulled historical stock price data for every matched ticker and ran a standard event study. For each WARN filing, I calculated abnormal returns: the difference between actual stock performance and what you would expect based on the overall market. I looked at multiple time windows: 30 days before the filing, 30 days after, 60 days after, 90 days after.",
      "Here is what I found. The signal is completely inverted.",
      "Before the WARN filing date, stocks decline by an average of 4.97%. This makes sense. The market hears rumors, sees internal memos leak, reads analyst coverage, and starts pricing in distress before the official filing appears on a government website.",
      "But after the filing? Stocks go up. The average cumulative abnormal return 30 days after a WARN filing is +2.71%, statistically significant with a t-statistic of 8.44 and a p-value under 0.0001. At 60 days it is +3.22%. At 90 days it is +5.05%.",
      "I ran subsample analyses. Maybe the signal works for smaller companies where analyst coverage is thin? Nope. Micro and small cap stocks show a positive but statistically insignificant return of +1.49% (p=0.17). Still not negative. Large and mid cap stocks show even stronger positive returns.",
      "I tested it by sector. Healthcare shows the strongest bounce: +3.99%. Technology, financials, consumer cyclical, all positive. Even industrials, which you would expect to be hit hardest by manufacturing layoffs, show a small positive return.",
      "Then I built a backtest. What if you systematically shorted every stock that filed a WARN notice? The strategy loses 99% of capital. Sharpe ratio of -0.68. Win rate of 31%. It does not just fail to work. It actively destroys money.",
      "The explanation is actually pretty clean. The WARN Act requires 60 days advance notice. By the time the filing shows up on a state website, the information is already stale. The market has priced it in through other channels: earnings calls, press releases, supply chain signals, employee reviews on Glassdoor, job postings disappearing from LinkedIn.",
      "The WARN filing itself does not add new information. It confirms what the market already suspected. And that confirmation resolves uncertainty. Once the filing is public, the worst case scenario is known. There is no more ambiguity. Investors who were sitting on the sidelines waiting for clarity can now make a decision. The stock bounces.",
      "This is a textbook example of semi-strong form market efficiency. Publicly mandated filings on government websites do not contain alpha. The information is already reflected in the price by the time it becomes official.",
      "I spent spring break building scrapers, cleaning data, debugging entity resolution logic, running statistical tests, and staring at charts that kept telling me the same thing: the signal does not work. But that is exactly the kind of result that teaches you something. Not every hypothesis pans out. The data does not care what you want it to say.",
      "The whole project is on GitHub. Full pipeline, 42 unit tests, research report with charts, and a one-page PDF memo summarizing the findings. If you are into quantitative finance or event studies, the methodology is fully reproducible.",
      "Spring break well spent.",
    ],
  },
  {
    slug: "next-stop-milan",
    title: "Next Stop: Milan",
    summary:
      "Next semester I will be studying abroad at Bocconi University in Milan, and I am excited for the environment, perspective shift, and long-term focus it can bring.",
    date: "2026-03-08",
    displayDate: "March 8, 2026",
    readTime: "3 min read",
    content: [
      "A big update for me is that next semester I will be studying abroad in Milan at Bocconi University.",
      "Bocconi is one of the top universities in Europe for economics, finance, and business, so I am really excited about the opportunity. I am looking forward to being in an environment where people are deeply focused on markets, economics, and global finance.",
      "One thing I have learned over time is that the environment you put yourself in matters a lot. Being surrounded by people who are serious about what they are doing pushes you to grow faster. I noticed that when I was younger playing competitive games, and I have noticed the same thing in school and technical communities.",
      "Being around people who think at a higher level forces you to raise your own standards.",
      "I am also excited for the perspective shift that comes from living somewhere new. Getting out of your normal environment tends to make you rethink things: how you work, how you learn, and what you actually want to build.",
      "Italy also has personal meaning for me. My family background is tied to both Italy and Argentina, so spending time there will be meaningful in a way that goes beyond just academics.",
      "I am hoping the experience gives me time to think more deeply about the intersection of technology and finance and what I want to focus on long term.",
      "Either way, I will probably be writing about the experience here along the way.",
    ],
  },
]
