"use strict";
var Novel;
(function (Novel) {
    async function scene_8() {
        console.log("Bad Ending");
        let text = {
            celeste: {
                TX01: "...",
                TX02: "Ja, das ist verständlich.",
                TX03: "Dann werde ich mich auf die Suche nach anderen Stellen begeben.",
                TX04: "Der Job wäre super gewesen, hätte ich ihn bekommen.",
                TX05: "Jetzt muss ich mich wieder auf der Suche nach neuen Stellenangeboten begeben.",
                TX06: "Ich weiß nicht, ob ich das Mama erzählen soll, sie würde sich nur noch mehr Sorgen machen.",
                TX07: "Und Lucia hätte sich auch gefreut, wenn ich den Job bekommen hätte, den sie mir vorgeschlagen hat.",
                TX08: "Wie konnte ich das nur vermasseln?"
            },
            evan: {
                TX01: "Es tut mir leid, Celeste.",
                TX02: "Aber das war grade gar nicht gut.",
                TX03: "Du hast die Getränke falsch gemischt, dann war der Kunde noch so lieb und hat dir noch eine zweite Chance gegeben.",
                TX04: "Das kann ich nicht so akzeptieren, die Stelle kann ich dir daher nicht vergeben.",
                TX05: "Mach das.",
                TX06: "Ich wünsche dir trotzdem viel Glück für deinen nächsten Job."
            }
        };
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay1 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(1)]);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.office);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_sad, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.disappointed, Novel.ƒS.positionPercent(70, 105));
        await Novel.ƒS.update(2);
        await signalDelay2();
        Novel.ƒS.Sound.play(Novel.sounds.sigh_male, 1);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
        await signalDelay1();
        Novel.ƒS.Sound.play(Novel.sounds.oh, 1);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX06);
        await Novel.ƒS.Character.hide(Novel.characters.evan);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.update(1);
        // next location
        Novel.ƒS.Sound.play(Novel.sounds.rain, 0.3, false);
        await signalDelay1();
        await Novel.ƒS.update(2);
        await Novel.ƒS.Location.show(Novel.locations.street);
        await Novel.ƒS.update(Novel.transition.stripes.duration, Novel.transition.stripes.alpha, Novel.transition.stripes.edge);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_sad, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
        await Novel.ƒS.Text.print("Du hast das Bad Ending erreicht");
    }
    Novel.scene_8 = scene_8;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_1() {
        console.log("Scene 1");
        let text = {
            celeste: {
                TX01: "Alles gut bei dir Mama? Du siehst erschöpft aus.",
                TX02: "<i>Stimmt, letzten Monat hat sich Mama ihr Handgelenk gebrochen, weil sie hingefallen ist.</i>",
                TX03: "<i>Eigentlich soll sie weniger arbeiten und sich mehr ausruhen.</i>",
                TX04: "Kannst du nicht mal nachfragen, ob du in den nächsten Wochen weniger arbeiten kannst?",
                TX05: "So wie es aussieht, konnte deine Hand sich nicht komplett ausruhen.",
                TX06: "Nicht das es noch schlimmer wird.",
                TX07: "Dann lass mich nach einem Job suchen!",
                TX08: "Wenn ich einen Teilzeitjob habe, dann kommen wir noch gut über die Runden.",
                TX09: "Mach dir da keine Sorgen Mama.",
                TX10: "Wenn du jetzt weniger arbeitest, hast du mehr Zeit für Grace und kannst auf sie aufpassen.",
                TX11: "Sie wird sich bestimmt freuen, dich öfters im Haus zu sehen, um mit dir Zeit zu verbringen.",
                TX12: "Außerdem brauchst du wirklich eine Pause, sonst belastest du dich nur noch mehr damit.",
                TX13: "Ja werde ich machen."
            },
            celeste_mum: {
                TX01: "...",
                TX02: "Hallo mein Schatz.",
                TX03: "Nicht wirklich, in letzter Zeit fällt es mir schwer meine Arbeit zu machen, weil ich Schmerzen in mein Handgelenk habe.",
                TX04: "Vor allem seit ich sie vor einem Monat gebrochen habe.",
                TX05: "Darüber habe ich mir auch schon Gedanken gemacht.",
                TX06: "Aber das wird finanziell schwierig für uns, wenn ich weniger arbeiten werde, weil sich mein Gehalt dadurch kürzen wird.",
                TX07: "Nein macht das nicht Celeste.",
                TX08: "Das wäre doch zu viel für dich.",
                TX09: "Ich weiß, dass du neben der Schule noch zum Volleyball-Training gehst und auf Grace aufpasst, wann ich immer zur Arbeit gehe.",
                TX10: "Du sollst auch noch Zeit für dich und deine Freunde haben.",
                TX11: "Hmm da hast du recht, dann werde ich nächste Woche der Arbeit Bescheid geben.",
                TX12: "Aber falls es für dich zu viel wird, dann gib mir da Bescheid. Ok?",
                TX13: "Danke mein Schatz."
            }
        };
        // Code um die Bar auszublenden (die ersten zwei Codes muss man ausblenden)
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        // document.getElementById("scoreForAisaka").style.display = "none";
        //ƒS.Speech.setTickerDelays(40, 500);
        let signalDelay1 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(1)]);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]); //verzögert die Zeit zwischen den Texten
        // ƒS.Sound.fade(music.main_theme, 0.3, 0.2);
        // ƒS.Sound.play(music.main_theme, 0.3, false);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.living_room);
        await Novel.ƒS.update(Novel.transition.stripes.duration, Novel.transition.stripes.alpha, Novel.transition.stripes.edge);
        await signalDelay1();
        Novel.ƒS.Sound.play(Novel.sounds.door_opening, 1);
        await signalDelay2();
        Novel.ƒS.Sound.play(Novel.sounds.sigh_female, 1);
        await signalDelay2();
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.neutral, Novel.ƒS.positionPercent(30, 100));
        await Novel.ƒS.update(1);
        await signalDelay1();
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        // await ƒS.Character.animate(characters.celeste_mum, characters.celeste_mum.pose.sad, examAnimation());
        await Novel.ƒS.Character.show(Novel.characters.celeste_mum, Novel.characters.celeste_mum.pose.sad, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX06);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.smile, Novel.ƒS.positionPercent(30, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX09);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX10);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX09);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX10);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX11);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX12);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX11);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX12);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX13);
        await Novel.ƒS.Character.hide(Novel.characters.celeste_mum);
        await Novel.ƒS.Character.show(Novel.characters.celeste_mum, Novel.characters.celeste_mum.pose.smile, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX13);
        await signalDelay2();
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.hide(Novel.characters.celeste_mum);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.update(1);
    }
    Novel.scene_1 = scene_1;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_6() {
        console.log("Good Ending");
        let text = {
            celeste: {
                TX01: "Das freut mich zu hören.",
                TX02: "Es hat auch Spaß gemacht.",
                TX03: "Aber was heißt das für mich jetzt?",
                TX04: "Vielen Dank, dass ich den Job kriege. ",
                TX05: "Sie werden es nicht bereuen mich eingestellt zu haben.",
                TX06: "Mamaa!",
                TX07: "Ich hab die Stelle bei <i>Lovely Java</i> bekommen.",
                TX08: "Ich bin so froh, dass ich den Job habe, jetzt muss du dir nicht mehr so viele Sorgen machen."
            },
            evan: {
                TX01: "Du hast wirklich gute Arbeit geleistet, Celeste.",
                TX02: "Die Getränke hast du alle richtig gemischt und die Kunden waren alle zufrieden damit.",
                TX03: "Das heißt, dass du natürlich von uns eingestellt wirst und du die Stelle kriegst.",
                TX04: "Also über deine heutige Leistung kann ich mich nicht beschweren.",
                TX05: "Auf eine gute Zusammenarbeit, Celeste."
            },
            celeste_mum: {
                TX01: "Das hat mich richtig erschreckt.",
                TX02: "Was ist passiert?",
                TX03: "Oh da, wofür du dich letzte Woche beworben hast?",
                TX04: "Das freut mich, mein Schatz.",
                TX05: "Ich bin richtig stolz auf dich."
            }
        };
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay1 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(1)]);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.office);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_smile, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.smile2, Novel.ƒS.positionPercent(70, 105));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_happy, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX05);
        await Novel.ƒS.Character.hide(Novel.characters.evan);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.update(1);
        // next location
        await signalDelay1();
        await Novel.ƒS.update();
        await Novel.ƒS.Location.show(Novel.locations.living_room);
        await Novel.ƒS.update(Novel.transition.stripes.duration, Novel.transition.stripes.alpha, Novel.transition.stripes.edge);
        Novel.ƒS.Sound.play(Novel.sounds.door_opening, 1);
        await Novel.ƒS.update();
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_happy, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste_mum, Novel.characters.celeste_mum.pose.shocked, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(1);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX03);
        await Novel.ƒS.Character.hide(Novel.characters.celeste_mum);
        await Novel.ƒS.Character.show(Novel.characters.celeste_mum, Novel.characters.celeste_mum.pose.happy, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste_mum, text.celeste_mum.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
        await Novel.ƒS.Text.print("Du hast das Good Ending erreicht.");
    }
    Novel.scene_6 = scene_6;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    Novel.ƒ = FudgeCore;
    Novel.ƒS = FudgeStory;
    console.log("Bittersweet Treats starting");
    Novel.transition = {
        stripes: {
            duration: 1,
            alpha: "Transitions/005.jpg",
            edge: 0.2
        },
        boxes: {
            duration: 1,
            alpha: "Transitions/24.png",
            edge: 0.2
        }
    };
    Novel.sounds = {
        chuckle_female: "Audio/Sound/chuckle_female.mp3",
        door_closing: "Audio/Sound/door_closing.mp3",
        door_opening: "Audio/Sound/door_opening.mp3",
        cafe_door: "Audio/Sound/cafe_door_opening.mp3",
        gasping: "Audio/Sound/gasping_audio.mp3",
        hmm: "Audio/Sound/hmm_audio.mp3",
        oh: "Audio/Sound/oh_disappointed_female.mp3",
        rain: "Audio/Sound/rain.mp3",
        sigh_male: "Audio/Sound/sigh_male.mp3",
        sigh_female: "Audio/Sound/sigh_female.mp3",
        spoon_stir: "Audio/Sound/spoon_stir_audio.mp3",
        talking_school: "Audio/Sound/talking_school.mp3",
        chatter_school: "Audio/Sound/chatter_school.mp3"
    };
    Novel.music = {
        main_theme: "Audio/Themes/Spring-Flowers.mp3",
        cafe_theme: "Audio/Themes/romantic.mp3"
    };
    Novel.locations = {
        classroom: {
            name: "Classroom",
            background: "Background/classroom.png"
        },
        cafe: {
            name: "Café",
            background: "Background/restaurant.png"
        },
        living_room: {
            name: "Living Room",
            background: "Background/livingroom.png"
        },
        park: {
            name: "Park",
            background: "Background/park_evening.png"
        },
        street: {
            name: "Street Rain",
            background: "Background/street_rain.png"
        },
        office: {
            name: "Office",
            background: "Background/office3.png"
        },
        blackScreen: {
            name: "Narrator Talk",
            background: "Background/black_screen.png"
        }
    };
    Novel.characters = {
        narrator: {},
        celeste: {
            name: "Celeste",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Celeste_neutral.png",
                smile: "Images/Celeste_smile.png",
                school: "Images/Celeste_school_neutral.png",
                school_smile: "Images/Celeste_school_smile2.png",
                cafe_neutral: "Images/Celeste_cafe_neutral.png",
                cafe_smile: "Images/Celeste_cafe_smile.png",
                cafe_smile2: "Images/Celeste_cafe_smile2.png",
                cafe_happy: "Images/Celeste_cafe_happy.png",
                cafe_sad: "Images/Celeste_cafe_sad.png",
                cafe_oh: "Images/Celeste_cafe_oh.png"
            }
        },
        celeste_mum: {
            name: "Mutter",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                sad: "Images/Celeste_mum_sad.png",
                shocked: "Images/Celeste_mum_shocked.png",
                happy: "Images/Celeste_mum_happy.png",
                smile: "Images/Celeste_mum_smile.png"
            }
        },
        lucia: {
            name: "Lucia",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/lucia_neutral.png",
                smile: "Images/lucia_smile.png"
            }
        },
        sophie: {
            name: "Sophie"
        },
        evan: {
            name: "Evan",
            origin: Novel.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "Images/Evan_neutral.png",
                smile: "Images/Evan_smile.png",
                smile2: "Images/Evan_smile2.png",
                disappointed: "Images/Evan_disappointed.png"
            }
        },
        customer: {
            name: "Kunde"
        }
    };
    Novel.items = {};
    Novel.dataForSave = {
        celesteScore: 0,
        pickedMeterScene: false
    };
    // export function addAnimation(): ƒS.AnimationDefinition {
    //     return {
    //         start: { translation: ƒS.positions.bottomleft, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("white", 0.3) },
    //         end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("red") },
    //         duration: 1,
    //         playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    //     };
    // }
    function examAnimation() {
        return {
            start: { translation: Novel.ƒS.positionPercent(120, 100) },
            end: { translation: Novel.ƒS.positionPercent(70, 100) },
            duration: 3,
            playmode: Novel.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Novel.examAnimation = examAnimation;
    // Menü
    let menuButtons = {
        save: "Save",
        load: "Load",
        credits: "Credits",
        volumeUp: "+",
        volumeDown: "-",
        drinkList: "Getränkeliste",
        // ingredientList: "Zutatenliste"
    };
    let gameMenu;
    //Lautstärke Anpassung
    let volume = 2.0;
    function increaseSound() {
        if (volume >= 100)
            return;
        volume += 0.5;
        Novel.ƒS.Sound.setMasterVolume(volume);
    }
    Novel.increaseSound = increaseSound;
    function decreaseSound() {
        if (volume <= 0)
            return;
        volume -= 0.5;
        Novel.ƒS.Sound.setMasterVolume(volume);
        console.log("Test");
    }
    Novel.decreaseSound = decreaseSound;
    // true = Menü ist offen 
    let menuIsOpen = true;
    function seeCredits() {
        Novel.ƒS.Text.print("Bilder:....");
    }
    Novel.seeCredits = seeCredits;
    function seeDrinkList() {
        Novel.ƒS.Text.print("Schokotraum: Kakaopulver und Milch" +
            "<p>Matcha Latte: Matchapulver und Milch</p>");
    }
    Novel.seeDrinkList = seeDrinkList;
    // export function seeIngredientList(): void {
    //     ƒS.Text.print("Kakaopulver" +
    //     "<p>Kaffeepulver</p>" +
    //     "<p>Matchapulver</p>" +
    //     "<p>Milch</p>" +
    //     "<p>Schlagsahne</p>" +
    //     "<p>Zucker</p>"
    //     );
    // }
    async function buttonFunctions(_option) {
        console.log(_option);
        switch (_option) {
            case menuButtons.save:
                await Novel.ƒS.Progress.save();
                break;
            case menuButtons.load:
                await Novel.ƒS.Progress.load();
                break;
            case menuButtons.credits:
                seeCredits();
                break;
            case menuButtons.volumeUp:
                increaseSound();
                break;
            case menuButtons.volumeDown:
                decreaseSound();
                break;
            case menuButtons.drinkList:
                seeDrinkList();
                break;
            // case menuButtons.ingredientList:
            //     seeIngredientList();
            //     break;
            // case menuButtons.close:
            //     gameMenu.close();
            //     menuIsOpen = false; //false = Menü ist zu
            //     break;
        }
    }
    // Menü shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Novel.ƒ.KEYBOARD_CODE.S:
                console.log("Save");
                await Novel.ƒS.Progress.save();
                break;
            case Novel.ƒ.KEYBOARD_CODE.L:
                console.log("Load");
                await Novel.ƒS.Progress.load();
                break;
            case Novel.ƒ.KEYBOARD_CODE.M:
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
            case Novel.ƒ.KEYBOARD_CODE.C:
                console.log("Credits");
                seeCredits();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Novel.ƒS.Menu.create(menuButtons, buttonFunctions, "menuButtonsCSS");
        buttonFunctions("Close");
        let scenes = [
            // { scene: scene_1, name: "Conversation with mum" },
            // { scene: scene_2, name: "School" },
            // { scene: scene_3, name: "Narrator" }
            // { scene: scene_4, name: "Talk with Evan" },
            { scene: Novel.scene_5, name: "Mixing Drinks1" },
            { id: "Choices (Matcha & Milch)", scene: Novel.scene_5_1, name: "Mixing Drinks2" },
            { id: "Ending1", scene: Novel.scene_6, name: "Good Ending" },
            // { scene: scene_7, name: "Normal Ending" },
            // { scene: scene_8, name: "Bad Ending" }
        ];
        let uiElement = document.querySelector("[type=interface]");
        Novel.dataForSave = Novel.ƒS.Progress.setData(Novel.dataForSave, uiElement);
        // start the sequence
        Novel.ƒS.Progress.go(scenes);
    }
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_5() {
        console.log("Scene 5");
        let text = {
            celeste: {
                TX01: "Ja gerne, kommt sofort.",
                TX02: "<i>Was war die erste Zutat für den Schokotraum?",
                // TX03: "Hmm, was kommt nochmal als nächstes dran?",
                TX04: "Jetzt fehlt mir nur noch die zweite Zutat, das war glaub ich...",
                TX05: "Hier ihr Getränk.",
                TX06: "Vielen Dank, das freut mich.",
                TX07: "Oh, das tut mir leid.",
                TX08: "Ich werde beim nächsten Mal besser darauf achten.",
                TX09: "Genau, ich mische die Getränke zum ersten Mal.",
                TX10: "Aber es tut mir ebenfalls leid, dass ich das Getränk falsch gemischt habe.",
                TX11: "Die nächste Mischung wird auf jeden Fall richtig sein.",
                TX12: "... das tut mir leid."
            },
            evan: {
                TX01: "Gut gemacht Celeste.",
                TX02: "Da kommt schon der nächste Kunde.",
                TX03: "Oh, du hast eine falsche Zutat hinzugefügt.",
                TX04: "Das nächste Mal besser darauf aufpassen.",
                TX05: "Verstanden?",
                TX06: "Celeste, alle Zutaten, die du gemischt hast, sind komplett falsch.",
                TX07: "Es tut mir leid, dass sie ein falsches Getränk von uns bekommen haben.",
                TX08: "Sie werden direkt ein neues von uns kriegen.",
                TX09: "Ich entschuldige mich nochmal aufrichtig für das falsche Getränk.",
                TX10: "Das nächste Getränk werde ich selbst mischen.",
                TX11: "Celeste warte bitte im Büro auf mich."
            },
            customer: {
                TX01: "Hallo, ich hätte gerne einmal den Schokotraum bitte.",
                TX01_2: "Hallo, ich hätte gerne einmal einen ... bitte.",
                TX02: "Danke.",
                TX03: "Das schmeckt super.",
                TX04: "Hmm, das schmeckt ein bisschen anders.",
                TX05: "Aber man kann es trinken.",
                TX06: "Es tut mir leid, aber das schmeckt gar nicht gut.",
                TX07: "Das ist gar nicht das Getränk, was ich mir bestellt habe.",
                TX08: "Das ist in Ordnung, solange ich ein neues bekomme.",
                TX09: "Wenn ich das richtig höre, macht sie das zum ersten Mal.",
                TX10: "Das schmeckkt schon wieder schlecht.",
                TX11: "Also, das kann ich nicht mehr so akzeptieren.",
                TX12: "Ich habe Ihnen sogar noch ein zweite Chance gegeben."
            }
        };
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        // ƒS.Sound.play(music.cafe_theme, 0.3, true);
        await Novel.ƒS.Location.show(Novel.locations.cafe);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_smile, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        let chooseFirstIngredient = {
            ingredientOne: "Kakaopulver",
            ingredientTwo: "Kaffeepulver"
        };
        let firstChoice = await Novel.ƒS.Menu.getInput(chooseFirstIngredient, "choicesDrinks");
        switch (firstChoice) {
            case chooseFirstIngredient.ingredientOne:
                console.log("Kakaopulver");
                Novel.dataForSave.celesteScore += 50;
                console.log(Novel.dataForSave.celesteScore);
                Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
                let chooseSecondIngredient = {
                    ingredientOne: "Milch",
                    ingredientTwo: "Zucker"
                };
                let secondChoice = await Novel.ƒS.Menu.getInput(chooseSecondIngredient, "choicesDrinks");
                switch (secondChoice) {
                    case chooseSecondIngredient.ingredientOne:
                        console.log("Milch");
                        Novel.dataForSave.celesteScore += 50;
                        console.log(Novel.dataForSave.celesteScore);
                        Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX02);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX03);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
                        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.smile, Novel.ƒS.positionPercent(85, 105));
                        await Novel.ƒS.update(1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX02);
                        await Novel.ƒS.Character.hide(Novel.characters.evan);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        Novel.ƒS.Speech.hide();
                        await Novel.ƒS.update(1);
                        return "Choices (Matcha & Milch)";
                    case chooseSecondIngredient.ingredientTwo:
                        console.log("Zucker");
                        Novel.dataForSave.celesteScore -= 50;
                        console.log(Novel.dataForSave.celesteScore);
                        Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX02);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX04);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX05);
                        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.neutral, Novel.ƒS.positionPercent(85, 105));
                        await Novel.ƒS.update(1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX05);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_oh, Novel.ƒS.positionPercent(50, 100));
                        await Novel.ƒS.update(0.3);
                        Novel.ƒS.Sound.play(Novel.sounds.oh, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
                        await Novel.ƒS.Character.hide(Novel.characters.evan);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        Novel.ƒS.Speech.hide();
                        await Novel.ƒS.update(1);
                        return "Choices (Matcha & Milch)";
                }
            ////////////////////////////////////////////////////////
            case chooseFirstIngredient.ingredientTwo:
                console.log("Kaffeepulver");
                Novel.dataForSave.celesteScore += 0;
                console.log(Novel.dataForSave.celesteScore);
                Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
                let secondOptionIngredient = {
                    ingredientOne: "Milch",
                    ingredientTwo: "Zucker"
                };
                let secondRound = await Novel.ƒS.Menu.getInput(secondOptionIngredient, "choicesDrinks");
                switch (secondRound) {
                    case secondOptionIngredient.ingredientOne:
                        console.log("Milch");
                        Novel.dataForSave.celesteScore += 50;
                        console.log(Novel.dataForSave.celesteScore);
                        Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX02);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX04);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX05);
                        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.neutral, Novel.ƒS.positionPercent(85, 105));
                        await Novel.ƒS.update(1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX05);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_oh, Novel.ƒS.positionPercent(50, 100));
                        await Novel.ƒS.update(0.3);
                        Novel.ƒS.Sound.play(Novel.sounds.oh, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
                        await Novel.ƒS.Character.hide(Novel.characters.evan);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        Novel.ƒS.Speech.hide();
                        await Novel.ƒS.update(1);
                        return "Choices (Matcha & Milch)";
                    case secondOptionIngredient.ingredientTwo:
                        console.log("Zucker");
                        Novel.dataForSave.celesteScore += 0;
                        console.log(Novel.dataForSave.celesteScore);
                        Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX02);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX06);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX07);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_sad, Novel.ƒS.positionPercent(50, 100));
                        await Novel.ƒS.update(0.3);
                        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.neutral, Novel.ƒS.positionPercent(85, 105));
                        await Novel.ƒS.update(1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX06);
                        Novel.ƒS.Sound.play(Novel.sounds.sigh_male, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX07);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX08);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX08);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX09);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX09);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX10);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX11);
                        await Novel.ƒS.Character.hide(Novel.characters.evan);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        Novel.ƒS.Speech.hide();
                        await Novel.ƒS.update(1);
                        return "Choices (Matcha & Milch)";
                }
        }
    }
    Novel.scene_5 = scene_5;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_5_1() {
        let text = {
            celeste: {
                TX01: "Ja gerne, kommt sofort.",
                TX02: "<i>Was war die erste Zutat für die Matcha Latte?",
                TX03: "Jetzt fehlt mir nur noch die zweite Zutat, das war glaub ich...",
                TX04: "Hier ihr Getränk.",
                TX05: "Vielen Dank, das freut mich."
            },
            evan: {
                TX01: "Sehr gut Celeste, ein weiterer Kunde war zufrieden mit dem Getränk."
            },
            customer: {
                TX01: "Hallo, ich hätte gerne einmal die Matcha Latte bitte.",
                TX02: "Danke.",
                TX03: "Das schmeckt super.",
            }
        };
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.cafe);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_smile, Novel.ƒS.positionPercent(50, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        let chooseFirstIngredient = {
            ingredientOne: "Matchapulver",
            ingredientTwo: "Grünteepulver"
        };
        let firstChoice = await Novel.ƒS.Menu.getInput(chooseFirstIngredient, "choicesDrinks");
        switch (firstChoice) {
            case chooseFirstIngredient.ingredientOne:
                console.log("Kakaopulver");
                Novel.dataForSave.celesteScore += 50;
                console.log(Novel.dataForSave.celesteScore);
                Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
                let chooseSecondIngredient = {
                    ingredientOne: "Milch",
                    ingredientTwo: "Sahne"
                };
                let secondChoice = await Novel.ƒS.Menu.getInput(chooseSecondIngredient, "choicesDrinks");
                switch (secondChoice) {
                    case chooseSecondIngredient.ingredientOne:
                        console.log("Milch");
                        Novel.dataForSave.celesteScore += 50;
                        console.log(Novel.dataForSave.celesteScore);
                        Novel.ƒS.Sound.play(Novel.sounds.spoon_stir, 1);
                        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX02);
                        await Novel.ƒS.Speech.tell(Novel.characters.customer, text.customer.TX03);
                        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.smile, Novel.ƒS.positionPercent(85, 105));
                        await Novel.ƒS.update(1);
                        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
                        await Novel.ƒS.Character.hide(Novel.characters.evan);
                        await Novel.ƒS.Character.hide(Novel.characters.celeste);
                        Novel.ƒS.Speech.hide();
                        await Novel.ƒS.update(1);
                        return "Ending1";
                }
        }
    }
    Novel.scene_5_1 = scene_5_1;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_3() {
        console.log("Scene 3");
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay1 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(1)]);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.blackScreen);
        await Novel.ƒS.update(Novel.transition.stripes.duration, Novel.transition.stripes.alpha, Novel.transition.stripes.edge);
        await Novel.ƒS.update(1);
        await signalDelay1();
        await Novel.ƒS.Text.print("Innerhalb einer Woche hat sich Celeste für die Stelle beworben. Nach ein paar Tagen hat sie eine Antwort bekommen und muss, um die Stelle zu kriegen Probearbeiten.");
        Novel.ƒS.Text.close();
    }
    Novel.scene_3 = scene_3;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_7() {
        console.log("Normal Ending");
        let text = {
            celeste: {
                TX01: "<i>Ich kann gar nicht einschätzen, ob ich den Job jetzt kriege oder nicht.</i>",
                TX02: "<i>An Evans Gesichtsausdruck kann ich es auch nicht wirklich ablesen.</i>",
                TX03: "Und wie fandest du bis jetzt meine Arbeit?",
                TX04: "Ja, das Mischen war doch schwieriger als ich dachte.",
                TX05: "Wirklich?",
                TX06: "Vielen Dank, dass ich die Stelle bekommen habe.",
                TX07: "Ich werde mich verbessern, das wäre ich dir versprechen."
            },
            evan: {
                TX01: "Ich fand, dadurch dass du es zum ersten Mal gemacht hast, war deine Leistung durchschnittlich.",
                TX02: "Es sind dir dennoch ein paar Fehler passiert.",
                TX03: "Ich würde dich trotzdem einstellen, weil ich Potenzial in dir sehe und glaube, dass du besser wirst, je öfter du das machst.",
                TX04: "Aber bei deinen nächsten Schichten, werde ich trotzdem da sein und es bei dir kontrollieren, damit bei dir nicht mehr so oft Fehler vorkommen."
            }
        };
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.Location.show(Novel.locations.office);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_neutral, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.neutral, Novel.ƒS.positionPercent(70, 105));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_happy, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Text.print("Du hast das Normal Ending erreicht");
    }
    Novel.scene_7 = scene_7;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_2() {
        console.log("Scene 2");
        let text = {
            celeste: {
                TX01: "...",
                TX02: "Oh sorry ich hab grad nicht aufgepasst.",
                TX03: "Worüber habt ihr nochmal geredet?",
                TX04: "Ich mache mir grad ständig Gedanken um meine Mum, seitdem sie mir ihre Situation erzählt hat.",
                TX05: "Ihr geht es körperlich gerade nicht so gut, weil sie zurzeit sehr viel arbeitet.",
                TX06: "Aus dem Grund hab ich ihr vorgeschlagen, dass ich mir einen Teilzeitjob suchen werde.",
                TX07: "Aber ich finde grade keine guten Stellen.",
                TX08: "Meinst du das Café bei dir in der Nähe?",
                TX09: "Oh davon hab ich gar nicht gewusst.",
                TX10: "Dann werde ich mich direkt dort bewerben.",
                TX11: "Danke Lucia, du hast immer eine Lösung zu meinen Problemen."
            },
            lucia: {
                TX01: "Das hört sich echt cool an.",
                TX02: "Hättet ihr Lust da mal vorbeizuschauen?",
                TX03: "Wie sieht es bei dir aus Cel?",
                TX04: "Cel?",
                TX05: "Sophie hat einen Laden entdeckt mit vielen schönen Dekorationen und ich hab gefragt, ob wir alle mal hingehen wollen.",
                TX06: "Aber ist eigentlich alles gut bei dir? Du bist in den letzten Tagen abwesend.",
                TX07: "Worum ging es?",
                TX08: "Hmm kennst du das Café <i>Lovely Java</i>?",
                TX09: "Genau, ich hab gehört, dass sie zurzeit nach Aushilfen suchen.",
                TX10: "Das wäre eine gute Möglichkeit für dich, vor allem weil das Gehalt dort sehr gut sein soll und der Laden beliebt ist.",
                TX11: "Hab ich doch gern gemacht."
            },
            sophie: {
                TX01: "... da gibt es viele coole Sachen für dein Zimmer.",
                TX02: "Ja klar."
            }
        };
        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        // ƒS.Sound.fade(music.cafe_theme, 0.2, 0.2);
        // ƒS.Sound.play(sounds.talking_school, 0.1, false);
        await Novel.ƒS.Location.show(Novel.locations.classroom);
        await Novel.ƒS.update(Novel.transition.stripes.duration, Novel.transition.stripes.alpha, Novel.transition.stripes.edge);
        await signalDelay2();
        await Novel.ƒS.Character.show(Novel.characters.lucia, Novel.characters.lucia.pose.smile, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.sophie, text.sophie.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.sophie, text.sophie.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX03);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.school, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX09);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX10);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX09);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX10);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.school_smile, Novel.ƒS.positionPercent(70, 100));
        await Novel.ƒS.update(0.3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX11);
        Novel.ƒS.Sound.play(Novel.sounds.chuckle_female, 0.3, false);
        await Novel.ƒS.Speech.tell(Novel.characters.lucia, text.lucia.TX11);
        await signalDelay2();
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.hide(Novel.characters.lucia);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.update(1);
    }
    Novel.scene_2 = scene_2;
})(Novel || (Novel = {}));
var Novel;
(function (Novel) {
    async function scene_4() {
        console.log("Scene 4");
        let text = {
            celeste: {
                TX01: "<i>Wow das Café sieht richtig schön aus.</i>",
                TX02: "<i>Hier ist auch eine Menge los.</i>",
                TX03: "<i>Ich muss den Chef Evan finden.</i>",
                TX04: "<i>Er hat gemeint, dass wir uns am Tresen treffen werden.</i>",
                TX05: "Entschuldigung, ich suche gerade nach ihrem Chef Evan.",
                TX06: "Wir haben einen Termin vereinbart.",
                TX07: "Ja genau, es freut mich auch Sie kennenzulernen.",
                TX08: "<i>Ich muss also für die Kunden Getränke mischen, damit ich die Stelle bekomme.</i>",
                TX09: "<i>Das werde ich auf jeden Fall hinkriegen.</i>",
                TX10: "Ja ich habe alles verstanden.",
                TX11: "Wir können direkt loslegen."
            },
            evan: {
                TX01: "Ah Hallo du bist Celeste richtig?",
                TX02: "Schön dich kennenzulernen, ich bin Evan.",
                TX03: "Wir haben bis jetzt wegen deiner Bewerbung nur telefoniert.",
                TX04: "Du kannst mich gerne duzen.",
                TX05: "Nun zu deiner Bewerbung.",
                TX06: "Ich fand sie sehr vielversprechend und glaube, dass du gut zu uns passen würdest.",
                TX07: "Aber ich hab dich erstmal zum Probearbeiten eingeladen, weil ich sehen möchte wie du mit den Aufgaben zurechtkommst.",
                TX08: "<i>Lovely Java</i> ist bekannt für seine verschiedene Getränke und Kaffees, die wir für unsere Kunden mischen.",
                TX09: "Aus dem Grund wirst du heute ein paar Getränke mischen.",
                TX10: "Du kriegst eine Liste, wo drauf steht aus welchen Zutaten, die einzelnen Getränken und Kaffees bestehen.",
                TX11: "Die Liste kannst du dir jederzeit anschauen, falls du nicht weiterweißt.",
                TX12: "Hast du soweit alles verstanden?",
                TX13: "Das höre ich doch gerne."
            }
        };
        Novel.dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
        let signalDelay1 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(1)]);
        let signalDelay2 = Novel.ƒS.Progress.defineSignal([() => Novel.ƒS.Progress.delay(2)]);
        Novel.ƒS.Speech.hide();
        //ƒS.Sound.play(music.cafe_theme, 0.3, true);
        await Novel.ƒS.Location.show(Novel.locations.cafe);
        await Novel.ƒS.update(Novel.transition.boxes.duration, Novel.transition.boxes.alpha, Novel.transition.boxes.edge);
        Novel.ƒS.Sound.play(Novel.sounds.cafe_door, 1);
        await signalDelay2();
        await Novel.ƒS.update(1);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_smile, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(3);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX06);
        await Novel.ƒS.Character.show(Novel.characters.evan, Novel.characters.evan.pose.smile, Novel.ƒS.positionPercent(70, 105));
        await Novel.ƒS.update(2);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX01);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX02);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX03);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX04);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX05);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX06);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX07);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX09);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX10);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX11);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX12);
        Novel.ƒS.Sound.play(Novel.sounds.hmm, 1);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX08);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX09);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        await Novel.ƒS.Character.show(Novel.characters.celeste, Novel.characters.celeste.pose.cafe_smile2, Novel.ƒS.positionPercent(25, 100));
        await Novel.ƒS.update(0.3);
        Novel.ƒS.Sound.play(Novel.sounds.chuckle_female, 1);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX10);
        await Novel.ƒS.Speech.tell(Novel.characters.celeste, text.celeste.TX11);
        await Novel.ƒS.Speech.tell(Novel.characters.evan, text.evan.TX13);
        await signalDelay1();
        await Novel.ƒS.Text.print("Oben im Menü siehs du den Bereich <i>Getränkeliste</i>.<p>Auf die Liste kannst du jederzeit zugreifen, falls du beim Mischen der Getränke Hilfe brauchst</p>");
        Novel.ƒS.Text.close();
        await Novel.ƒS.Character.hide(Novel.characters.evan);
        await Novel.ƒS.Character.hide(Novel.characters.celeste);
        Novel.ƒS.Speech.hide();
        await Novel.ƒS.update(1);
    }
    Novel.scene_4 = scene_4;
})(Novel || (Novel = {}));
//# sourceMappingURL=Template.js.map