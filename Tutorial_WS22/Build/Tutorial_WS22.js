"use strict";
var Tutorial_WS22;
(function (Tutorial_WS22) {
    Tutorial_WS22.ƒ = FudgeCore;
    Tutorial_WS22.ƒS = FudgeStory;
    console.log("Tutorial WS22 starting");
    Tutorial_WS22.transition = {
        puzzle: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_06.jpg",
            edge: 1
        },
        puzzle2: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_04.png",
            edge: 1
        },
        puzzle3: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_05.jpg",
            edge: 1
        },
        puzzle4: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_07.png",
            edge: 1
        },
        puzzle5: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_08.png",
            edge: 1
        },
        puzzle6: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_09.png",
            edge: 1
        },
        puzzle7: {
            duration: 1,
            alpha: "Images/Transitions/jigsaw_10.png",
            edge: 1
        }
    };
    Tutorial_WS22.sound = {
        // themes
        // SFX
        drop: "Audio/drop.mp3"
    };
    Tutorial_WS22.locations = {
        beachDay: {
            name: "Beach Day",
            background: "Images/Backgrounds/Beach_day.png"
        },
        beachEvening: {
            name: "Beach Evening",
            background: "Images/Backgrounds/Beach_evening.png"
        }
    };
    Tutorial_WS22.characters = {
        narrator: {
            name: ""
        },
        protagonist: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Tutorial_WS22.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "",
                happy: "Images/Characters/aisaka_happy.png",
                upset: ""
            }
        }
    };
    Tutorial_WS22.items = {
        egg: {
            name: "Egg",
            description: "An eggish egg",
            image: "Images/Items/Egg.png"
            // static: true
        }
    };
    function getAnimation() {
        return {
            start: { translation: Tutorial_WS22.ƒS.positions.bottomleft },
            end: { translation: Tutorial_WS22.ƒS.positionPercent(70, 100) },
            duration: 1,
            playmode: Tutorial_WS22.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Tutorial_WS22.getAnimation = getAnimation;
    // **** DATA THAT WILL BE SAVED (GAME PROGRESS) ****
    Tutorial_WS22.dataForSave = {
        nameProtagonist: "",
        interrupt: false,
        aisakaPoints: 0,
        pickedOk: false,
        pickedMeterBar: false,
        aisakaScore: 0
    };
    // horizontal Shaker
    async function horizontalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateX(20px)`;
            }
            else {
                scene.style.transform = `translateX(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateX(0px)`;
    }
    Tutorial_WS22.horizontalShake = horizontalShake;
    // vertical Shaker
    async function verticalShake() {
        let scene = document.getElementsByTagName("scene")[0];
        for (let i = 0; i < 15; i++) {
            if (i % 2 == 0) {
                scene.style.transform = `translateY(20px)`;
            }
            else {
                scene.style.transform = `translateY(-20px)`;
            }
            await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateY(0px)`;
    }
    Tutorial_WS22.verticalShake = verticalShake;
    function credits() {
        Tutorial_WS22.ƒS.Text.print("");
    }
    // Menu shortcuts
    let inGameMenuButtons = {
        save: "Save",
        load: "Load",
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    // open = Menü ist offen und false = Menü ist zu 
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButtons.save:
                await Tutorial_WS22.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await Tutorial_WS22.ƒS.Progress.load();
                break;
            case inGameMenuButtons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButtons.credits:
                credits();
        }
    }
    //  Menu shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Tutorial_WS22.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Tutorial_WS22.ƒS.Progress.save();
                break;
            case Tutorial_WS22.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Tutorial_WS22.ƒS.Progress.load();
                break;
            case Tutorial_WS22.ƒ.KEYBOARD_CODE.M:
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Tutorial_WS22.ƒS.Menu.create(inGameMenuButtons, buttonFunctionalities, "gameMenuCSSClass");
        buttonFunctionalities("Close");
        // **** SCENE HIERARCHY ****
        let scenes = [
            // { id: "Write", scene: Text, name: "We write some text" },
            // { id: "Choose", scene: Choices, name: "We build in some choices"},
            { id: "Animate", scene: Tutorial_WS22.Animations, name: "We animate" },
            { id: "Fill", scene: Tutorial_WS22.MeterBar, name: "We create a meter bar" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Tutorial_WS22.dataForSave = Tutorial_WS22.ƒS.Progress.setData(Tutorial_WS22.dataForSave, uiElement);
        // start the sequence
        Tutorial_WS22.ƒS.Progress.go(scenes);
    }
})(Tutorial_WS22 || (Tutorial_WS22 = {}));
var Tutorial_WS22;
(function (Tutorial_WS22) {
    async function Text() {
        console.log("Text Scene");
        let text = {
            Aisaka: {
                T0000: "Dieser Text ist über die text-Variable definiert. <p>Dies hingegen ist ein Paragraph.</p>",
                T0001: "",
                T0002: ""
            }
        };
        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAisaka").style.display = "none";
        // cpms = characters per millisecond
        Tutorial_WS22.ƒS.Speech.setTickerDelays(80, 5000);
        // let signalDelay3: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(3)]);
        Tutorial_WS22.ƒS.Speech.hide();
        await Tutorial_WS22.ƒS.Location.show(Tutorial_WS22.locations.beachEvening);
        await Tutorial_WS22.ƒS.update(Tutorial_WS22.transition.puzzle.duration, Tutorial_WS22.transition.puzzle.alpha, Tutorial_WS22.transition.puzzle.edge);
        await Tutorial_WS22.ƒS.Character.show(Tutorial_WS22.characters.aisaka, Tutorial_WS22.characters.aisaka.pose.happy, Tutorial_WS22.ƒS.positions.bottomcenter);
        Tutorial_WS22.ƒS.update(1);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Hi, ich bin Aisaka!");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, text.Aisaka.T0000);
        // signalDelay3();
        // ------ INVENTORY AUSLAGERN ------
        // ƒS.Inventory.add(items.egg);
        // Mit einer for-Schleife mehrere Items auf einmal generieren:
        // for (let i: number = 0; i < 5; i++) {
        //   ƒS.Inventory.add(items.egg);
        // }
        // Öffnet das Inventar
        // await ƒS.Inventory.open();
        // await ƒS.Speech.tell(characters.aisaka, text.Aisaka.T0000 + dataForSave.nameProtagonist);
        // ƒS.Text.addClass("novelpage");
        // await ƒS.Text.print("Hi");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Und wie heißt du?");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.protagonist, "Hi ich bin der Protagonist aka der Spieler. " + "Ich heiße ", true, "Player");
        Tutorial_WS22.dataForSave.nameProtagonist = await Tutorial_WS22.ƒS.Speech.getInput();
        Tutorial_WS22.characters.protagonist.name = Tutorial_WS22.dataForSave.nameProtagonist;
        console.log(Tutorial_WS22.dataForSave.nameProtagonist);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Hi " + Tutorial_WS22.dataForSave.nameProtagonist + "!");
        // await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positionPercent(70, 100));
        // ƒS.update(1);
        // dmg-visualization
        // ƒS.Text.addClass("testCSSClass");
        // ƒS.Text.print("-5 dmg");
        Tutorial_WS22.ƒS.Speech.clear();
        Tutorial_WS22.ƒS.Speech.hide();
        // ƒS.Character.hide(characters.aisaka);
        Tutorial_WS22.ƒS.update(1);
    }
    Tutorial_WS22.Text = Text;
})(Tutorial_WS22 || (Tutorial_WS22 = {}));
var Tutorial_WS22;
(function (Tutorial_WS22) {
    async function Choices() {
        console.log("Choices");
        Tutorial_WS22.ƒS.Speech.hide();
        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAisaka").style.display = "none";
        await Tutorial_WS22.ƒS.Location.show(Tutorial_WS22.locations.beachDay);
        await Tutorial_WS22.ƒS.update(Tutorial_WS22.transition.puzzle.duration, Tutorial_WS22.transition.puzzle.alpha, Tutorial_WS22.transition.puzzle.edge);
        await Tutorial_WS22.ƒS.Character.show(Tutorial_WS22.characters.aisaka, Tutorial_WS22.characters.aisaka.pose.happy, Tutorial_WS22.ƒS.positionPercent(70, 100));
        await Tutorial_WS22.ƒS.update(1);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Versuchen wir nun einmal ein paar Auswahlmöglichkeiten einzubauen, " + Tutorial_WS22.dataForSave.nameProtagonist + "!");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Kannst du mir dabei helfen?");
        // return "Text";
        // ƒS.update(2);
        let dialogue = {
            iSayYes: "Klar",
            iSayOk: "Okay",
            iSayNo: "Nö",
            iSayBla: "Bla"
        };
        let dialogueElement = await Tutorial_WS22.ƒS.Menu.getInput(dialogue, "choicesCSSClass");
        switch (dialogueElement) {
            case dialogue.iSayYes:
                // continue path here
                console.log(dialogue.iSayYes);
                await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "ja");
                Tutorial_WS22.dataForSave.aisakaPoints += 10;
                break;
            case dialogue.iSayNo:
                // continue path here
                console.log(dialogue.iSayNo);
                await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "nein");
                // return Text();
                break;
            case dialogue.iSayOk:
                // continue path here
                console.log(dialogue.iSayOk);
                // dataForSave.pickedOk = true;
                await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "ok");
                return "Write";
                break;
            case dialogue.iSayBla:
                // continue path here
                console.log(dialogue.iSayBla);
                await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "bla");
                break;
        }
        Tutorial_WS22.ƒS.Speech.clear();
        Tutorial_WS22.ƒS.Speech.hide();
        // return "Text";
    }
    Tutorial_WS22.Choices = Choices;
})(Tutorial_WS22 || (Tutorial_WS22 = {}));
var Tutorial_WS22;
(function (Tutorial_WS22) {
    async function Animations() {
        console.log("Animation scene started");
        let signalDelay1 = Tutorial_WS22.ƒS.Progress.defineSignal([() => Tutorial_WS22.ƒS.Progress.delay(1)]);
        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = true);
        document.getElementById("scoreForAisaka").style.display = "none";
        Tutorial_WS22.ƒS.Speech.hide();
        await Tutorial_WS22.ƒS.Location.show(Tutorial_WS22.locations.beachDay);
        // await ƒS.update(transition.puzzle.duration, transition.puzzle.alpha, transition.puzzle.edge);
        await Tutorial_WS22.ƒS.update(1, "Images/Transitions/jigsaw_06.jpg");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Gleich wirst du eine Animation sehen.");
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Bist du bereit?");
        await Tutorial_WS22.ƒS.Character.show(Tutorial_WS22.characters.aisaka, Tutorial_WS22.characters.aisaka.pose.happy, Tutorial_WS22.ƒS.positions.bottomcenter);
        await Tutorial_WS22.ƒS.update(1);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Los geht's!");
        // signalDelay1();
        await Tutorial_WS22.ƒS.Character.animate(Tutorial_WS22.characters.aisaka, Tutorial_WS22.characters.aisaka.pose.happy, Tutorial_WS22.getAnimation());
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Tadaah.");
        await Tutorial_WS22.ƒS.Character.hide(Tutorial_WS22.characters.aisaka);
        await Tutorial_WS22.ƒS.update(1);
        Tutorial_WS22.ƒS.Speech.clear();
        Tutorial_WS22.ƒS.Speech.hide();
        await Tutorial_WS22.ƒS.update(0.5);
        // signalDelay1();
    }
    Tutorial_WS22.Animations = Animations;
})(Tutorial_WS22 || (Tutorial_WS22 = {}));
var Tutorial_WS22;
(function (Tutorial_WS22) {
    async function MeterBar() {
        console.log("Meterbar");
        // let text = {
        //   Aisaka: {
        //     T0000: "Lass uns zusammen eine Meterbar erstellen!</p>",
        //     T0001: "",
        //     T0002: ""
        //   }
        // };
        document.getElementsByName("aisakaScore").forEach(meterStuff => meterStuff.hidden = false);
        Tutorial_WS22.ƒS.Speech.hide();
        // ƒS.update(2);
        await Tutorial_WS22.ƒS.Location.show(Tutorial_WS22.locations.beachEvening);
        // await ƒS.update(5, "Images/Transitions/jigsaw_06.jpg");
        await Tutorial_WS22.ƒS.update(3, Tutorial_WS22.transition.puzzle4.alpha, Tutorial_WS22.transition.puzzle4.edge);
        // await ƒS.update(transition.puzzle4.duration, transition.puzzle4.alpha, transition.puzzle4.edge);
        // ƒS.update(2);
        // await ƒS.Character.show(characters.aisaka, characters.aisaka.pose.happy, ƒS.positions.bottomcenter);
        // ƒS.update(1);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Nun kommen wir zur Meterbar");
        // Punktevergabe, visualisiert durch eine Skala
        Tutorial_WS22.dataForSave.aisakaScore += 20;
        // Test-Novelpage
        Tutorial_WS22.ƒS.Text.addClass("novelpage");
        await Tutorial_WS22.ƒS.Text.print("Hi");
        Tutorial_WS22.dataForSave.aisakaScore += 50;
        console.log(Tutorial_WS22.dataForSave.nameProtagonist);
        await Tutorial_WS22.ƒS.Speech.tell(Tutorial_WS22.characters.aisaka, "Hast du gesehen wie sie sich füllt?");
        Tutorial_WS22.ƒS.Speech.clear();
        Tutorial_WS22.ƒS.Speech.hide();
    }
    Tutorial_WS22.MeterBar = MeterBar;
})(Tutorial_WS22 || (Tutorial_WS22 = {}));
//# sourceMappingURL=Tutorial_WS22.js.map