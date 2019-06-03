var App = new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      title: "Game of Thrones",
      cards: [
        {
          name: "Season One",
          cardColor: "dark",
          items: [
            "winter is coming",
            "the kingsroad",
            "lord snow",
            "cripples, bastards and broken things",
            "the wolf and the lion",
            "a golden crown",
            "you win or you die",
            "the pointy end",
            "baelor",
            "fire and blood"
          ]
        },
        {
          name: "Season 2",
          cardColor: "info",
          items: [
            "the north remembers",
            "the night lands",
            "what is dead may never die",
            "garden of bones",
            "the ghost of harrenhal",
            "the old gods and the new",
            "a man without honor",
            "the prince of winterfell",
            "blackwater",
            "valar morghulis"
          ]
        },
        {
          name: "Season 3",
          cardColor: "primary",
          items: [
            "valar dohaeris ",
            "dark wings, dark words",
            "walk of punishment",
            "and now his watch is ended",
            "kissed by fire",
            "the climb",
            "the bear and the maiden fair",
            "second sons",
            "the rains of castamere",
            "mhysa"
          ]
        },
        {
          name: "Season 4",
          cardColor: "info",
          items: [
            "two swords",
            "the lion and the rose",
            "breaker of chains",
            "oathkeeper",
            "first of his name",
            "the laws of gods and men",
            "mockingbird",
            "the mountain and the viper",
            "the watchers on the wall",
            "the children"
          ]
        },
        {
          name: "Season 5",
          cardColor: "success",
          items: [
            "the wars to come",
            "the house of black and white",
            "high sparrow",
            "sons of the harpy",
            "kill the boy",
            "unbowed unbent unbroken",
            "the gift",
            "hardome",
            "the dance of dragons",
            "mother's mercy"
          ]
        },
        {
          name: "Season 6",
          cardColor: "warning",
          items: [
            "the red woman",
            "home",
            "oathbreaker",
            "book of the stranger ",
            "the door",
            "blood of my blood",
            "the broken man",
            "no one",
            "battle of the bastards",
            "the winds of winter"
          ]
        },
        {
          name: "Season 7",
          cardColor: "danger",
          items: [
            "dragonstone",
            "stormborn",
            "the queen's justice",
            "the spoils of war",
            "eastwatch",
            "beyond the wall",
            "the dragon and the wolf"
          ]
        },
        
             {
          name: "Season 8",
          cardColor: "info",
          items: [
            "winterfell",
            "a knight of the seven kingdoms",
            "the long night",
            "the last of the starks",
            "the bells",
            "the iron throne"
          ]
        }
      ]     
    }
    },
    
      
  computed: {
    filteredCards() {
      var _this = this
      if(this.search.length === 0) return this.cards
      return this.cards.map(function(card) {
        return {
          name: card.name,
          cardColor: card.cardColor,
          items: card.items.filter(function (item) {
            return item.includes(_this.search)
          })
        }
      })
    }
  },
  
  methods: {
    removeCard (card) {
      this.cards.splice(this.cards.indexOf(card), 1)
    },
    clearSearchField () {
      this.search = ''
    }
  }
});
