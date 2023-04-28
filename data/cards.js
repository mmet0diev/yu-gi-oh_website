export const cards = [

    // Monsters
    {
        type: "Monster",
        name: "Dark Magician",
        atk: 2500,
        def: 2100,
        level: 7,
        attr: "Dark",
        desc: "The ultimate wizard.",
        img: "../imgs/cards/darkmag.png"
      },
  
      {
        type: "Monster",
        name: "Dark Magician Girl",
        atk: 2000,
        def: 1700,
        level: 6,
        attr: "Dark",
        desc: "A powerful apprentice wizzard.",
        img: "../imgs/cards/dmgirl.png"
      },

      {
        type: "Spell",
        name: "Stop Defence",
        desc: "Select 1 defence position monster on your opponent's field and change it to Attack Position.",
        img: "../imgs/cards/stopdef.png"
      },
  
      {
        type: "Monster",
        name: "Gaia The Fierce Knight",
        atk: 2300,
        def: 2100,
        level: 7,
        attr: "Earth",
        desc: "A knight whose horse travels faster than the wind.",
        img: "../imgs/cards/gaia.png"
      },
      
      {
        type: "Trap",
        name: "Gift of The Mystical Elf",
        desc: "Increase your life points by 300 for each monster on the field.",
        img: "../imgs/cards/elfgift.png"
      },

      {
        type: "Monster",
        name: "Summoned Skull",
        atk: 2500,
        def: 1200,
        level: 6,
        attr: "Dark",
        desc: "A fiend that summons other fiends.",
        img: "../imgs/cards/skull.png"
      },
  
      {
        type: "Monster",
        name: "Alpha The Magnet Warrior",
        atk: 1400,
        def: 1700,
        level: 4,
        attr: "Earth",
        desc: "Alpha, Beta and Gamma to form 1 powerful monster.",
        img: "../imgs/cards/alpha.jpg"
      },
  
      {
        type: "Monster",
        name: "Beta The Magnet Warrior",
        atk: 1700,
        def: 1600,
        level: 4,
        attr: "Earth",
        desc: "Alpha, Beta and Gamma to form 1 powerful monster.",
        img: "../imgs/cards/beta.jpg"
      },
  
      {
        type: "Monster",
        name: "Gamma The Magnet Warrior",
        atk: 1500,
        def: 1800,
        level: 4,
        attr: "Earth",
        desc: "Alpha, Beta and Gamma to form 1 powerful monster.",
        img: "../imgs/cards/gamma.jpg"
      },
  
      {
        type: "Monster",
        name: "Beaver Warrior",
        atk: 1200,
        def: 1500,
        level: 4,
        attr: "Earth",
        desc: "What this creature lacks in size, makes up with defence.",
        img: "../imgs/cards/beaverwar.jpg"
      },
  
      {
        type: "Monster",
        name: "Buster Blader",
        atk: 2600,
        def: 2300,
        level: 7,
        attr: "Earth",
        desc: "Effect: Gains 500 atk points for each dragon controlled or in the GY of your opponent",
        img: "../imgs/cards/busterblade.jpg"
      },
  
      {
        type: "Monster",
        name: "Celtic Guardian",
        atk: 1400,
        def: 1200,
        level: 4,
        attr: "Earth",
        desc: "An elf who learned to wield a sword he baffles enemies with his agility and speed.",
        img: "../imgs/cards/celticwar.jpg"
      },
  
      {
        type: "Monster",
        name: "Curse of Dragon",
        atk: 2000,
        def: 1500,
        level: 5,
        attr: "Dark",
        desc: "A wicked dragon that taps into dark forces to execute a powerful attack.",
        img: "../imgs/cards/cursedragon.jpg"
      },
  
      {
        type: "Monster",
        name: "Feral Imp",
        atk: 1300,
        def: 1400,
        level: 4,
        attr: "Dark",
        desc: "A playful little thing that lurks in the dark, waiting to attack a unweary enemy.",
        img: "../imgs/cards/feral.jpg"
      },
  
      {
        type: "Monster",
        name: "Gazelle K.O.M.B.",
        atk: 1500,
        def: 1200,
        level: 4,
        attr: "Earth",
        desc: "This monster moves so fast that it looks like an illusion to normal eyes",
        img: "../imgs/cards/gazelle.jpg"
      },
  
      {
        type: "Monster",
        name: "Giant Stone Soldier",
        atk: 1300,
        def: 2000,
        level: 4,
        attr: "Earth",
        desc: "A giant warrior made of stone.",
        img: "../imgs/cards/giantstonesol.jpg"
      },
  
      {
        type: "Monster",
        name: "Kuriboh",
        atk: 300,
        def: 200,
        level: 1,
        attr: "Dark",
        desc: "Effect: During damage calculation, if your opponent attacks this monster you take no battle damage.",
        img: "../imgs/cards/kuriboh.jpg"
      },
  
      {
        type: "Monster",
        name: "Mystical Elf",
        atk: 800,
        def: 2000,
        level: 4,
        attr: "Dark",
        desc: "A delicate elf that lacks offense but has incredible defence.",
        img: "../imgs/cards/mystelf.jpg"
      },
  
      {
        type: "Monster",
        name: "Winged Drag Guardian",
        atk: 1400,
        def: 1200,
        level: 6,
        attr: "Dark",
        desc: "A dragon commonly found guarding fortresses.",
        img: "../imgs/cards/wingdraguard.jpg"
      },
  
      // Spells/Traps
  
      {
        type: "Spell",
        name: "Brain Control",
        desc: "Pay 800 lp, then target a normal summoned monster your opponent controls, and take control of it until the end phase of that turn.",
        img: "../imgs/cards/brainctrl.jpg"
      },
  
      {
        type: "Spell",
        name: "Burning Land",
        desc: "When this card is activated, destroy all spell cards on the field, the turn player takes 500 damage.",
        img: "../imgs/cards/burnland.jpg"
      },
  
      {
        type: "Spell",
        name: "Card Destruction",
        desc: "Both players have to throw their current hand into the graveyard and draw a new hand equal to the cards thrown.",
        img: "../imgs/cards/cardestruct.jpg"
      },
  
      {
        type: "Spell",
        name: "Dark Magic Attack",
        desc: "If you control 'Dark Magician' destroy all your opponent's spell/trap cards on their field.",
        img: "../imgs/cards/darkmagicatk.jpg"
      },
  
      {
        type: "Trap",
        name: "Dark Renewal",
        desc: "When your opponent normal/special summons a monster(s), target 1 of those monsters and a spellcaster you control, send both to the GY, then you can special summon a dark spellcaster monster from your deck or GY.",
        img: "../imgs/cards/darkrenew.jpg"
      },
  
      {
        type: "Spell",
        name: "De-fusion",
        desc: "Defuse a target fused moonster on the field, either your own or your opponent's.",
        img: "../imgs/cards/defusion.jpg"
      },
  
      {
        type: "Spell",
        name: "Detonate",
        desc: "Destroys as many 'Kuriboh' monsters you control, and then destroys an equal number of your opponents controlled monsters.",
        img: "../imgs/cards/detonate.jpg"
      },
  
      {
        type: "Spell",
        name: "Exchange",
        desc: "Both players reveal their hands and add 1 card from eachothers hand to their own.",
        img: "../imgs/cards/exchange.jpg"
      },
  
      {
        type: "Trap",
        name: "The Eye of Truth",
        desc: "Your opponent must keep their hand revealed. Once per turn, during your opponent's standby phase. If they have a spell card, they gain 1000 lp at resolution.",
        img: "../imgs/cards/eyeoftruth.jpg"
      },
  
      {
        type: "Spell",
        name: "Horn of The Unicorn",
        desc: "The equipped monster gains 700 atk and def points. When this card is sent to the GY, instead return it at the top of the deck.",
        img: "../imgs/cards/hornunic.jpg"
      },
  
      {
        type: "Trap",
        name: "Lightforce Sword",
        desc: "Banishes 1 card from your opponent's hand for 4 turns.",
        img: "../imgs/cards/lforcesword.jpg"
      },
  
      {
        type: "Trap",
        name: "Magical Hats",
        desc: "During your opponent's phase, choose 2 trap cards from your deck and 1 monster from your field, puts the monster in def mode and the 2 traps under the hats, the traps can remain only during the phase of this card.",
        img: "../imgs/cards/magicalhats.jpg"
      },
  
      {
        type: "Trap",
        name: "Magic Cylinder",
        desc: "When your opponent attacks, target the monster's attack and re-route the attack to your directly at your opponent's, they lose lifepoints equal to that attack.",
        img: "../imgs/cards/magicyl.jpg"
      },
  
      {
        type: "Trap",
        name: "Mirror Force",
        desc: "When your opponent's monster declares an attack, destroy all of their monsters in atk mode.",
        img: "../imgs/cards/mirrorforce.jpg"
      },
  
      {
        type: "Spell",
        name: "Monster Reborn",
        desc: "Revive 1 monster from your or your opponent's GY.",
        img: "../imgs/cards/mreborn.jpg"
      },
  
      {
        type: "Spell",
        name: "Monster Recovery",
        desc: "Target one of your monsters on the field, take it and your hand, shuffle them in your deck and draw a new hand equal to the number of cards you shuffled.",
        img: "../imgs/cards/mrecovery.jpg"
      },
  
      {
        type: "Spell",
        name: "Mystic Box",
        desc: "Target 1 monster your opponent controls and 1 you control, destroy the 1st and give control of the 2nd to your opponent.",
        img: "../imgs/cards/mystbox.jpg"
      },
  
      {
        type: "Spell",
        name: "Polymerization",
        desc: "Fusion summon 1 monster from your extra deck using 2 of your currently controlled monsters on the field.",
        img: "../imgs/cards/polym.jpg"
      },
  
      {
        type: "Spell",
        name: "Pot of Greed",
        desc: "Allows you to draw 2 cards at once.",
        img: "../imgs/cards/potgreed.jpg"
      },
  
      {
        type: "Trap",
        name: "Shift",
        desc: "When your opponent targets 1 monster you control, either to attack or use a spell/trap on it, target another one you control, that monster is the new target.",
        img: "../imgs/cards/shift.jpg"
      },
  
      {
        type: "Trap",
        name: "Spell Binding Circle",
        desc: "Target 1 monster your opponent controls, while this card is active, that monster can't attack or change it's position.",
        img: "../imgs/cards/spellbindcircle.jpg"
      },
  
      {
        type: "Spell",
        name: "Swords of Revealing Light",
        desc: "When activated, prevents your opponent from attacking you for 3 round turns, ends on your 3rd turn.",
        img: "../imgs/cards/swordsrevlight.jpg"
      },
  
  
  
      // {
      //     type: "Monster",
      //     name: "Slifer the Sky Dragon",
      //     atk: NaN,
      //     def: NaN,
      //     level: 10,
      //     attr: "Divine",
      //     desc: "A god-like monster that can destroy any enemy.",
      //     img: "../imgs/cards/slifer.jpg"
      //   }

    {
        type: "Monster",
        name: "Red-Eyes B. Dragon",
        atk: 2400,
        def: 2000,
        level: 7,
        attr: "Dark",
        desc: "A ferocious dragon with a deadly attack.",
        img: "../imgs/cards/redeyes.png"
      },
  
      {
        type: "Monster",
        name: "Flame Swordsman",
        atk: 1800,
        def: 1600,
        level: 5,
        attr: "Fire",
        desc: "A swordsman that can summon flames.",
        img: "../imgs/cards/fswordsman.jpg"
      },
  
      {
        type: "Monster",
        name: "Time Wizard",
        atk: 500,
        def: 400,
        level: 2,
        attr: "Light",
        desc: "Effect: Once per turn: You can toss a coin and call it. If you call it right, destroy all monsters your opponent controls. If you call it wrong, destroy as many monsters you control as possible, and if you do, take damage equal to half the total ATK those destroyed monsters had while face-up on the field.",
        img: "../imgs/cards/twizz.jpg"
      },
      
      {
        type: "Monster",
        name: "Giltia the D. Knight",
        atk: 1850,
        def: 1500,
        level: 5,
        attr: "Light",
        desc: "'Guardian of the labirynth'. 'Protector of the Throne'.",
        img: "../imgs/cards/giltia.jpg"
      }
      ,
      
      {
        type: "Monster",
        name: "Garoozis",
        atk: 1850,
        def: 1500,
        level: 5,
        attr: "Fire",
        desc: "An axe-swinging beast-warrior with the head of a dragon..",
        img: "../imgs/cards/garoozis.png"
      },
  
      {
        type: "Monster",
        name: "Aligator's Sword",
        atk: 1500,
        def: 1200,
        level: 4,
        attr: "Earth",
        desc: "ey, dis mighty lissard man can swing his sword so fast, dat it's more dan da speed a sound!.",
        img: "../imgs/cards/aligatorswords.png"
      },
  
      {
        type: "Monster",
        name: "Axe Raider",
        atk: 1700,
        def: 1150,
        level: 4,
        attr: "Earth",
        desc: "An axe-wielding monster of tremendous strength and agility.",
        img: "../imgs/cards/axeraid.png"
      },
  
      {
        type: "Monster",
        name: "Aligator's Sword Dragon",
        atk: 1700,
        def: 1500,
        level: 5,
        attr: "Wind",
        desc: "Effect: This card can attack your opponent directly if the only face-up monsters they control are EARTH, WATER, or FIRE.",
        img: "../imgs/cards/aligatordrag.png"
      },
  
      {
        type: "Monster",
        name: "Baby Dragon",
        atk: 1200,
        def: 700,
        level: 3,
        attr: "Wind",
        desc: "Much more than just a child, this dragon is gifted with untapped power.",
        img: "../imgs/cards/babydrag.png"
      },
  
      {
        type: "Monster",
        name: "Battle Warrior",
        atk: 700,
        def: 1000,
        level: 3,
        attr: "Earth",
        desc: "A warrior that fights with his bare hands!!!",
        img: "../imgs/cards/battlewar.png"
      },
  
      {
        type: "Monster",
        name: "Hayabusa Knight",
        atk: 1000,
        def: 700,
        level: 3,
        attr: "Earth",
        desc: "Effect: This card can make a second attack during each Battle Phase.",
        img: "../imgs/cards/hayabusa.png"
      },
  
      {
        type: "Monster",
        name: "Gierfried the Iron Knight",
        atk: 1800,
        def: 1600,
        level: 4,
        attr: "Earth",
        desc: "Effect: If either player equips an Equip Card(s) to this card: Destroy that Equip Card(s).",
        img: "../imgs/cards/jinzo.png"
      },
  
      {
        type: "Monster",
        name: "Masaki The Legendary Swordsman",
        atk: 1100,
        def: 1100,
        level: 4,
        attr: "Earth",
        desc: "Legendary swordmaster Masaki is a veteran of over 100 battles.",
        img: "../imgs/cards/masaki.png"
      },
  
      {
        type: "Monster",
        name: "Panther Warrior",
        atk: 2000,
        def: 1600,
        level: 4,
        attr: "Earth",
        desc: "Effect: This card cannot declare an attack unless you Tribute 1 monster.",
        img: "../imgs/cards/panthwar.png"
      },
  
      {
        type: "Monster",
        name: "Rocket Warrior",
        atk: 1500,
        def: 1300,
        level: 4,
        attr: "Dark",
        desc: "Effect: During your Battle Phase, this card cannot be destroyed by battle and you take no battle damage from attacks involving this card. If this card attacks a monster, after damage calculation: That attack target loses 500 ATK until the end of this turn.",
        img: "../imgs/cards/rockwar.png"
      },
  
      {
        type: "Monster",
        name: "Little-Winguard",
        atk: 1400,
        def: 1800,
        level: 4,
        attr: "Earth",
        desc: "Time wizzard + Baby Dragon.",
        img: "../imgs/cards/winguard.png"
      },
  
      {
        type: "Monster",
        name: "Swordsman of Landstar",
        atk: 500,
        def: 1200,
        level: 3,
        attr: "Earth",
        desc: "Effect: During your Battle Phase, this card cannot be destroyed by battle and you take no battle damage from attacks involving this card. If this card attacks a monster, after damage calculation: That attack target loses 500 ATK until the end of this turn.",
        img: "../imgs/cards/swordsman1.png"
      },
  
      {
        type: "Monster",
        name: "Thousand Dragon",
        atk: 2400,
        def: 2000,
        level: 7,
        attr: "Earth",
        desc: "Time wizzard + Baby Dragon.",
        img: "../imgs/cards/tdragon.png"
      },

      {
        type: "Spell",
        name: "Giant Trunade",
        desc: "Return all Spell and Trap Cards on the field to the hand",
        img: "../imgs/cards/giantrunade.png"
      },
  
      {
        type: "Spell",
        name: "Graceful Charity",
        desc: "Draw 3 cards, then discard 2 cards.",
        img: "../imgs/cards/gracechar.png"
      },
  
      {
        type: "Spell",
        name: "Graceful Dice",
        desc: "Roll a six-sided die. All monsters you currently control gain ATK/DEF equal to the result x 100, until the end of this turn.",
        img: "../imgs/cards/gracedice.png"
      },
  
      {
        type: "Trap",
        name: "Graverobber",
        desc: "With this card, you can take 1 spell card from your opponent's GY and use it.",
        img: "../imgs/cards/graverob.jpg"
      },
  
      {
        type: "Trap",
        name: "Kunai with Chain",
        desc: "Activate 1 or both of these effects (simultaneously). When an opponent's monster declares an attack: Target the attacking monster; change that target to Defense Position. Target 1 face-up monster you control; equip this card to that target. It gains 500 ATK.",
        img: "../imgs/cards/kunaichain.png"
      },
  
      {
        type: "Trap",
        name: "Negate Attack",
        desc: "When an opponent's monster declares an attack: Target the attacking monster; negate the attack, then end the Battle Phase.",
        img: "../imgs/cards/negateatk.png"
      },
  
      {
        type: "Spell",
        name: "Roulette Spider",
        desc: "When an opponent's monster declares an attack: Roll a six-sided die and apply the result.1: Halve your LP.2: Make that attack a direct attack.3: Choose 1 monster you control, change the attack target to it, and perform damage calculation.4: Choose 1 other monster your opponent controls, change the attack target to it, and perform damage calculation.5: Negate the attack, and if you do, inflict damage to your opponent equal to that monster's ATK. 6: Destroy that opponent's monster.",
        img: "../imgs/cards/roulettespider.png"
      },
      
      {
        type: "Spell",
        name: "Scapegoat",
        desc: "Special Summon 4 'Sheep Tokens' (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. They cannot be Tributed for a Tribute Summon. You cannot Summon other monsters the turn you activate this card (but you can Normal Set).",
        img: "../imgs/cards/scapegoat.png"
      },
      
      {
        type: "Monster",
        name: "Rude Kaiser",
        atk: 1800,
        def: 1600,
        level: 5,
        attr: "Earth",
        desc: "With an axe in each hand, this monster delivers heavy damage.",
        img: "../imgs/cards/rudekai.png"
      },

      {
        type: "Spell",
        name: "Shield & Sword",
        desc: "Switch the original ATK and DEF of all face-up monsters currently on the field, until the end of this turn.",
        img: "../imgs/cards/shieldsword.png"
      },
  
      {
        type: "Trap",
        name: "Skull Dice",
        desc: "Roll a six-sided die. All monsters your opponent currently controls lose ATK/DEF equal to the result x 100, until the end of this turn.",
        img: "../imgs/cards/skulldice.png"
      },
  
      {
        type: "Spell",
        name: "Stray Lambs",
        desc: "Special Summon 2 'Lamb Tokens' (Beast/EARTH/Level 1/ATK 0/DEF 0) in Defense Position. You cannot Summon other monsters the turn you activate this card (but you can Set).",
        img: "../imgs/cards/straylambs.png"
      },

      {
        type: "Monster",
        name: "Blue-Eyes White Dragon",
        atk: 3000,
        def: 2500,
        level: 8,
        attr: "Light",
        desc: "An extremely rare and powerful dragon.",
        img: "../imgs/cards/blueyes.jpg"
      },
  
      {
        type: "Monster",
          name: "Battle Ox",
          atk: 1700,
          def: 1000,
          level: 4,
          attr: "Earth",
          desc: "",
          img: "../imgs/cards/battleox.jpg"
        },
  
      
      {
        type: "Monster",
        name: "Saggi the Dark Clown",
        atk: 600,
        def: 1500,
        level: 3,
        attr: "Dark",
        desc: "A creepy clown that casts spells.",
        img: "../imgs/cards/saggi.jpg"
      },
  
      {
        type: "Monster",
        name: "Familiar Knight",
        atk: 1200,
        def: 1400,
        level: 3,
        attr: "Dark",
        desc: "Effect: When this card is destroyed by battle and sent to the Graveyard: Each player can Special Summon 1 Level 4 monster from their hand.",
        img: "../imgs/cards/famknight.jpg"
      },
  
      {
        type: "Monster",
        name: "Kaiser Sea Horse",
        atk: 1700,
        def: 1650,
        level: 4,
        attr: "Light",
        desc: "Effect: This card can be treated as 2 Tributes for the Tribute Summon of a LIGHT monster.",
        img: "../imgs/cards/kaiser.jpg"
      },
  
      {
        type: "Monster",
        name: "Rare Metal Dragon",
        atk: 2400,
        def: 1200,
        level: 4,
        attr: "Dark",
        desc: "Effect: This card cannot be Normal Summoned or Set.",
        img: "../imgs/cards/metaldrag.jpg"
      },
  
      {
        type: "Monster",
        name: "Peten The Dark Clown",
        atk: 500,
        def: 1200,
        level: 3,
        attr: "Dark",
        desc: "When this card is sent to your Graveyard: You can banish this card from your Graveyard; Special Summon 1 'Peten the Dark Clown' from your hand or Deck.",
        img: "../imgs/cards/peten.jpg"
      },
  
      {
        type: "Monster",
        name: "Spear Dragon",
        atk: 1900,
        def: 0,
        level: 4,
        attr: "Wind",
        desc: "Effect: During battle between this attacking card and a Defense Position monster whose DEF is lower than the ATK of this card, inflict the difference as Battle Damage to your opponent. If this card attacks, it is changed to Defense Position at the end of the Damage Step.",
        img: "../imgs/cards/speardrag.jpg"
      },
  
      {
        type: "Monster",
        name: "Vorse Raider",
        atk: 1900,
        def: 1200,
        level: 4,
        attr: "Dark",
        desc: "This wicked Beast-Warrior does every horrid thing imaginable, and loves it! His axe bears the marks of his countless victims.",
        img: "../imgs/cards/vorse.jpg"
      },
  
      {
        type: "Monster",
        name: "Paladin of White Dragon",
        atk: 1900,
        def: 1200,
        level: 4,
        attr: "Light",
        desc: "Effect: You can Ritual Summon this card with 'White Dragon Ritual'. At the start of the Damage Step, if this card attacks a face-down Defense Position monster: Destroy that face-down monster. You can Tribute this card; Special Summon 1 'Blue-Eyes White Dragon' from your hand or Deck, but 'Blue-Eyes White Dragons' cannot attack for the rest of this turn.",
        img: "../imgs/cards/whitedragpala.jpg"
      },
  
      {
        type: "Monster",
        name: "X-Head Cannon",
        atk: 1800,
        def: 1500,
        level: 4,
        attr: "Light",
        desc: "A monster with a mighty cannon barrel, it is able to integrate its attacks. It attacks in many ways by combining and separating with other monsters.",
        img: "../imgs/cards/xhead.jpg"
      },
  
      {
        type: "Monster",
        name: "Y-Dragon Head",
        atk: 1500,
        def: 1600,
        level: 4,
        attr: "Light",
        desc: "Effect: Once per turn, you can either: Target 1 'X-Head Cannon' you control; equip this card to that target, OR: Unequip this card and Special Summon it. A monster equipped with this card gains 400 ATK/DEF, also if the equipped monster would be destroyed by battle or card effect, destroy this card instead.",
        img: "../imgs/cards/y-drag.jpg"
      },
  
      {
        type: "Monster",
        name: "Z-Metal Tank",
        atk: 1500,
        def: 1300,
        level: 4,
        attr: "Light",
        desc: "Effect: Once per turn, you can either: Target 1 'X-Head Cannon' or 'Y-Dragon Head' you control; equip this card to that target, OR: Unequip this card and Special Summon it. A monster equipped with this card gains 600 ATK/DEF, also if the equipped monster would be destroyed by battle or card effect, destroy this card instead",
        img: "../imgs/cards/zmetaltank.jpg"
      },
  
      {
        type: "Monster",
        name: "Lord of D.",
        atk: 1200,
        def: 1300,
        level: 4,
        attr: "Dark",
        desc: "Effect: Neither player can target Dragon monsters on the field with card effects.' you control; equip this card to that target, OR: Unequip this card and Special Summon it. A monster equipped with this card gains 600 ATK/DEF, also if the equipped monster would be destroyed by battle or card effect, destroy this card instead",
        img: "../imgs/cards/draglord.jpg"
      },
  
      {
        type: "Trap",
        name: "Attack Guidance Armour",
        desc: "When a monster declares an attack: Activate 1 of these effects. Destroy the attacking monster. Target 1 monster on the field, except the attacking monster; change the attack target to it and perform damage calculation. You can only activate 1 'Attack Guidance Armor' per turn.",
        img: "../imgs/cards/atkguide.jpg"
      },
  
      {
        type: "Spell",
        name: "Card of Demise",
        desc: "Draw until you have 3 cards in your hand, also for the rest of this turn after this card resolves, your opponent takes no damage. During the End Phase of this turn, send your entire hand to the GY. You can only activate 1 'Card of Demise' per turn. You cannot Special Summon during the turn you activate this card.",
        img: "../imgs/cards/cardemise.jpg"
      },
  
      {
        type: "Trap",
        name: "Cloning",
        desc: "When your opponent Normal or Flip Summons a monster that has a Level: Target that face-up monster; Special Summon 1 'Clone Token', with the same original Type, Attribute, Level, ATK, and DEF as that target. When that target is destroyed and sent to the GY, destroy this Token.",
        img: "../imgs/cards/cloning.jpg"
      },
  
      {
        type: "Spell",
        name: "Cost Down",
        desc: "Discard 1 card; for the rest of this turn, reduce the Levels of all monsters in your hand by 2 (even after they are Summoned).",
        img: "../imgs/cards/costdown.jpg"
      },
  
      {
        type: "Spell",
        name: "Dark Core",
        desc: "Discard 1 card, then target 1 face-up monster on the field; banish that target.",
        img: "../imgs/cards/darkcore.jpg"
      },
  
      {
        type: "Trap",
        name: "Ring of Destruction",
        desc: "During your opponent's turn: Target 1 face-up monster your opponent controls whose ATK is less than or equal to their LP; destroy that face-up monster, and if you do, take damage equal to its original ATK, then inflict damage to your opponent, equal to the damage you took. You can only activate 1 'Ring of Destruction' per turn.",
        img: "../imgs/cards/destruring.jpg"
      },
      
      {
        type: "Monster",
        name: "La Jhin the Mystical Ginie",
        atk: 1800,
        def: 1000,
        level: 4,
        attr: "Dark",
        desc: "A ginie of the lamp, that is at the beck and call if it's master.",
        img: "../imgs/cards/lajinn.png"
      },

      {
        type: "Spell",
        name: "Dimension Fusion",
        desc: "Pay 2000 Life Points. Both players Special Summon as many of their removed from play monsters as possible.",
        img: "../imgs/cards/dimensionfuse.jpg"
      },
  
      {
        type: "Spell",
        name: "Dragon Flute",
        desc: "Special Summon up to 2 Dragon monsters from your hand. 'Lord of D.' must be on the field to activate and to resolve this effect.",
        img: "../imgs/cards/dragflute.jpg"
      },
  
      {
        type: "Spell",
        name: "Enemy Controller",
        desc: "Activate 1 of these effects.Target 1 face-up monster your opponent controls; change that target's battle position.Tribute 1 monster, then target 1 face-up monster your opponent controls; take control of that target until the End Phase.",
        img: "../imgs/cards/econtroller.jpg"
      },
  
      {
        type: "Spell",
        name: "Megamorph",
        desc: "While your LP is lower than your opponent's, the equipped monster's ATK becomes double its original ATK. While your LP is higher, the equipped monster's ATK becomes half its original ATK.",
        img: "../imgs/cards/megamorph.jpg"
      },
  
      {
        type: "Spell",
        name: "Pyramid of Light",
        desc: "If this face-up card is removed from your side of the field, destroy 'Andro Sphinx' and 'Sphinx Teleia' on your side of the field and remove them from play.",
        img: "../imgs/cards/pyramidlight.jpg"
      },
  
      {
        type: "Trap",
        name: "Return of the Different Dimension",
        desc: "Pay half your Life Points; Special Summon as many of your banished monsters as possible. During the End Phase, banish all monsters that were Special Summoned by this effect.",
        img: "../imgs/cards/rfdd.jpg"
      },
  
      {
        type: "Spell",
        name: "Soul Release",
        desc: "Target up to 5 cards in any GY(s); banish them.",
        img: "../imgs/cards/soulrelease.jpg"
      },
  
      {
        type: "Spell",
        name: "Mystical Space Typhoon",
        desc: "Target 1 Spell/Trap card on the field, destroy that card",
        img: "../imgs/cards/typhoon.jpg"
      },

      {
        type: "Monster",
        name: "Copy Cat",
        atk: 0,
        def: 0,
        level: 1,
        attr: "Light",
        desc: "Effect: If this card is summoned, target 1 face-up monster your opponent controls, thsi card's attck/def becomes equal to that monster's original attck/def.",
        img: "../imgs/cards/copycat.png"
      }
]