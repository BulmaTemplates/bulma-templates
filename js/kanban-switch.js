const app = new Vue({

  el: '#app',


  data: {
    search: "",
    isSwitched: false,
    isSwitchedCustom: "Pleasant feelings",
    title: "PLEASANT FEELINGS",
    aos: "UNPLEASANT FEELINGS",
    cards: [
      {
        name: "OPEN",
        cardColor: "dark",
        items: [
          "understanding",
          "confident",
          "reliable",
          "easy",
          "amazed",
          "free",
          "sympathetic",
          "interested",
          "satisfied",
          "receptive",
          "accepting",
          "kind",
        ]
      },
      {
        name: "HAPPY",
        cardColor: "info",
        items: [
          "great",
          "gay",
          "joyous",
          "lucky",
          "fortunate",
          "delighted",
          "overjoyed",
          "gleeful",
          "thankful",
          "important",
          "festive",
          "ecstatic",
          "satisfied",
          "glad",
          "cheerful",
          "sunny",
          "merry",
          "elated",
          "jubilant"
        ]
      },
      {
        name: "ALIVE",
        cardColor: "primary",
        items: [
          "playful",
          "curageous",
          "energetic",
          "liberated",
          "optimistic",
          "provocative",
          "impulsive",
          "free",
          "frisky",
          "animated",
          "spirited",
          "thrilled",
          "wonderful"
        ]
      },
      {
        name: "GOOD",
        cardColor: "info",
        items: [
          "calm",
          "peaceful",
          "at ease",
          "comfortable",
          "pleased",
          "encouraged",
          "clever",
          "surprised",
          "content",
          "quiet",
          "certain",
          "relaxed",
          "serene",
          "free and easy",
          "bright",
          "blessed",
          "reassured"
        ]
      },
      {
        name: "LOVE",
        cardColor: "danger",
        items: [
          "loving",
          "considerate",
          "affectionate",
          "sensitive",
          "tender",
          "devoted",
          "attracted",
          "passionate",
          "admiration",
          "warm",
          "touched",
          "sympathy",
          "close",
          "loved",
          "comforted",
          "drawn toward"
        ]
      },
      {
        name: "INTERESTED",
        cardColor: "info",
        items: [
          "concerned",
          "affected",
          "fascinated",
          "intrigued",
          "absorbed",
          "inquisitive",
          "nosy",
          "snoopy",
          "engrossed",
          "curious",
        ]
      },
      {
        name: "POSITIVE",
        cardColor: "success",
        items: [
          "eager",
          "keen",
          "earnest",
          "intent",
          "anxious",
          "inspired",
          "determined",
          "excited",
          "enthusiastic",
          "bold",
          "brave",
          "daring",
          "challenged",
          "optimistic",
          "re-enforced",
          "confident",
          "hopeful",
        ]
      },
      {
        name: "STRONG",
        cardColor: "primary",
        items: [
          "impulsive",
          "free",
          "sure",
          "certain",
          "rebellious",
          "unique",
          "dynamic",
          "tenacious",
          "hardy",
          "secure"
        ]
      },
    ],
    emotions: [
      {
        name: "ANGRY",
        cardColor: "danger",
        items: [
          "irritated",
          "enraged",
          "hostile",
          "insulting",
          "sore",
          "annoyed",
          "upset",
          "hateful",
          "unpleasant",
          "offensive",
          "bitter",
          "aggressive",
          "resentful",
          "inflamed",
          "provoked",
          "incensed",
          "infuriated",
          "cross",
          "worked up",
          "boiling",
          "fuming",
          "indignant"
        ]
      },
      {
        name: "DEPRESSED",
        cardColor: "dark",
        items: [
          "lousy",
          "disappointed",
          "discouraged",
          "ashamed",
          "powerless",
          "diminished",
          "guilty",
          "dissatisfied",
          "miserable",
          "detestable",
          "repugnant",
          "despicable",
          "disgusting",
          "abominable",
          "terrible",
          "in despair",
          "sulky",
          "bad",
          "a sense of loss"
        ]
      },
      {
        name: "CONFUSED",
        cardColor: "info",
        items: [
          "upset",
          "doubtful",
          "uncertain",
          "ashamed",
          "indecisive",
          "perplexed",
          "embarassed",
          "hesitant",
          "shy",
          "stupefied",
          "disillusioned",
          "unbelieving",
          "skeptical",
          "distrustful",
          "misgiving",
          "lost",
          "unsure",
          "uneasy",
          "pessimistic",
          "tense"
        ]
      },

      {
        name: "HELPLESS",
        cardColor: "info",
        items: [
          "incapable",
          "alone",
          "paralyzed",
          "fatigued",
          "useless",
          "inferior",
          "vulnerable",
          "empty",
          "forced",
          "hesitant",
          "despair",
          "frustrated",
          "distressed",
          "woeful",
          "pathetic",
          "tragic",
          "in a stew",
          "dominated"
        ]
      },
      {
        name: "INDIFFERENT",
        cardColor: "info",
        items: [
          "dull",
          "nonchalant",
          "neutral",
          "reserved",
          "weary",
          "bored",
          "preoccupied",
          "cold",
          "disinterested",
          "lifeless"
        ]
      },
      {
        name: "AFRAID",
        cardColor: "info",
        items: [
          "fearful",
          "terrified",
          "suspicious",
          "anxious",
          "alarmed",
          "panic",
          "nervous",
          "scared",
          "worried",
          "frightened",
          "timid",
          "shaky",
          "restless",
          "doubtful",
          "threatened",
          "cowardly",
          "quaking",
          "menaced",
          "wary"
        ]
      },

      {
        name: "HURT",
        cardColor: "info",
        items: [
          "crushed",
          "tormented",
          "pained",
          "tortured",
          "dejected",
          "rejected",
          "injured",
          "offended",
          "afflicted",
          "aching",
          "victimized",
          "heartbroken",
          "agonized",
          "humiliated",
          "wronged",
          "alienated"
        ]
      },

      {
        name: "SAD",
        cardColor: "info",
        items: [
          "tearful",
          "sorrowful",
          "pained",
          "grief",
          "anguish",
          "desolate",
          "desperate",
          "pessimistic",
          "unhappy",
          "lonely",
          "grieved",
          "mournful",
          "dismayed"
        ]
      },
    ]
  },



  computed: {
    filteredCards() {

      var _this = this
      if (this.isSwitched) {


        if (this.search.length === 0) return this.emotions
        return this.emotions.map(function (card) {
          return {
            name: card.name,
            cardColor: card.cardColor,
            items: card.items.filter(function (item) {
              return item.includes(_this.search)
            })
          }
        })
      } else {

        if (this.search.length === 0) return this.cards
        return this.cards.map(function (card) {
          return {
            name: card.name,
            cardColor: card.cardColor,
            items: card.items.filter(function (item) {
              return item.includes(_this.search)
            })
          }
        })
      }

    }
  },

  methods: {
    removeCard(card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    clearSearchField() {
      this.search = ''
    }
  }
});
app.$mount("#app");