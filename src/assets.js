const f = (id, q = "") =>
  `https://framerusercontent.com/images/${id}${q ? `?${q}` : ""}`;

export const assets = {
  logo: f("2WiMcrjUQBD6g9EdmLrvIaFm60.png"),
  headshot: f("VV0vcue7Vkvb3RLZJHwqTNS7HE.jpeg", "width=800&height=800"),
  crab: f("K2avKGUYZGAYqhYZLxwK0NMiIA.png", "width=112&height=112"),
  palm: f("TliF8bgPFr8FvE1vo1DCvADMQ8.png", "width=896&height=896"),
  harvard: f("XEy1WFj3a2MnoXJruccUphvmRcw.png", "width=1089&height=529"),
  coinbaseLogo: f("82neQGJHpDENISUZOaPTtja4T4.png", "scale-down-to=2048&width=2560&height=458"),
  ibmLogo: f("crJubZTwI9xSHB6Kea8CGpQGgJo.png", "scale-down-to=2048&width=2560&height=956"),
  hanwhaLogo: f("EQkqoMecFyf8GLAy9awfgUK1BEs.png", "scale-down-to=2048&width=2666&height=641"),
  coinbase: f("aktBlKfTX0qwsjbNq0zFyLGJfI.png", "lossless=1&width=1920&height=1080"),
  ibm: f("XkpB1eaYPYa1wssGKAwv9orWRw.jpg", "width=1200&height=627"),
  hanhwa: f("BchYl6DmXYg74igkobslNrOLRk.jpg", "lossless=1&width=1800&height=1350"),
  usda: f("DELc5B5UzTfwkL0Gv4SzGz4Hk.png", "width=3642&height=2648"),
  june: f("eNgTsZcQmuKq8SRf7jJHPHFCXqE.jpeg", "width=99&height=100"),
  jolie: f("0ft3qg1fp8BimrAmSFT5zjm5Gs.jpeg"),
  aquarium: f("3sBNRoByYqxAJhsVMtJ8RoWxOQY.png", "scale-down-to=1024&width=1156&height=826"),
  collage: f("kDHAp8cjlwDJWrWvq6wFhzToY.png", "scale-down-to=1024&width=1280&height=966"),
  blog: f("U6PNUv7p6qHkVlT90yzBLXGJHfk.png", "scale-down-to=1024&width=2898&height=1642"),
  archive: f("IX3kz93IRUVcOQGHTQLDIlf3bzA.jpg", "scale-down-to=1024&width=1290&height=1719"),
  concert: f("G0U2hQv7aK5i9egKwQaiS6G6aFQ.png", "scale-down-to=1024&width=1120&height=1512"),
  vinyl: f("XMcWg1zlXZ1yLPfzqtntqbgeY.jpg", "scale-down-to=1024&width=1232&height=853"),
};

export const usdaImgs = {
  hero: f("DELc5B5UzTfwkL0Gv4SzGz4Hk.png"),
  context: f("hrPGqKQONmNRNDqrvmjIiNedP0w.png"),
  old: f("GWyGOTyQ7H6AusTQMHu9vTqypo.png"),
  research: f("KOQOt4hL1h4XoGPDsSR9WoEOOGw.png"),
  insights: f("XSUrppJrRy8QRsU6DZrCSb3VAXM.png"),
  affinity: f("3vV7TIVpaSfLBqOsaz6X0R3opWo.png"),
  patterns: f("jEjfdBOaoEmhqaQwHN0LZmIYC0c.png"),
  personaA: f("uXdKLgDOpCu5xEfFodi03X19jE.jpg"),
  personaB: f("eIVsceU7L9S6lYN6krTHZN7w99c.jpg"),
  process: f("J9p7r1B31BOI0Edw0co5QKOYYGw.jpg"),
  flexible: f("1ddTFrOSRRsYtrjhPewAYbMU.png"),
  simple: f("InKtE3nAeYZRKmJGN2Aosj56pg.png"),
  coherent: f("Cw1p6WOLNLTvqXjcHruLC2Y5T3k.png"),
  userflow: f("AUzsNdgmZq4Bp1E7nLMYiJivGHk.png"),
  journey: f("G8TQHmCML7Asq4m6vCLxrlh5AIg.png"),
  takeaway: f("XUmFVhYK9O5Eg8ZW4aLWQhNu00.jpg"),
  architecture: f("BHbf2pKvvq2K0FT4mVWX42J65c4.png"),
  loFi: f("sHJhWKQrCQHVdPK07q0iyt6osD0.png"),
  testing: f("WpI11B1XwTBes9KLBdUiAotKU.png"),
  solution: f("eRVkvAxIu2wPlqbDu9m74ssUZZk.png"),
};

export const links = {
  resume:
    "https://drive.google.com/file/d/1Bd4iLsRflw9EOaKZE4lgFxXbWA2hW6Yy/view?usp=sharing",
  resumeDriveHome: "https://drive.google.com/drive/u/0/home",
  email: "mailto:hello@artemis.com",
  emailLabel: "hpark@college.harvard.edu",
  linkedin: "https://www.linkedin.com/in/hannah-park0/",
  linkedinLabel: "linkedin.com/hannah-park",
  instagram: "https://www.instagram.com/45rpmdigger/",
  praise:
    "https://drive.google.com/file/d/1tH3F5fHcEwmFLELggcKV43bGkdzyuBPl/view",
};
