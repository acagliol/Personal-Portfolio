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
  {
    slug: "a-little-bit-about-me",
    title: "A Little Bit About Me",
    summary:
      "How competitive Rocket League shaped the way I think about growth, systems, and iteration, and how that eventually led me toward computer science and finance.",
    date: "2026-03-06",
    displayDate: "March 6, 2026",
    readTime: "4 min read",
    content: [
      "I have been meaning to start writing on here for a while, but I was not really sure what the first post should be about. I guess the easiest place to start is just explaining a little bit about who I am and how I ended up interested in the things I am working on now.",
      "Right now I am a computer science student who is also studying finance. Most of the things I spend my time thinking about live somewhere between those two worlds. I like building things, understanding how systems work, and figuring out why certain ideas scale while others do not.",
      "But honestly none of that was really the plan when I was younger.",
      "From about the ages of 12 to 15 I spent an absurd amount of time playing Rocket League. I probably put over three thousand hours into the game during those years. It was not casual gaming either. I got really into the competitive side of it: ranked play, tournaments, watching higher level players, and trying to understand what they were doing differently.",
      "I have always loved competing, but what I loved even more was improving.",
      "One thing that pushed me a lot was being around people who were better than me. Playing against stronger players forces you to adapt quickly. You start noticing things you never saw before, and suddenly the game looks completely different. I learned pretty early that if you surround yourself with people who are ahead of you, you improve much faster.",
      "I ended up hitting Grand Champion in under 600 hours, which in the Rocket League community is considered pretty unusual. Most players at that point are still around Diamond or Champion, usually somewhere between 300 and 600 hours. I think the reason I improved quickly was because I spent a lot of time studying players who were already better than me and trying to understand how they approached the game.",
      "Eventually I kept climbing and later reached SSL, Supersonic Legend, which is the highest rank in the game.",
      "At the time that felt like a huge accomplishment, but looking back the more important thing was the mindset that came from it.",
      "Competitive games are basically feedback machines. Every mistake shows up immediately. Every improvement shows up in your results. You review what went wrong, adjust something, and try again. That loop of iteration became something I really enjoyed.",
      "At some point my curiosity shifted from just playing games to understanding the systems behind things. I started getting more interested in computers, software, and how technology actually works under the hood. Learning to code opened a completely different door because suddenly you are not just interacting with systems, you are building them.",
      "Around the same time I also started getting pulled into finance. Markets are fascinating because they are another kind of complex system. Instead of processing information like software does, markets process incentives, expectations, and capital. They are messy, unpredictable, and incredibly interesting to study.",
      "The intersection between computer science and finance is where a lot of my interests live today.",
      "This blog is mostly just going to be a place where I write about things I am learning, building, and thinking about along the way.",
    ],
  },
]
