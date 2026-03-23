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
